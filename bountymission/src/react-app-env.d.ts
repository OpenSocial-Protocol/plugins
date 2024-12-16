declare module "*.png";
declare module "*.svg";
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
