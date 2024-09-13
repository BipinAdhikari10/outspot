<template>
  <div>
    <!-- Conditional rendering for `href` -->
    <a v-if="href" :class="buttonClasses" :href="href">
      <slot></slot>
    </a>

    <!-- Conditional rendering for `to` -->
    <router-link v-else-if="to" :to="to" :exact="exact" :class="buttonClasses">
      <slot></slot>
    </router-link>

    <!-- Default button rendering -->
    <button
      v-else
      :class="buttonClasses"
      :type="type"
      @click="onClick"
      :disabled="disabled"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    href: String,
    to: String,
    exact: Boolean,
    size: {
      type: String,
      default: "default",
    },
    inverse: Boolean,
    danger: Boolean,
    type: {
      type: String,
      default: "button",
    },
    disabled: Boolean,
    onClick: Function,
  },
  computed: {
    buttonClasses() {
      return [
        `button button--${this.size || "default"}`,
        { "button--inverse": this.inverse },
        { "button--danger": this.danger },
      ];
    },
  },
};
</script>

<style scoped>
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
