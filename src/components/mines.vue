<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Main } from '../@types/main'

@Component({})
export default class MinesComponents extends Vue {
  @Prop() readonly main:Main;

  onOpened(){
  //   this.isOpened = true;
  }
}
</script>


<template>
  <div class="maine-item" :isOpened="main.isOpened" :count="main.count" @click="$emit('main-click')">
    {{main}}
  </div>
</template>

<style lang="scss">
  .maine-item{
    width: 80px;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: center;
    &:not([isOpened]){
      background-color: black;
    }
  }
</style>
