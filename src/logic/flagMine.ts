import { Mine } from '../@types/mines'

export const flagMine = (mine: Mine): void => {
  if (!mine.isOpened) {
    mine.isFlag = !mine.isFlag;
  }
}
