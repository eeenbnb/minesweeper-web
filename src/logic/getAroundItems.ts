import { Mines } from '../@types/mines'

interface aroundItems {
  i: number,
  j: number,
}

export const getAroundItems = (mines: Mines, i: number, j: number): aroundItems[] => {
  let items: aroundItems[] = []
  if (mines[i - 1]) {
    if (mines[i - 1][j - 1]) {
      items.push({
        i: i - 1,
        j: j - 1,
      });
    }
    if (mines[i - 1][j + 1]) {
      items.push({
        i: i - 1,
        j: j + 1,
      });
    }
    if (mines[i - 1][j]) {
      items.push({
        i: i - 1,
        j: j,
      });
    }
  }
  if (mines[i + 1]) {
    if (mines[i + 1][j - 1]) {
      items.push({
        i: i + 1,
        j: j - 1,
      });
    }
    if (mines[i + 1][j + 1]) {
      items.push({
        i: i + 1,
        j: j + 1,
      });
    }
    if (mines[i + 1][j]) {
      items.push({
        i: i + 1,
        j: j,
      });
    }
  }
  if (mines[i][j - 1]) {
    items.push({
      i: i,
      j: j - 1,
    });
  }
  if (mines[i][j + 1]) {
    items.push({
      i: i,
      j: j + 1,
    });
  }
  return items;
}
