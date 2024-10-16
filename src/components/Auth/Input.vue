<template>
  <div class="input-container">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue($event.target.value)"
    />
  </div>
</template>
  
<script>
export default {
  props: {
    modelValue: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: 'Enter text'
    }
  },
  methods: {
    updateValue(value) {
      this.$emit('update:modelValue', value)
    }
  }
}
</script>
  
<style scoped>
.input-container {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  width: 80%;
  background-color: #fff;
}
input {
  border: none;
  outline: none;
  font-size: 16px;
  width: 100%;
  color: #333;
}
input::placeholder {
  color: #ccc;
  font-size: 16px;
}
.input-container {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
  