<template>
 <Layout>
     <div class="app">编辑标签11111111111111111</div>
     
 </Layout>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component } from "vue-property-decorator";
import tagListModel from '../models/tagListModel';
console.log(111)
@Component 
 export default  class EditLabel extends Vue {
     created(){
         console.log(11112222)
         const id = this.$route.params.id
         tagListModel.fetch();
         const tags = tagListModel.data;
         const tag = tags.filter(t => t.id === id)[0];
         if(tag){
             console.log(tag);
         }else{
             console.log(tag);
             this.$router.replace('/404')
         }
     }

 }
</script>

<style scoped lang='scss'>
 
</style>
