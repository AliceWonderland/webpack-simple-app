module.exports = () => ({
    output: {
        filename: "prod-[chunkhash].js"
    },
    module: {
        rules: [
            {
                test: /\.jpe?g$/,
                loader: [
                    {
                        loader: 'url-loader',
                        options:{
                            limit: 3000
                        }
                    }
                ]
            }
        ]
    },
});