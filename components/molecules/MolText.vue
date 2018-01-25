<template lang="pug">
  div.text
    h2 ## {{title}}
    p(v-html="text")
</template>

<script>
export default {
  props: ["title", "text"]
}
</script>

<style lang="sass">
.text
  margin-bottom: 20px
  p
    padding-left: 10px
    font-size: 1.1rem
    margin: 5px 0
    letter-spacing: 1.2px

@media (max-width: 400px)
  .text p
    font-size: 0.9rem
</style>
