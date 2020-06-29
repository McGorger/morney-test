<template>
  <Layout>
    <div>
      <Icon name="left" />
      <span>编辑标签</span>
    </div>

    <Notes fieldName="标签名" placeholder="请输入标签名"/>
  </Layout>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagListModel from "../models/tagListModel";
import Icon from "@/components/Icon.vue";
import Notes from "@/components/Money/Notes.vue";
console.log(111);
@Component({
    components:{Notes}
})
export default class EditLabel extends Vue {
  created() {
    console.log(11112222);
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter(t => t.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      console.log(tag);
      this.$router.replace("/404");
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
