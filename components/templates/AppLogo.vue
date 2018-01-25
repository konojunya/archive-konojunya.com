<template lang="pug">
  div#logoImage
    img(src="https://s3-us-west-2.amazonaws.com/konojunya.com/pigg.png", alt="page image")
</template>

<style lang="sass">
#logoImage
  width: 40%
  height: 100vh
  position: fixed
  img
    display: block
    width: 20%
    position: absolute
    top: 50%
    left: 50%
    transform: translateX(-50%) translateY(-50%)
@media (max-width: 1200px)
  #logoImage img
    width: 25%
@media (max-width: 900px)
  #logoImage
    width: 100%
    height: 250px
    position: relative
    img
      width: 10%
@media (max-width: 800px)
  #logoImage img
    width: 15%
@media (max-width: 500px)
  #logoImage img
    width: 20%
</style>

