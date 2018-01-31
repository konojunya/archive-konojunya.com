<template lang="pug">
  div#wrapper
    h1 # README
    img(src="https://circleci.com/gh/konojunya/konojunya.com/tree/master.svg?style=shield&circle-token=23da787516c0584c1519768c1c36e804c06bb72e", alt="circleci badge")
    img(src="https://api.codeclimate.com/v1/badges/4fcf92ae80c89808c11b/maintainability", alt="code climate")
    img(src="https://coveralls.io/repos/github/konojunya/konojunya.com/badge.svg?branch=develop", alt="coverage badge")
    img(src="https://img.shields.io/badge/node-9.2.9-brightgreen.svg", alt="node version badge")
    img(src="https://img.shields.io/npm/v/npm.svg", alt="npm version badge")
    img(src="https://img.shields.io/badge/platform-web-lightgray.svg", alt="platform badge")
    mol-text(:title="name.title", :text="name.text")
    mol-text(:title="about.title", :text="about.text")
    mol-list(:title="skill.title", :items="skill.items")
    mol-list(:title="works.title", :items="works.items")
    mol-list(:title="hobby.title", :items="hobby.items")
    mol-list(:title="likes.title", :items="likes.items")
    mol-list-link(:title="contact.title", :items="contact.items")
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
    this.name = {
      title: this.$t('name.title'),
      text: this.$t('name.text')
    }
    this.about = {
      title: this.$t("about.title"),
      text: this.$t("about.text")
    }
    this.skill = {
      title: this.$t('skill.title'),
      items: this.$t('skill.items')
    }
    this.works = {
      title: this.$t('works.title'),
      items: this.$t('works.items')
    }
    this.hobby = {
      title: this.$t('hobby.title'),
      items: this.$t('hobby.items'),
    }
    this.likes = {
      title: this.$t('likes.title'),
      items: this.$t('likes.items')
    }
    this.contact = {
      title: this.$t('contact.title'),
      items: this.$t('contact.items')
    }
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

