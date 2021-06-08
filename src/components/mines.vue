<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Mine } from '../@types/mines'

@Component({})
export default class MinesComponents extends Vue {
  @Prop() readonly mine:Mine;
}
</script>


<template>
  <div
    class="mine-item"
    :isOpened="mine.isOpened"
    :isFlag="mine.isFlag"
    :count="mine.count"
    @click="$emit('mine-click')"
    @dblclick="$emit('mine-db-click')"
    @click.right.prevent="$emit('mine-right-click')"
  >
    {{mine.count}}
  </div>
</template>

<style lang="scss">
  .mine-item{
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
