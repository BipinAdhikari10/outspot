<template>
  <button :class="['btn', myClass]" :style="myStyle" @click="handleClick">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    buttonText: {
      type: String,
      required: true,
      default: "Click me", // Default button text
    },
    myClass: {
      type: String,
      required: false,
    },
    myStyle: {
      type: Object,
      required: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
/* Basic button styles */
.btn {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  color: white;
}

.btn:hover {
  background-color: #ccc; /* Change to a light gray on hover */
}
.btn-danger {
  background-color: red;
}
.btn-primary {
  background-color: blue;
}

.btn-secondary {
  background-color: yellow;
}

.btn-success {
  background-color: green;
}
</style>
