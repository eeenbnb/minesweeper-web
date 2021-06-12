<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { generateMaps } from '../logic/generateMaps';
import { openMine } from '../logic/openMine';
import { flagMine } from '../logic/flagMine';
import { openAroundMine } from '../logic/openAroundMine';
import MinesComponents from './mines.vue';

@Component({
  components:{
    MinesComponents
  }
})
export default class App extends Vue {
  maps = generateMaps(10,10,10);

  onClick(i:number,j:number){
    openMine(this.maps,i,j);
  }

  onDBClick(i:number,j:number){
    openAroundMine(this.maps,i,j);
  }

  onRightClick(i:number,j:number){
    flagMine(this.maps[i][j]);
  }
}
</script>


<template>
  <div>
    <div v-for="(row,i) in maps" class="flex">
      <div v-for="(item,j) in row">
        <MinesComponents
          :mine="item"
          @mine-click="onClick(i,j)"
          @mine-db-click="onDBClick(i,j)"
          @mine-right-click="onRightClick(i,j)"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
</style>
