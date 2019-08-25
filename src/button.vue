<template>
  <button :class="{[`icon-${iconPosition}`]:true}" class="g-button">
    <svg v-if="icon" class="icon" aria-hidden="true">
      <use :xlink:href="`#i-${icon}`" />
    </svg>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["icon", "iconPosition"]
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
  vertical-align: -webkit-baseline-middle;
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
    > .icon {
      order: 2;
    }
  }
}
</style>