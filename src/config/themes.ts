import {colors} from '.';

export const lightTheme = {
  colors: {
    typography: colors.black1,
    typography2: colors.gray,
    background: colors.white,
    primary: colors.blue,
    lightBlue: colors.lightBlue,
    white: colors.white,
    black: colors.black,
  },
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
} as const;

export const darkTheme = {
  colors: {
    typography: colors.white,
    typography2: colors.gray,
    background: colors.black,
    primary: colors.blue,
    lightBlue: colors.lightBlue,
    white: colors.white,
    black: colors.black,
  },
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
} as const;
