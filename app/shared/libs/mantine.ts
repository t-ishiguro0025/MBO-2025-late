import { createTheme, DEFAULT_THEME, mergeMantineTheme } from "@mantine/core";
import type { MantineColorsTuple } from "@mantine/core";

const primaryColors: MantineColorsTuple = [
  "#fff8e6", // 0
  "#ffedb3", // 1
  "#ffe180", // 2
  "#ffd54d", // 3
  "#ffc91a", // 4
  "#f0a500", // 5: base（ボタンのオレンジ）
  "#d49200", // 6
  "#b87f00", // 7
  "#9c6c00", // 8
  "#805900", // 9
];

const darkColors: MantineColorsTuple = [
  "#c1c2c5", // 0
  "#a6a7ab", // 1
  "#909296", // 2
  "#5c5f66", // 3
  "#373a40", // 4
  "#2a2a2a", // 5: カード背景
  "#1e1e1e", // 6
  "#1a1a1a", // 7: 全体背景
  "#141414", // 8
  "#101010", // 9
];

const baseTheme = createTheme({
  colors: {
    primary: primaryColors,
    dark: darkColors,
  },
  primaryColor: "primary",
  primaryShade: 5,
  black: "#ffffff",
});

export const theme = mergeMantineTheme(DEFAULT_THEME, baseTheme);
