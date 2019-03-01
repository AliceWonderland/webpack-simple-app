module.exports = () => ({
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
            }
        ]
    }
});