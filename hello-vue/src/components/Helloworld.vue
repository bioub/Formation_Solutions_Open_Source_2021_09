<template>
  <div id="Helloworld">
    <div>Prénom : <input v-model="name" /></div>
    <p>Hello {{ name }}!</p>
  </div>
</template>

<script>
export default {
  name: 'Helloworld',
  data() {
    return {
      name: 'Romain',
    };
  },
};
</script>
