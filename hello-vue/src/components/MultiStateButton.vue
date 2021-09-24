<template>
  <button class="MultiStateButton" @click="handleNext">{{ selected }}</button>
</template>

<script>
export default {
  name: 'MultiStateButton',
  props: {
    selected: String,
    items: Array,
  },
  emits: ['selectedChange'],
  methods: {
    handleNext() {
      const index = this.items.indexOf(this.selected);
      this.$emit('selectedChange', this.items[(index + 1) % this.items.length]);
    },
  },
};
</script>
