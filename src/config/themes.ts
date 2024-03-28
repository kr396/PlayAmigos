import {colors} from '.';
import {fonts} from './fonts';

export const lightTheme = {
  colors: {
    typography: colors.black1,
    typography2: colors.grey,
    background: colors.white,
    background1: colors.offWhite,
    primary: colors.blue,
    lightBlue: colors.lightBlue,
    white: colors.white,
    black: colors.black,
    transparent: colors.transparent,
    border: colors.grey2,
    lightOprange: colors.lightOrange,
    orangeBorder: colors.orangeBorder,
    lightGreen: colors.lightGreen,
    grey3: colors.grey3,
    grey4: colors.grey4,
  },
  margins: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
  paddings: {
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
    typography2: colors.grey,
    background: colors.black,
    background1: colors.offWhite,
    primary: colors.blue,
    lightBlue: colors.lightBlue,
    white: colors.white,
    black: colors.black,
    transparent: colors.transparent,
    border: colors.grey2,
    lightOprange: colors.lightOrange,
    orangeBorder: colors.orangeBorder,
    lightGreen: colors.lightGreen,
    grey3: colors.grey3,
    grey4: colors.grey4,
  },
  margins: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
  paddings: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
  fonts: fonts,
} as const;
