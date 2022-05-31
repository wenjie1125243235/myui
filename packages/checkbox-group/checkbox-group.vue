<template>
  <div>
    <div class="my-checkbox-group">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
