import { Mains } from '../@types/main'
import { getAroundItems } from './getAroundItems'

export const generateMaps = (row: number, column: number, bomCount: number): Mains => {
  let orignalMap: Mains = [...Array(row)].map(() => {
    return [...Array(column).fill(0).map(() => {
      return {
        count: 0,
        isBom: false,
        isOpened: false,
        isFlag: false,
      }
    })];
  });

  for (let i = 0; i < bomCount; i++) {
    const [i, j] = [Math.floor(Math.random() * row), Math.floor(Math.random() * column)];
    orignalMap[i][j].isBom = true;
    orignalMap[i][j].count = -1;
  };

  orignalMap.forEach((r, i) => {
    r.forEach((_, j) => {
      if (orignalMap[i][j].count >= 0) {
        orignalMap[i][j].count = getAroundItems(orignalMap, i, j).reduce((count, nextItem) => {
          return count += orignalMap[nextItem.i][nextItem.j].isBom ? 1 : 0;
        }, 0)
      }
    })
  });

  return orignalMap;
}
