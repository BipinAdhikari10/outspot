<template>
  <div id="app">
    <HeaderNavigation />
    <div style="margin-top: 100px">
      <router-view></router-view>
    </div>
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
.button {
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #ff0055;
  border-radius: 4px;
  background: #ff0055;
  color: white;
  cursor: pointer;
  margin-right: 1rem;
  text-decoration: none;
  display: inline-block;
}

.button:focus {
  outline: none;
}

.button:hover,
.button:active {
  background: #ff4382;
  border-color: #ff4382;
}

.button--inverse {
  background: transparent;
  color: #ff0055;
}

.button--inverse:hover,
.button--inverse:active {
  color: white;
  background: #ff0055;
}

.button--danger {
  background: #830000;
  border-color: #830000;
}

.button--danger:hover,
.button--danger:active {
  background: #f34343;
  border-color: #f34343;
}

.button:disabled,
.button:hover:disabled,
.button:active:disabled {
  background: #ccc;
  color: #979797;
  border-color: #ccc;
  cursor: not-allowed;
}

.button--small {
  font-size: 0.8rem;
}

.button--big {
  font-size: 1.5rem;
}
</style>
