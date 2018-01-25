<template lang="pug">
  div.list
    h2 ## {{title}}
    ul
      li.listItem(v-for="item in items") {{item}}
</template>

<script>
export default {
  props: ["title", "items"]
}
</script>

<style lang="sass">
.list
  margin-bottom: 20px
.listItem
  margin: 5px 0
  margin-left: 20px
  font-size: 1.1rem
  letter-spacing: 1.1px
  list-style: none
  &:before
    content: "- "

@media (max-width: 400px)
  .listItem
    font-size: 0.9rem
</style>
