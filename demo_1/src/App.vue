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
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: rgba(255, 255, 255, .4) 0 1px 0 0 inset;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system,system-ui,"Segoe UI","Liberation Sans",sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.15385;
    margin: 0;
    outline: none;
    padding: 8px .8em;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    white-space: nowrap;
  }
</style>