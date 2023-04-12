<template>
  <button @click="addComponent">Add Component</button>
</template>

<script lang="ts">
import { mapActions } from 'vuex'
export default {
  methods: {
   /* ...mapActions([
      'addComponentWithDelay'
    ]),*/
    addComponent() {
      this.$store.commit('addComponent', 'New component');
      //this.$store.dispatch('addComponentWithDelay',  'New component with delay');
      //this.addComponentWithDelay('New Component from Vue method');
    }
  }
}
</script>

<style scoped>
  button {
    background-color: #0095ff;
  }
</style>