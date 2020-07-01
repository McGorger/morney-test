<template>
  <div>
    <Layout class-prefix="layout">
      {{ record.tags  }}
      <NumberPad :value.sync="record.amount" @submit="saveRecord" />
      <Types :value.sync="record.type" />
      <div class="note">
          <Notes fieldName="备注" 
      placeholder="在这里输入备注"
      @update:value="onUpdateNotes" />
      </div>
      <Tags :data-source.sync="tags" @update:value="onUpdateTags" />
    </Layout>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import Types from "@/components/Money/Types.vue";
import { Component} from "vue-property-decorator";
@Component({
  components: {
    Types,
    NumberPad,
    Notes,
    Tags
  }
}) 
export default class Money extends Vue {
  tags = window.tagList;
  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };
  recordList = window.recordList;
  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  created(){
  console.log(window.tagList);
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }
  saveRecord() {
    window.createRecord(this.record);
  }
 

}
</script>
<style lang="scss"  >
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.note{
  padding: 12px 0;
}
</style>
