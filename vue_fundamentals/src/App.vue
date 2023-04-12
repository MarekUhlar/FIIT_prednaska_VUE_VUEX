<template>
<div>
  <h1>{{framework.name}}</h1>
  <button v-on:click="addNewComponent">Add Component</button>
  <li v-for="component in framework.components" :key="component">
    {{component}}
  </li>
  <div v-if="hasCustomComponents">Custom component count: {{customComponentsCount}}</div>
</div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      framework: {
        name: 'Vue3',
        components: [
          'Root component',
          'Button component'
        ]
      },
      count: 0,
      customComponentsCount: 0
    }
  },
  methods: {
    addNewComponent() {
      this.framework.components.push('Custom Component ' + ++this.count);
    }
  },
  computed: {
    componentListLength() {
      return this.framework.components.length;
    },
    hasCustomComponents() {
      return this.componentListLength > 2;
    }
  },
  watch: {
    componentListLength(newValue, oldValue) {
      if (newValue != oldValue) {
        this.customComponentsCount++;
      }
    }
  }
}
</script>

<style scoped>
  button {
    background-color: #0095ff;
  }
</style>