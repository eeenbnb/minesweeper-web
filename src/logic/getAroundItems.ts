import { Mains, Main } from '../@types/main'

interface aroundItems {
  main: Main,
  i: number,
  j: number,
}

export const getAroundItems = (mains: Mains, i: number, j: number): aroundItems[] => {
  let items: aroundItems[] = []
  if (mains[i - 1]) {
    if (mains[i - 1][j - 1]) {
      items.push({
        main: mains[i - 1][j - 1],
        i: i - 1,
        j: j - 1,
      });
    }
    if (mains[i - 1][j + 1]) {
      items.push({
        main: mains[i - 1][j + 1],
        i: i - 1,
        j: j + 1,
      });
    }
    if (mains[i - 1][j]) {
      items.push({
        main: mains[i - 1][j],
        i: i - 1,
        j: j,
      });
    }
  }
  if (mains[i + 1]) {
    if (mains[i + 1][j - 1]) {
      items.push({
        main: mains[i + 1][j - 1],
        i: i + 1,
        j: j - 1,
      });
    }
    if (mains[i + 1][j + 1]) {
      items.push({
        main: mains[i + 1][j + 1],
        i: i + 1,
        j: j + 1,
      });
    }
    if (mains[i + 1][j]) {
      items.push({
        main: mains[i + 1][j],
        i: i + 1,
        j: j,
      });
    }
  }
  if (mains[i][j - 1]) {
    items.push({
      main: mains[i][j - 1],
      i: i,
      j: j - 1,
    });
  }
  if (mains[i][j + 1]) {
    items.push({
      main: mains[i][j + 1],
      i: i,
      j: j + 1,
    });
  }
  return items;
}