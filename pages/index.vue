<template>
  <div>
    <h1>nuxt-gottani-template</h1>
    <input type="number">
    <Example name="world" />
  </div>
</template>

<script>
import Example from '~/components/Example'

export default {
  components: {
    Example
  }
}
</script>
