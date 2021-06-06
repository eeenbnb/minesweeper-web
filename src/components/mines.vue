<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Main } from '../@types/main'

@Component({})
export default class MinesComponents extends Vue {
  @Prop() readonly main:Main;
}
</script>


<template>
  <div
    class="maine-item"
    :isOpened="main.isOpened"
    :isFlag="main.isFlag"
    :count="main.count"
    @click="$emit('main-click')"
    @dblclick="$emit('main-db-click')"
    @click.right.prevent="$emit('main-right-click')"
  >
    {{main.count}}
  </div>
</template>

<style lang="scss">
  .maine-item{
    width: 80px;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: center;

    user-select: none;

    &:not([isOpened]){
      background-color: black;
    }

    &[isFlag]{
      background-color: red;
    }
  }
</style>
