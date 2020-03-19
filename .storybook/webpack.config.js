const path = require('path');

module.exports = ({
    config
}) => {
    // Module
    config.module.rules.push({
        test: /\.scss$/,
        use: [{
                loader: 'style-loader'
            },
            {
                loader: 'css-loader'
            },
            {
                loader: 'sass-loader'
            }
        ]
    });

    // Alias
    config.resolve.alias = {
        ...config.resolve.alias,
        "~Components": path.resolve(__dirname, "../src/components"),
        "~Constants": path.resolve(__dirname, "../src/constants"),
        "~Utils": path.resolve(__dirname, "../src/utils"),
    };

    return config;
};
