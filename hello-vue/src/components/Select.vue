<template>
  <div class="Select">
    <div class="selected" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" v-if="open">
      <div
        :className="it === selected ? 'item current' : 'item'"
        v-for="it in items"
        :key="it"
        @click="$emit('selectedChange', it)"
      >
        {{ it }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    selected: String,
    items: Array,
  },
  emits: ['selectedChange'],
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style scoped>
.Select {
  display: block;
}

.selected {
  border: 1px solid black;
  max-width: 250px;
  cursor: pointer;
  padding: 5px;
  box-sizing: border-box;
}

.items {
  border: 1px solid black;
  max-width: 250px;
  box-sizing: border-box;
}

.item {
  cursor: pointer;
  padding: 5px;
  box-sizing: border-box;
}

.item.current {
  background-color: aliceblue;
}
</style>
