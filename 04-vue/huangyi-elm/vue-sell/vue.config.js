module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.100.71.123:30002',
        changeOrigin: true,
        autoRewrite: true,
        cookieDomainRewrite: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}
