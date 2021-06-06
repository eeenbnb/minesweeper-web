import { Mains } from '../@types/main'
import { getAroundItems } from './getAroundItems'

export const openMine = (mains: Mains, i: number, j: number): void => {
  mains[i][j].isOpened = true;

  if (mains[i][j].count == 0) {
    getAroundItems(mains,i,j).forEach((item)=>{
      if(!mains[item.i][item.j].isOpened){
        openMine(mains, item.i, item.j);
      }
    })
  }
}
