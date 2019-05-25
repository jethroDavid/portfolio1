module.exports = {
    mode: process.env.NODE_ENV || 'production',
    devtool: 'source-map',
    entry: './app.js',
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'image/[name].[ext]',
                        },
                    }
                ]
            }
        ]
    }
};