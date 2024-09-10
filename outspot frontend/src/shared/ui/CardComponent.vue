<template>
  <div :class="['card', className]" :style="myStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    className: {
      type: String,
      required: false,
    },
    myStyle: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style scoped>
.card {
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  overflow: hidden;
  background: white;
}
</style>
