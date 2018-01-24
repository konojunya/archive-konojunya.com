<template>
  <div class="logo-image">
    <img src="https://s3-us-west-2.amazonaws.com/konojunya.com/pigg.png" alt="logo image">
  </div>
</template>

<script>
export default {
  name: "logo"
}
</script>

<style lang="scss">
.logo-image {
  width: 40%;
  height: 100vh;
  position: fixed;
  img {
    display: block;
    width: 20%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}
@media (max-width: 1200px) {
  .logo-image img {
    width: 25%;
  }
}
@media (max-width: 900px) {
  .logo-image {
    width: 100%;
    height: 250px;
    position: relative;
    img {
      width: 10%;
    }
  }
}
@media (max-width: 800px) {
  .logo-image img {
    width: 15%;
  }
}
@media (max-width: 500px) {
  .logo-image img {
    width: 20%;
  }
}
</style>
