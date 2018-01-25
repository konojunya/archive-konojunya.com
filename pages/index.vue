<template>
  <section>
    <app-logo></app-logo>
    <app-body></app-body>
  </section>
</template>

<script>
import AppLogo from '~/components/templates/AppLogo.vue'
import AppBody from '~/components/templates/AppBody.vue'

export default {
  components: {
    AppLogo,
    AppBody
  }
}
</script>

<style>
</style>
