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

