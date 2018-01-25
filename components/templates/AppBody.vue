<template lang="pug">
  div#wrapper
    h1 # README
    img(src="https://circleci.com/gh/konojunya/konojunya.com/tree/master.svg?style=shield&circle-token=23da787516c0584c1519768c1c36e804c06bb72e", alt="circleci badge")
    img(src="https://img.shields.io/badge/coverage-68%25-yellow.svg", alt="coverage badge")
    img(src="https://img.shields.io/badge/node-v8.1.4-brightgreen.svg", alt="node version badge")
    img(src="https://img.shields.io/badge/npm-v5.3.0-blue.svg", alt="npm version badge")
    img(src="https://img.shields.io/badge/platform-web-lightgray.svg", alt="platform badge")
    mol-text(:title="config.name.title", :text="config.name.text")
    mol-text(:title="config.about.title", :text="config.about.text")
    mol-list(:title="config.skill.title", :items="config.skill.items")
    mol-list(:title="config.works.title", :items="config.works.items")
    mol-list(:title="config.hobby.title", :items="config.hobby.items")
    mol-text(:title="config.likes.title", :text="config.likes.text")
    mol-list-link(:title="config.contact.title", :items="config.contact.items")
</template>

<script>
import config from '~/components/config'

import MolText from '~/components/molecules/MolText.vue'
import MolList from '~/components/molecules/MolList.vue'
import MolListLink from '~/components/molecules/MolListLink.vue'

export default {
  components: {
    MolText,
    MolList,
    MolListLink
  },
  created() {
    this.config = config
  }
}
</script>

<style lang="sass">
#wrapper
  position: absolute
  top: 0
  right: 0
  width: 60%
  padding: 10px
  img
    margin: 0px 5px 10px 5px
  h1
    padding: 10px 0
@media (max-width: 900px)
  #wrapper
    position: relative
    width: 100%
    padding: 10px 20px
</style>

