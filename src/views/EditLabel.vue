<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click.native="goBack"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <Notes :value="tag.name" @updata:value="updataTag" fieldName="标签名" placeholder="请输入标签名" />
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagListModel from "../models/tagListModel";
import Icon from "@/components/Icon.vue";
import Notes from "@/components/Money/Notes.vue";
import Button from "@/components/Button.vue";
import Tags from '../components/Money/Tags.vue';
console.log(111);
@Component({
  components: { Notes, Button }
})
export default class EditLabel extends Vue {
  tag?: Tag = undefined;
  created() {
      this.tag = window.findTag(this.$route.params.id);
       if(!this.tag){
              this.$router.replace("/404");
       }
  }
  updataTag(name: string) {
    
    if (this.tag) {
      window.updateTag(this.tag.id, name);
    }
  }
  remove(){
       if (this.tag) {
       if(window.removeTag(this.tag.id)){
           this.$router.back();
       }else{
           window.alert('删除失败');
       }
    }
     
  }
  goBack(){
      this.$router.back();
  }

}
</script>

<style scoped lang='scss'>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .title {
  }
  > .leftIcon {
    width: 24px;
    height: 24px;
  }
  > .rightIcon {
    width: 24px;
    height: 24px;
  }
}
.form-wrapper {
  background-color: white;
  margin-top: 8px;
}
.button-wrapper {
  text-align: center;
  padding-top: 16px;
  margin-top: 44-16px;
}
</style>
