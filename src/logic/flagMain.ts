import { Main } from '../@types/main'

export const flagMine = (main: Main): void => {
  if (!main.isOpened) {
    main.isFlag = !main.isFlag;
  }
}
