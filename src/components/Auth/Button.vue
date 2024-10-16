<template>
  <div class="button-container">
    <button :type="type" class="button">
      <slot>Sign In</slot>
    </button>
  </div>
</template>
<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "submit"
    }
  }
}
</script>
<style scoped>
.button-container {
  display: flex;
  align-items: center;
  width: 80%;
  max-width: 400px;
}
.button {
  background-color: #4a60f6;
  color: white;
  width: 400px;
  padding: 12px 32px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  transition: background-color 0.3s ease;
}
.button:hover {
  background-color: #3a50d6; 
}
</style>
