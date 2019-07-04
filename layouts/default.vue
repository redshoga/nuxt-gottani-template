<template>
  <div class="container">
    <nuxt />
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;

  width: 100%;
  @include mq(sm) {
    width: 100%;
  }
  @include mq() {
    width: $container-width;
  }
}
</style>
