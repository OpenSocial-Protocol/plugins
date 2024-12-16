import { usePrevious, useUpdate } from "ahooks";
import { useEffect, useRef, useState } from "react";
import { useLocation, useOutlet, Navigate, redirect, useNavigate } from "react-router-dom";
import { useCustomNavigate } from "../hook/useCustomLocation";
import { TPluginUrlParams } from "@open-social-protocol/osp-plugin-api-types";
// import "./index.module.less"
const componentList = new Map();


function NewKeepAlive(props: { defaultRouter: string, pluginParams: TPluginUrlParams }) {
  const { defaultRouter = "/notFound" } = props
  const shouldRedirect = useRef(true); // 根据条件判断是否需要重定向


  const navigate = useNavigate();

  useEffect(() => {
    if (shouldRedirect.current && defaultRouter) {
      shouldRedirect.current = false
      navigate(defaultRouter)
    }

  }, [])

  if (shouldRedirect.current) {
    return null
  }
  return <OldKeepAlive />
}

function OldKeepAlive(props) {
  const outLet = useOutlet();
  const { pathname, search } = useLocation();
  const toPath = `${pathname}${search}`;
  const toPathPreviou = usePrevious(toPath);
  const forceUpdate = useUpdate();
  useEffect(() => {
    if (!componentList.has(toPath)) {
      componentList.set(toPath, outLet);
    } else {
      componentList.delete(toPathPreviou);
    }
    forceUpdate();
  }, [toPath]);
  

  return <div style={{ flex: 1 }}>
    {Array.from(componentList).map(([key, component]) => (
      <div key={key} style={{ display: toPath === key ? "block" : "none" }}>
        {component}
      </div>
    ))}
  </div>;
}

export default NewKeepAlive;