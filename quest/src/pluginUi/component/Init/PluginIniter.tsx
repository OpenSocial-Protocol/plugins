import * as Stores from "../../stores";

import { OspIniterProps, TUIMsgEnum } from "./types";
import { OspStore, useStore } from "@app/pluginUi/stores";
import { ReactNode, useEffect, useMemo } from "react";

import { JsPluginUIEventEmitInstance } from "@app/pluginUi/utils/common/JsSdkEventEmit";
import { Provider as MobxProvider } from "mobx-react";
import React from "react";

export const PluginIniter = ({ children }: { children: ReactNode }) => {
  onmessage = async (event: MessageEvent) => {
    const pluginMessage = event?.data?.data;
    console.log(
      "PluginIniter--pluginMessage--->",
      pluginMessage?.type,
      pluginMessage?.data
    );
    switch (pluginMessage?.type) {
      case TUIMsgEnum.Refund:
        JsPluginUIEventEmitInstance.emitEvent(
          TUIMsgEnum.Refund,
          pluginMessage?.data
        );
        break;
      case TUIMsgEnum.Create_Approve:
        JsPluginUIEventEmitInstance.emitEvent(
          TUIMsgEnum.Create_Approve,
          pluginMessage?.data
        );
        break;

      case TUIMsgEnum.Verify:
        JsPluginUIEventEmitInstance.emitEvent(
          TUIMsgEnum.Verify,
          pluginMessage?.data
        );
        break;

      default:
        console.log("unknown pluginMessage");
        break;
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
