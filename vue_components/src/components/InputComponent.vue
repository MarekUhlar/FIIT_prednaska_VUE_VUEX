
<template>
  <div>
    <label >Framework Name</label><br>
    <input 
      type="text" 
      :value="modelValue"
      @input="inputChanged"
      :style="{ 'margin-bottom': 20 + 'px' }" ><br>
  </div>
</template>

<script lang="ts">
export default {
  props: {
		modelValue: {
			type: String,
			required: true
		}
  },
	methods: {
    inputChanged(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  }
}
</script>