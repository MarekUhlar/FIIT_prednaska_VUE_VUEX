
<template>
  <select  @change="inputChanged">
    <option v-for="option in options" :key="option">
    {{ option }}
    </option>
  </select>
</template>

<script lang="ts">
export default {
  props: {
		modelValue: {
			type: String,
			required: true
		},
    options: {
      type: Array<string>,
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