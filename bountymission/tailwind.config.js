
import {
  colors,
  fontFamily,
  text_typographyPlugin
} from "./src/config";

/** @type {import('tailwindcss').Config} */

// packages/nativewind/src/transform-css/transforms/valid-styles.ts
const commonSize = {};

// 覆写屏幕适配, 默认都给rem进行适配 devlib-modules/baselayout/app/nativeWind/index.ts
for (let i = 0; i < 751; i++) {
  commonSize[`${i}`] = `${i / 3.93}vw`;
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: commonSize, // text-
      margin: commonSize, // m
      padding: commonSize, // p
      borderRadius: commonSize, // rounded
      borderWidth: commonSize, // border
      lineHeight: commonSize, // leading
      letterSpacing: commonSize, // tracking
      height: commonSize,
      width: commonSize,
      maxHeight: commonSize,
      maxWidth: commonSize,
      minHeight: commonSize,
      minWidth: commonSize,
      left: commonSize,
      right: commonSize,
      bottom: commonSize,
      top: commonSize,
      // colors: {
      //   bgColor: "#0A0A0A",
      //   color_252525: "#252525",
      //   color_C6C6C6: "#C6C6C6",
      //   color_121212: "#121212",
      //   color_A1A1A1: "#A1A1A1",
      //   color_97DE44: "#97DE44",
      // },
      colors: { ...colors },
      fontFamily: { ...fontFamily },
      imgMaxHeight: {
        345: "345px",
      },
    },
  },
  plugins: [text_typographyPlugin],
  corePlugins: {
    preflight: false,
  },
};
