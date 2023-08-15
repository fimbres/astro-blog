const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
    plugin: [
        postcssPresetEnv({
            stage: 0,
        })
    ]
};
