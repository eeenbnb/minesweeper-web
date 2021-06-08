import { Mines } from '../@types/mines'
import { openMine } from './openMine'
import { getAroundItems } from './getAroundItems'

export const openAroundMine = (mines: Mines, i: number, j: number): void => {
  const aroundItems = getAroundItems(mines, i, j);
  const aroundFlagCount = aroundItems.reduce((count, nextItem) => {
    return count += mines[nextItem.i][nextItem.j].isFlag ? 1 : 0
  }, 0);

  if (aroundFlagCount == mines[i][j].count) {
    aroundItems.forEach((item) => {
      openMine(mines, item.i, item.j);
    })
  }
}
