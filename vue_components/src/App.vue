<template>
  <div>
    <h1>{{framework.name}}</h1>
    <InputComponent v-model="framework.name"/>
    <div>Selected API: {{ selected }}</div>
    <SelectComponent 
      v-model="selected"
      :options="framework.components"/>
  </div>
</template>

<script lang="ts">
import InputComponent from './components/InputComponent.vue'
import SelectComponent from './components/SelectComponent.vue'
export default {
  components: {
    InputComponent,
    SelectComponent
  },
  data() {
    return {
      framework: {
        name: 'Vue3',
        components: [
          'Root component',
          'Button component'
        ]
      },
      selected: ''
    }
  }
}
</script>