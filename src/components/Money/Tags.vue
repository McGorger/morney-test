<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
      <li
        v-for="tag in dataSource"
        :class="{selected:selectedTags.indexOf(tag)>=0}"
        :key=" tag.id"
        @click="toggle(tag)"
      >{{ tag.name}}</li>
    </ul>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import tagListModel from "@/models/tagListModel.ts";
@Component
export default class Tags extends Vue {
  @Prop(Array) readonly dataSource: string[] | undefined;
  selectedTags: string[] = [];
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value',this.selectedTags);
  }
  
  create() {
    const name = window.prompt("请输入标签名");
    if (!name) {
      window.alert("标签名不能为空");
    }else if (this.dataSource) {
      tagListModel.create(name);
      // this.$emit('update:dataSource',[...this.dataSource,{id:name,name:name}]);
    }
  }
}
</script>

<style scoped lang='scss'>
@import "~@/assets/style/helper.scss";
.tags {
  background-color: white;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  font-size: 14px;
  padding: 16px;
  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      $bg: #d9d9d9;
      background: $bg;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
      &.selected {
        background: darken($color: $bg, $amount: 50%);
      }
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 3px;
    }
  }
}
</style>
