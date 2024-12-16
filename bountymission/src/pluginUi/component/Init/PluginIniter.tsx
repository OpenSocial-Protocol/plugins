import { ReactNode, useEffect, useMemo } from "react";
import { OspIniterProps, TUIMsgEnum } from "./types";
import { OspStore, useStore } from "@app/pluginUi/stores";
import { JsPluginUIEventEmitInstance } from "@app/pluginUi/utils/common/JsSdkEventEmit";
import React from "react";
import * as Stores from "../../stores";
import { Provider as MobxProvider } from "mobx-react";

export const PluginIniter = ({ children }: { children: ReactNode }) => {
  onmessage = async (event: MessageEvent) => {
    const pluginMessage = event.data;
    console.log("pluginMessage", pluginMessage);
    if (pluginMessage.type === "xxx") {
      JsPluginUIEventEmitInstance.emitEvent(pluginMessage.type, {});
    } else if (pluginMessage.type === TUIMsgEnum.Refund) {
      const resData = pluginMessage.data;
      JsPluginUIEventEmitInstance.emitEvent(pluginMessage.type, resData);
    } else {
      console.log("unknown pluginMessage");
    }
  };

  const filterStores = React.useMemo(() => {
    const stores: { [key: string]: any } = {};
    Object.keys(Stores)
      .filter(
        (key) => typeof (Stores as { [key: string]: any })[key] !== "function"
      )
      .forEach((key) => {
        stores[key] = (Stores as any)[key];
      });
    return stores;
  }, []);

  return <MobxProvider {...filterStores}>{children}</MobxProvider>;
};
