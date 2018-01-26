module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'konojunya.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '大阪を拠点にフロントエンドエンジニアとして活動しています。HAL大阪IT学部WEB開発学科。基本的にはJSでコソコソ遊んでいます。IoTにも興味があり、主催者としてIoT縛りの勉強会(IoTLT)などをしています。サーバーサイドはNode.jsやGoを書いています。' },
      { hid: 'keywords', name: 'keywords', content: 'konojunya,konojunya.com,engineer,osaka,hal,website,javascript' },
      // ogp
      { hid: 'og:title', property: 'og:title', content: 'konojunya.com/README.md' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://konojunya.com' },
      { hid: 'og:image', property: 'og:image', content: 'https://s3-us-west-2.amazonaws.com/konojunya.com/ogp-image.png' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'konojunya.com/README.md' },
      { hid: 'og:description', property: 'og:description', content: '大阪でフロントエンドエンジニアとして活動しているHAL大阪の学生です！' },
      // facebook
      { hid: 'fb:app_id', property: 'fb:app_id', content: '1938369796445653' },
      // twitter
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@konojunya' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'konojunya.com/README.md' },
      { hid: 'twitter:description', name: 'twitter:description', content: '大阪でフロントエンドエンジニアとして活動しているHAL大阪の学生です！' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://s3-us-west-2.amazonaws.com/konojunya.com/ogp-image.png' },
      { hid: 'twitter:url', name: 'twitter:url', content: 'https://konojunya.com' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /**
   * Plugins
   */
  plugins: [
    { src: 'plugins/ga.js', ssr: false }
  ],
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
