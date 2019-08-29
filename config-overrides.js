const {injectBabelPlugin} = require('react-app-rewired')

module.exports = function override(config, env) {

    injectBabelPlugin(
        ['import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css'
        }], config,
    )

    // add decorator
    config = injectBabelPlugin(
        ['@Babel/plugin-proposal-decorators', {
            'legacy': true
        }],
        config,
    );

    return config;
}