 <template>
   <div>
        <label class="notes">
          <span class="name">{{this.fieldName}}</span>
          <input type="text" 
            v-model="value"
          :placeholder="this.placeholder" />
        </label>
      </div>
</template>

<script lang='ts'>
 import Vue from 'vue';
import { Component, Watch, Prop} from 'vue-property-decorator';
@Component
 export default class  Notes extends Vue {
   value = '';
   @Prop({required:true}) fieldName!: string;
   @Prop() placeholder?: string;
   @Watch('value')
   onValueChanged(value: string){
     this.$emit('update:value',value);
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
