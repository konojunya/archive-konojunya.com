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

