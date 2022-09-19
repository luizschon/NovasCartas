<template>
  <div class="form-field">
    <label>{{ label }}</label>
    <input
      v-bind="$attrs"
      :placeholder="placeholder"
      class="field"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      autocomplete="off"
      required
    >
  </div>
</template>

<script>
  export default {
    name: 'FormInput',
    props: {
      label: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      modelValue: {
        type: [String, Number],
        default: ''
      },
    },
  }
</script>

<style scoped>
  @import '../formStyle.css';
</style>