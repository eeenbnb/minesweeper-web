import { Mains } from '../@types/main'

export const generateMaps = (row: number, column: number, bomCount: number):Mains => {
  const orignalMap:number[][]= [...Array(row)].map(() => {
    return [...Array(column).fill(0)];
  });

  for (let i = 0; i < bomCount; i++) {
    orignalMap[Math.floor(Math.random() * row)][Math.floor(Math.random() * column)] = 1;
  };

  return orignalMap.map((r, i) => {
    return r.map((_, j) => {
      if (orignalMap[i][j]) {
        return {
          count: -1,
          isBom: true,
          isOpened: false,
          isFlag: false,
        };
      }
      let count = 0;
      if (orignalMap[i - 1]) {
        if (orignalMap[i - 1][j - 1]) count += orignalMap[i - 1][j - 1];
        if (orignalMap[i - 1][j + 1]) count += orignalMap[i - 1][j + 1];
        count += orignalMap[i - 1][j];
      }
      if (orignalMap[i + 1]) {
        if (orignalMap[i + 1][j - 1]) count += orignalMap[i + 1][j - 1];
        if (orignalMap[i + 1][j + 1]) count += orignalMap[i + 1][j + 1];
        count += orignalMap[i + 1][j];
      }
      if (orignalMap[i][j - 1]) count += orignalMap[i][j - 1];
      if (orignalMap[i][j + 1]) count += orignalMap[i][j + 1];

      return {
        count: count,
        isBom: false,
        isOpened: false,
        isFlag: false,
      };;
    })
  })
}
