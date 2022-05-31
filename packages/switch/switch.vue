<template>
  <div class="my-switch" :name="name" @click="handleClick" :class="{
    'is-checked': value
  }">
    <span class="my-switch_core" ref="core">
      <span class="my-switch_button"></span>
    </span>
    <input type="checkbox" class="my-switch_input" :name="name" :value="value" >
  </div>
</template>
<script>
export default {
  name: 'MySwitch',
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick () {
      this.$emit('input', !this.value)
      this.$nextTick(() => {
        this.setColor()
      })
    },
    setColor () {
      console.log(this.value)
      const newColor = this.value ? this.activeColor : this.inactiveColor
      if (newColor) {
        this.$refs.core.style.borderColor = newColor
        this.$refs.core.style.backgroundColor = newColor
      }
    }
  },
  mounted () {
    if (this.activeColor || this.inactiveColor) {
      this.setColor()
    }
  }
}
</script>
<style lang="scss" scoped>
  .my-switch{
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
    .my-switch_core{
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .my-switch_button{
      position:absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
      }
    }
  }
  // 选中样式
  .my-switch.is-checked {
    .my-switch_core{
      border-color: #409eff;
      background-color: #409eff;
      .my-switch_button {
        transform: translateX(20px);
      }
    }
  }
  // 隐藏input标签
  .my-switch_input{
    position:absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
</style>
