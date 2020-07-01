 <template>
   <div>
        <label class="notes">
          <span class="name">{{fieldName}}</span>
          <input type="text" 
            :value="value"
            @input="onValueChanged($event.target.value)"
          :placeholder="placeholder" />
        </label>
      </div>
</template>

<script lang='ts'>
 import Vue from 'vue';
import { Component, Watch, Prop} from 'vue-property-decorator';
@Component
 export default class  Notes extends Vue {
   @Prop({default:''}) readonly value!: string;
   @Prop({required:true}) fieldName!: string;
   @Prop() placeholder?: string;
   onValueChanged(value: string){
      console.log("onValueChanged")
     this.$emit('updata:value',value);
   }
 }
</script>

<style scoped lang='scss'>
.notes {
  display: flex;
  font-size: 14px;
  padding-left: 16px;

  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 40px;
    flex: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
 
</style>
