import { OspStore, useStore } from "@app/pluginUi/stores";
import { ReactNode, useEffect, useMemo } from "react";

import { OspIniterProps } from "./types";

export const OspClientIniter = ({ children, ...reset }: OspIniterProps) => {
  const ospStore = useStore<OspStore>("ospStore");

  useEffect(() => {
    const initOsp = async () => {
      await ospStore.useEffect(reset);
    };
    initOsp();
  }, [reset]);

  return <>{children}</>;
};
