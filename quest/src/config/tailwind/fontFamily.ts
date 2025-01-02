import { KeyValuePair, ResolvableTo } from "tailwindcss/types/config";

/**第二个为备用字体*/
const fontFamily:
  | ResolvableTo<
      KeyValuePair<
        string,
        | string
        | string[]
        | [
            fontFamily: string | string[],
            configuration: Partial<{
              fontFeatureSettings: string;
              fontVariationSettings: string;
            }>
          ]
      >
    >
  | undefined = {
  inter: ["Inter", "sans-serif"],
  obviously_variable: [
    '"obviously-variable", sans-serif',
    {
      fontVariationSettings: '"ital" 0, "wdth" 80, "wght" 800',
    },
  ],
};
export { fontFamily };
