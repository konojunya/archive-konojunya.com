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

