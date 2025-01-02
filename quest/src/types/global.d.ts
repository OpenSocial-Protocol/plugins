import { OspInitProps } from "@app/pluginUi/component";

declare global {
  interface Window {
    pluginData: OspInitProps;
  }
}

export {};
