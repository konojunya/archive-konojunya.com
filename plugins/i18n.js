import _ from 'lodash'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import changeCase from 'change-case'

Vue.use(VueI18n)

Vue.mixin({
  methods: {
    $tcc(path) {
      return changeCase.camelCase(this.$t(path))
    },
    $tucf(path) {
      return changeCase.upperCaseFirst(this.$t(path))
    },
    $tlcf(path) {
      return changeCase.lowerCaseFirst(this.$t(path))
    },
    $tuc(path) {
      return changeCase.upperCase(this.$t(path))
    },
    $tlc(path) {
      return changeCase.lowerCase(this.$t(path))
    }
  }
})

export default ({ app, req, isClient }) => {
  // locale
  let locale = 'ja'
  if(isClient) {
    const navigator = _.get(window, 'navigator', {})
    locale = (_.head(navigator.languages)) || navigator.language || navigator.browserLanguage
  } else if(req) {
    locale = req.headers['accept-language'].split(',')[0].toLocaleLowerCase().substr(0, 2)
  }
  //test
  locale = "it"
  app.i18n = new VueI18n({
    locale: locale || 'ja',
    fallbackLocale: 'ja',
    messages: {
      'ja': require('~/locales/ja.json'),
      'en': require('~/locales/en.json'),
      'it': require('~/locales/it.json'),
      'tw': require('~/locales/tw.json')
    }
  })
}
