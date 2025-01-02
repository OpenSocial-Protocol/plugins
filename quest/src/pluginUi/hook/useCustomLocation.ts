import * as qs from "qs";

import {
  NavigateFunction,
  NavigateOptions,
  To,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useMemoizedFn, useUnmount } from "ahooks";

import urlParse from "url-parse";
import { useMemo } from "react";

type CallBackType = (params: any) => void;
class CalllBackManager {
  callBack: { [key: string]: Function } = {};

  wrapState(state: { onCallBack: CallBackType }) {
    if (state.onCallBack) {
      const onCallBack = state.onCallBack;
      delete state.onCallBack;
      const timestamp = `${new Date().getTime()}`;
      this.callBack[timestamp] = onCallBack;
      // @ts-expect-error
      state.__onCallBackId = `${timestamp}`;
    }
    return state;
  }

  getCallBack(state: any) {
    if (typeof state?.__onCallBackId === "string") {
      return this.callBack[state.__onCallBackId];
    }
    return null;
  }

  deleteCallBack(state: any) {
    if (typeof state?.__onCallBackId === "string") {
      delete this.callBack[state?.__onCallBackId];
    }
  }
}

const calllBackManager = new CalllBackManager();

export function useCustomNavigate() {
  const navigateOrg = useNavigate();
  const navigate: NavigateFunction = useMemoizedFn(
    (to: To | number, options: NavigateOptions = {}) => {
      if (typeof to === "number") {
        navigateOrg(to);
      } else {
        if (options?.state?.onCallBack) {
          options.state = calllBackManager.wrapState(options?.state);
        }

        if (typeof to === "string") {
          const parsedURL = urlParse(to);
          const result = qs.parse(parsedURL.query, {
            ignoreQueryPrefix: true,
          });
          result.timestamp = `${new Date().getTime()}`;
          console.log("parsedURL:", parsedURL, result);
          const newTo = `${parsedURL.pathname}?${qs.stringify(result)}`;
          navigateOrg(newTo, options);
          return;
        }
        navigateOrg(to, options);
      }
    }
  );

  // 返回上个页面的功能
  const goBack = () => {
    navigateOrg(-1);
  };

  return { navigate, goBack };
}

export function useCacheLocation() {
  const textLocation = useLocation();
  const cacheLocation = useMemo(() => {
    return textLocation;
  }, []);
  if (cacheLocation.state?.__onCallBackId) {
    cacheLocation.state.onCallBack = calllBackManager.getCallBack(
      cacheLocation.state
    );
  }

  useUnmount(() => {
    calllBackManager.deleteCallBack(cacheLocation.state);
  });
  return cacheLocation;
}
