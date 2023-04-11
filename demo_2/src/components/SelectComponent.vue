
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
		selectedValue: {
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
      this.$emit("update:selectedValue", event.target.value);
    }
  }
}
</script>