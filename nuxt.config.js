module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'konojunya.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '大阪を拠点にフロントエンドエンジニアとして活動しています。<br/>HAL大阪IT学部WEB開発学科。<br/><br/>基本的にはJSでコソコソ遊んでいます。IoTにも興味があり、主催者としてIoT縛りの勉強会(IoTLT)などをしています。<br/><br/>サーバーサイドはNode.jsやGoを書いています。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
