<template>
  <AddComponent />
  <RemoveComponent />
  <li v-for="component in getComponents" :key="component">
    {{component}}
  </li>
</template>

<script lang="ts">
  import AddComponent from './components/AddComponent.vue'
  import RemoveComponent from './components/RemoveComponent.vue'
  export default {
    components: {
      AddComponent,
      RemoveComponent
    },
    computed: {
      getComponents () {
        return this.$store.getters.getComponents
      }
    }
  }
</script>