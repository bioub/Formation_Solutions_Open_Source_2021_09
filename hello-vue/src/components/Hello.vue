<template>
  <div class="hello">
    Hello {{ name }}
  </div>
</template>

<script>
export default {
  name: 'Hello',
  props: {
    name: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
