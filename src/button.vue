<template>
  <button :class="{[`icon-${iconPosition}`]:iconPosition === 'right'}" class="g-button">
    <g-icon v-if="icon" :name="icon"></g-icon>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    icon: {},
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
  }
};
</script>

<style lang="scss">
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
}
</style>