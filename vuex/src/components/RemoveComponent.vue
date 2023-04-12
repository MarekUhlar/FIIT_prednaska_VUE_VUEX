<template>
  <button @click="removeComponent">Remove Component</button>
</template>

<script lang="ts">
export default {
  methods: {
    removeComponent() {
      this.$store.commit('removeComponent', 'New component')
    }
  }
}
</script>

<style scoped>
  button {
    background-color: #0095ff;
  }
</style>