<template lang="pug">
  div#wrapper
    h1 # README
    img(src="https://circleci.com/gh/konojunya/konojunya.com/tree/master.svg?style=shield&circle-token=23da787516c0584c1519768c1c36e804c06bb72e", alt="circleci badge")
    img(src="https://img.shields.io/badge/coverage-68%25-yellow.svg", alt="coverage badge")
    img(src="https://img.shields.io/badge/node-v8.1.4-brightgreen.svg", alt="node version badge")
    img(src="https://img.shields.io/badge/npm-v5.3.0-blue.svg", alt="npm version badge")
    img(src="https://img.shields.io/badge/platform-web-lightgray.svg", alt="platform badge")
    mol-text(title="Name", :text="name")
    mol-text(title="About", :text="about")
    mol-list(title="Skill", :items="skill")
    mol-list(title="Works", :items="works")
    mol-list(title="Hobby", :items="hobby")
    mol-list(title="Likes", :items="likes")
    mol-list-link(title="Contact", :items="contact")
</template>

<script>
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
    this.name = this.$t('name')
    this.about = this.$t("about")
    this.skill = this.$t('skill')
    this.works = this.$t('works')
    this.hobby = this.$t('hobby')
    this.likes = this.$t('likes')
    this.contact = this.$t('contact')
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

