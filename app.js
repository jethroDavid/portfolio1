import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import $ from "jquery";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import ScrollTrigger from 'scrolltrigger-classes';

library.add(fas, far, fab)
dom.watch();


document.addEventListener("DOMContentLoaded", () => {
    let td = $('.output-table > tbody > tr > td');
    let nthChild = 7;


    var trigger = new ScrollTrigger({
        addHeight: true,
    });

    // var callback = function (scrollLeft, scrollTop, width, height) {
    //     console.log(scrollLeft, scrollTop, width, height)
    //     trigger.detach(callback)
    // }
    // trigger.attach(callback)
    $('input.number').focusout(function (event) {
        $(this).val(function (index, value) {
            //remove unncesary character 
            var value = $(this).val().replace(/[^0-9.,]*/g, '');
            value = value.replace(/\.{2,}/g, '.');
            value = value.replace(/\.,/g, ',');
            value = value.replace(/\,\./g, ',');
            value = value.replace(/\,{2,}/g, ',');
            value = value.replace(/\.[0-9]+\./g, '.');
            //do not allow null or no values
            value = !value ? 0 : value;
            //add commas using toLocaleString()
            return parseFloat(value.toString().replace(',', '')).toLocaleString();
        })
    })
    $('#calculatePrice').click(function () {
        let totalKwh = parseFloat($('#totalKwh').val().replace(',', ''));
        let perKwh = parseFloat($('#perKwh').val().replace(',', ''));
        let totalTaxIn = parseFloat($('#totalTax').val().replace(',', ''));
        let overallPrice = parseFloat($('#overallPrice').val().replace(',', ''));

        let totalAmount = totalKwh * perKwh;
        let amountPercent = (totalAmount * 100) / overallPrice;
        let totalTax = (amountPercent / 100) * totalTaxIn;
        let grossAmount = totalAmount + totalTax;

        let showAlert = () => {
            $('.alert-message > span').show();
            $('.alert-message > svg').show();
        }

        if (Number.isNaN(totalAmount) === true || Number.isNaN(totalTax) === true || Number.isNaN(amountPercent) === true || Number.isNaN(grossAmount) === true) {
            $('.alert-message > span').text('Please fill up the form completely');
            $('.alert-message > svg').attr('class', 'fas fa-exclamation-circle alert-color-bad');
            showAlert();
        } else {
            totalAmount = totalAmount.toFixed(2);
            amountPercent = amountPercent.toFixed(2);
            totalTax = totalTax.toFixed(2);
            grossAmount = grossAmount.toFixed(2);



            td[1].innerHTML = `Php ${totalAmount}`;
            td[3].innerHTML = `Php ${totalTax}`;
            td[5].innerHTML = `${amountPercent}%`;
            td[7].innerHTML = `Php ${grossAmount}`;
            $('.alert-message > span').text('Sub Meter Computation is Successful');
            $('.alert-message > svg').attr('class', 'fas fa-check alert-color-good');
            showAlert();
        }

    })
    $('#clearButton').click(function () {
        td[1].innerHTML = `Php 0.00`;
        td[3].innerHTML = `Php 0.00`;
        td[5].innerHTML = `0%`;
        td[7].innerHTML = `Php 0.00`;
        $('#totalKwh').val('');
        $('#perKwh').val(''); s
        $('#totalTax').val('');
        $('#overallPrice').val('');
    })
    $('#moreTable').click(function () {
        nthChild += 6;
        let trLength = $(`.electricity-consumption-table-container > table > tbody > tr`).length;
        $(`.electricity-consumption-table-container > table > tbody > tr:nth-child(-n+${nthChild})`).fadeIn(1000);
        if (nthChild - 6 > trLength) {
            nthChild = 7;
            $(`.electricity-consumption-table-container > table > tbody > tr:nth-child(n+${nthChild + 1})`).fadeOut(1000);
            $('#moreTable > svg').attr('class', 'fas fa-chevron-down');
        }

        (nthChild >= trLength) ? $('#moreTable > svg').attr('class', 'fas fa-chevron-up') : null;

    })
});
// console.log(config.autoA11y) // true
// config.autoA11y = true



// Add all icons to the library so you can use it in your page
// import './node_modules/scrolltrigger-classes/ScrollTrigger';
