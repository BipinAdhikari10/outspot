<template>
  <div id="app">
    <HeaderNavigation />>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderNavigation from "./shared/ui/Navigation/HeaderNavigation.vue";
export default {
  name: "App",
  components: {
    HeaderNavigation,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Open Sans", sans-serif;
}

body {
  margin: 0;
  background: #4d4d4d;
}

.slide-in-left-enter {
  transform: translateX(-100%);
}

.slide-in-left-enter-active {
  transform: translateX(0);
  opacity: 1;
  transition: all 200ms;
}

.slide-in-left-exit {
  transform: translateX(0%);
  opacity: 1;
}

.slide-in-left-exit-active {
  transform: translateX(-100%);
  opacity: 0;
  transition: all 200ms;
}

.center {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
