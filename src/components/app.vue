<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { generateMaps } from '../logic/generateMaps';
import { Mains } from '../@types/main'
import MinesComponents from './mines.vue';

@Component({
  components:{
    MinesComponents
  }
})
export default class App extends Vue {
  maps:Mains = generateMaps(5,5,5);

  onClick(i:number,j:number){
    console.log("click:",i,j, this.maps[i][j])
    this.maps[i][j].isOpened = true;
  }
}
</script>


<template>
  <div class="map">
    <div v-for="(row,i) in maps" class="row">
      <div v-for="(item,j) in row" class="row__one">
        <MinesComponents :main="item" @main-click="onClick(i,j)" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .map{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: space-evenly;
  }
  .row{
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }
</style>
