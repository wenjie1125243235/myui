<template>
  <div class="my-input" :disabled="disabled" :class="{
    'is-disabled': disabled,
    'my-input-suffix': showSuffix
  }">
    <input :type="showPassword ? (passwordVisable?'text':'password'): type" class="my-input_inner" :placeholder="placeholder" :name="name" :value="value" @input="handleInput">
    <span class="my-input_suffix" v-if="showSuffix">
      <i class="my-input_icon my-icon-cancel" v-if="clearable && value" @click="handleClear"></i>
      <i class="my-input_icon my-icon-visible" v-if="showPassword " @click="handleChange" :class="{'my-icon-visible-active': passwordVisable}"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'MyInput',
  data () {
    return {
      passwordVisable: false
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    handleClear () {
      this.$emit('input', '')
    },
    handleChange () {
      this.passwordVisable = !this.passwordVisable
    }
  },
  computed: {
    showSuffix () {
      return this.showPassword || this.clearable
    }
  }
}
</script>

<style lang="scss">
.my-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;

  .my-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
  }

  &.is-disabled .my-input_inner {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
  }
}
 // 后面加suffix的意思是后面如果有后缀的话，触发该样式
  .my-input-suffix{
    .my-input_inner{
      padding-right: 30px;
    }
    .my-input_suffix{
      position: absolute;
      right: 10px;
      height: 100%;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i{
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
      }
      .my-icon-visible-active{
        color: blue ;
      }
    }
  }
</style>
