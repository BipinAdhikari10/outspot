<template>
  <div :class="['avatar', myClass]" :style="myStyle">
    <img :src="ImageSrc" :style="{ width: myWidth, height: myHeight }" />
  </div>
</template>

<script>
export default {
  name: "ImageUpload",
  data() {
    return {
      message: "Upload image",
    };
  },
  props: {
    ImageSrc: {
      type: String,
      required: false,
    },
    altText: {
      type: String,
      required: false,
    },
    myClass: {
      type: String,
      required: false,
    },
    myStyle: {
      type: Object,
      required: false,
    },
    myWidth: {
      type: String,
      required: false,
    },
    myHeight: {
      type: String,
      required: false,
    },
  },
};
</script>

<style>
.avatar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar img {
  display: block;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.bg-red {
  background-color: red;
}
.bg-green {
  background-color: green;
}
</style>
