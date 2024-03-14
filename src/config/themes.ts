import {colors} from '.';
import {fonts} from './fonts';

export const lightTheme = {
  colors: {
    typography: colors.black1,
    typography2: colors.gray,
    background: colors.white,
    background1: colors.offWhite,
    primary: colors.blue,
    lightBlue: colors.lightBlue,
    white: colors.white,
    black: colors.black,
    transparent: colors.transparent,
    border: colors.gray2,
  },
  margins: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
  fonts: fonts,
} as const;

export const darkTheme = {
  colors: {
    typography: colors.white,
    typography2: colors.gray,
    background: colors.black,
    background1: colors.offWhite,
    primary: colors.blue,
    lightBlue: colors.lightBlue,
    white: colors.white,
    black: colors.black,
    transparent: colors.transparent,
    border: colors.gray2,
  },
  margins: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
  fonts: fonts,
} as const;
