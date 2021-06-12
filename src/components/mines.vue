<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Mine } from '../@types/mines'

@Component({})
export default class MinesComponents extends Vue {
  @Prop() readonly mine:Mine;

  get getClassObject(){
    return {
      "bg-black":!this.mine.isOpened,
      "bg-red-500":this.mine.isFlag,
    }
  }
}
</script>

<template>
  <div
    class="w-20 h-20 flex items-center justify-center select-none"
    :class="getClassObject"
    @click="$emit('mine-click')"
    @dblclick="$emit('mine-db-click')"
    @click.right.prevent="$emit('mine-right-click')"
  >
    {{mine.count}}
  </div>
</template>
