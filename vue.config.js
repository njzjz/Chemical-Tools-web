const WebpackCdnPlugin = require('webpack-cdn-plugin')
module.exports = {
  publicPath: './',
  pluginOptions: {
    cordovaPath: 'src-cordova',
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  pwa: {
    workboxOptions: { skipWaiting: true }
  },
  configureWebpack: {
    plugins: [
      ...(process.env.CDN == 'yes' ? [] : [new WebpackCdnPlugin({
        modules: [
          { name: 'vue', var: 'Vue', path: 'dist/vue.runtime.min.js' },
          { name: 'vue-router', var: 'VueRouter', path: 'dist/vue-router.min.js' },
          { name: '@fortawesome/fontawesome-free', style: 'css/all.min.css', cssOnly: true }
        ],
        prodUrl: "//cdn.jsdelivr.net/npm/:name@:version/:path"
        // publicPath: './node_modules'
      })]
    ]
  }
}
