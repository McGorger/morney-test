<template>
  <div>
    <ul class="types">
      <li :class="value === '-'&&'selected'" @click="selectType('-')">支出</li>
      <li :class="value === '+'&&'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component, Prop } from 'vue-property-decorator';
@Component
export default class Types extends Vue {

  @Prop() readonly  value!: string ;
  selectType(type: string) {
    if (type !== "-" && type !== "+") {
      throw new Error("type is unkown");
    }
    this.$emit('update:value',type)
 }

 
}
</script>

<style scoped lang='scss'>
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    line-height: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: "";
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 4px;
      background: #333;
    }
  }
}
</style>
