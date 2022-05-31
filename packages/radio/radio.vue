<template>
    <label class="my-radio"  :class="{
        'is-checked':label === model
      }"
      >
    <span class="my-radio_input">
      <span class="my-radio_inner"></span>
      <input
      type="radio"
      :name="name"
      class="my-radio_original"
      :value="label"
      v-model="model"
      >
    </span>
    <span class="my-radio_label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
export default {
  name: 'MyRadio',
  // 相当于加强办的props ， 常用于和provide 搭配， 用来和祖先组件进行通信。
  // 跟$parent 相比，有更强的兼容性。
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: [String, Boolean, Number],
      default: ''
    },
    value: {
      type: [String, Boolean, Number],
      default: null
    },
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    // 判断是否组件外是否包含了radio-group组件
    isGroup () {
      return !!this.RadioGroup
    },
    model: {
      set: function (value) {
        // 如果外层包含了radio-group 就触发父组件的事件 否则触发自身的事件
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      },
      get: function () {
        // 如果外层包含了radio-group 就返回父组件的value， 否则返回自身的value
        return this.isGroup ? this.RadioGroup.value : this.value
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .my-radio{
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    .my-radio_input{
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .my-radio_inner{
        border: 1px solid #dcdfe6;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: #fff;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        &:after{
          width: 4px;
          height: 4px;
          border-radius: 100%;
          background-color: #fff;
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%) scale(0);
          transition: transform .15s ease-in;
        }
      }
      .my-radio_original{
        opacity: 0;
        outline: none;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0px;
        right: 0;
        bottom: 0;
        margin: 0;
      }
    }
    .my-radio_label{
      font-size: 14px;
      padding-left: 10px;;
    }
  }
  // 选中的样式
  .my-radio.is-checked{
    .my-radio_input{
      .my-radio_inner{
        border-color: #409eff;
        background-color: #409eff;
        &:after{
          transform: translate(-50%,-50%) scale(1);
        }
      }
    }
    .my-radio_label{
      color:#409eff;
    }
  }
</style>
