import { Mains } from '../@types/main'
import { openMine } from './openMine'
import { getAroundItems } from './getAroundItems'

export const aroundOpenMine = (mains: Mains, i: number, j: number): void => {
  const aroundItems = getAroundItems(mains, i, j);
  const aroundFlagCount = aroundItems.reduce((count, nextItem) => {
    return count += mains[nextItem.i][nextItem.j].isFlag ? 1 : 0
  }, 0);

  if (aroundFlagCount == mains[i][j].count) {
    aroundItems.forEach((item) => {
      openMine(mains, item.i, item.j);
    })
  }
}
