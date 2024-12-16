"use client";

import { MobXProviderContext } from "mobx-react";
import React from "react";

export function useStore<T extends Record<string, any>>(name: string) {
  const ctx: { [key: string]: T } = React.useContext(MobXProviderContext);
  return ctx[name];
}
