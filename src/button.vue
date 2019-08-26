<template>
  <button
    :class="{[`icon-${iconPosition}`]:iconPosition === 'right'}"
    class="g-button"
    @click="change"
  >
    <g-icon v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon v-if="loading" class="loading" name="loading"></g-icon>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        if (value == "right" || value == "left") {
          return true;
        } else {
          return false;
        }
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    change() {
      console.log(1);
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  &:active {
    background-color: var(--button-active-bg);
  }

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:focus {
    outline: none;
  }
  &.icon-right {
    > .g-icon {
      order: 2;
    }
  }
  .loading {
    animation: spin 1s infinite linear;
  }
}
</style>