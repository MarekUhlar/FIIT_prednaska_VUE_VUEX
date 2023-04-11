

<template>
  <h1>{{framework.name}}</h1>
  <InputComponent v-model:value="framework.name"/>
  <div>Selected API: {{ selected }}</div>
  <SelectComponent 
    v-model:selectedValue="selected"
    :options="framework.components"/>

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