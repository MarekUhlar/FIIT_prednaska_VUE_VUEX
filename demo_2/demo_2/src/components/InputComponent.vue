
<template>
  <label >Framework Name</label><br>
  <input 
    type="text" 
    :value="value"
    @input="inputChanged"
    :style="{ 'margin-bottom': 20 + 'px' }" ><br>
</template>

<script lang="ts">
export default {
  props: {
		value: {
			type: String,
			required: true
		}
  },
	methods: {
    inputChanged(event) {
      this.$emit("update:value", event.target.value);
    }
  }
}
</script>