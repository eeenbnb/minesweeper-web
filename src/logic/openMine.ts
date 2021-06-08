import { Mines } from '../@types/mines'
import { getAroundItems } from './getAroundItems'

export const openMine = (mines: Mines, i: number, j: number): void => {
  if(mines[i][j].isOpened){
    return ;
  }
  mines[i][j].isOpened = true;

  if(!mines[i][j].isFlag && mines[i][j].isBom){
    alert("boom");
    return ;
  }

  if (mines[i][j].count == 0) {
    getAroundItems(mines,i,j).forEach((item)=>{
      openMine(mines, item.i, item.j);
    })
  }
}
