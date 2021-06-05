<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class MinesComponents extends Vue {
  @Prop({type:Number, required:true})
  count:number = 0;
}
</script>


<template>
  <div>
    {{count}}
  </div>
</template>

<style lang="scss">

</style>
