import { Mains } from '../@types/main'
import { getAroundItems } from './getAroundItems'

export const openMine = (mains: Mains, i: number, j: number): void => {
  if(mains[i][j].isOpened){
    return ;
  }
  mains[i][j].isOpened = true;

  if(mains[i][j].isBom){
    alert("boom");
    return ;
  }

  if (mains[i][j].count == 0) {
    getAroundItems(mains,i,j).forEach((item)=>{
      openMine(mains, item.i, item.j);
    })
  }
}
