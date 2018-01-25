<template lang="pug">
  div.list
    h2 ## {{title}}
    ul
      li.listItemLink(v-for="item in items") {{item.text}}: [{{item.urlName}}](
        a(:href="item.url", target="_blank") {{item.url}})
</template>

<script>
export default {
  props: ["title", "items"]
}
</script>

<style lang="sass">
.list
  margin-bottom: 20px
.listItemLink
  margin: 5px 0
  margin-left: 20px
  font-size: 1.1rem
  letter-spacing: 1.1px
  list-style: none
  &:before
    content: "- "
  a
    color: #1976D2

@media (max-width: 400px)
  .listItemLink
    font-size: 0.9rem
@media (max-width: 320px)
  .listItemLink
    font-size: 0.8rem
</style>
