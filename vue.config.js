// 配置信息
module.exports = {
    publicPath: '/yzjWxRunService/',
    // publicPath: '/ehrService/',

    outputDir: 'dist',
    lintOnSave: true,
    runtimeCompiler: false,
    transpileDependencies: [
        /* string or regex */
    ],
    productionSourceMap: false,
    chainWebpack: () => {},
    configureWebpack: () => {},
    css: {
        // extract: true,
        // sourceMap: false,
        // loaderOptions: {},
        // modules: false
    },
    parallel: require('os').cpus().length > 1,
    pwa: {},
    devServer: {
        open: false,
        disableHostCheck: false,
        host: '0.0.0.0',
        port: 30011,
        hotOnly: false,
        compress: true,
        proxy: {
            //   '/ehrService': {
            //     target: 'http://172.20.200.117:8080',
            //     changeOrigin: true
            //   },
            '/yzjWxRunService': {
                target: 'http://172.20.200.47:10832/',
                changeOrigin: true,
            },
        },
    },
}
