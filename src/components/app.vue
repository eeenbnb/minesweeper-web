<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { generateMaps } from '../logic/generateMaps';
import MinesComponents from './mines.vue';

@Component({
  components:{
    MinesComponents
  }
})
export default class App extends Vue {
  maps = generateMaps(5,5,5);
}
</script>


<template>
  <div class="map">
    <div v-for="row in maps.gameMap" class="row">
      <div v-for="item in row" class="row__one">
        <MinesComponents :count="item" />
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
