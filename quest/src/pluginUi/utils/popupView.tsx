("use client");
import { ReactNode, useEffect, useState } from "react";
import { pubsub } from "@app/pluginUi/utils";
import gsap from "gsap";

export type PopupState = {
  visible?: boolean;
  children?: ReactNode;
  onClose?: () => void;
};
export const POPUP_VIEW = "POPUP_VIEW";

export const PopupView = () => {
  const [popupProps, setPopupProps] = useState<PopupState>({ visible: false });

  useEffect(() => {
    pubsub.subscribe(POPUP_VIEW, show);
    hiddenShowView();
    return () => pubsub.unSubscribe(POPUP_VIEW, close);
  }, []);

  const show = (params: PopupState) => {
    if (params.visible) {
      sildeShowView();
    } else {
      hiddenShowView();
    }
    setPopupProps({
      ...params,
    });
  };
  const close = () => {
    setPopupProps({ ...popupProps, visible: false });
    hiddenShowView();
  };
  const sildeShowView = () => {
    gsap.fromTo(
      ".sliding-div", // 目标元素类名
      { y: "100%" }, // 初始状态，位于视图底部
      { y: "0%", duration: 0.5, ease: "power1.out" } // 动画结束状态及配置
    );
  };
  const hiddenShowView = () => {
    gsap.fromTo(
      ".sliding-div", // 目标元素类名
      { y: "0%" }, // 初始状态，位于视图底部
      { y: "100%", duration: 0.5, ease: "power1.out" } // 动画结束状态及配置
    );
  };

  return (
    <div className="sliding-div flex w-full h-full fixed left-0 right-0 bottom-0 ">
      <div
        className="w-full h-full bg-[#0a0a0a66] absolute left-0 bottom-0 z-[-1]"
        onClick={close}
      />
      {popupProps.children}
    </div>
  );
};
