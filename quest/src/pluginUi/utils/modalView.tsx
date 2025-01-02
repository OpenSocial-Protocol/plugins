"use client";
import { Modal, ModalProps } from "antd";
import { ReactNode, useEffect, useState } from "react";
import pubsub from "./pubsub";
import { cn } from ".";

export type ModalState = {
  title?: string;
  desc?: string;
  children?: ReactNode;
  onConfirm?: () => void;
  onClose?: () => void;
};
export const Modal_VIEW = "MODAL_VIEW";

export const ModalView = () => {
  const [modalProps, setModalProps] = useState<ModalState & ModalProps>({});
  useEffect(() => {
    pubsub.subscribe(Modal_VIEW, show);
    return () => pubsub.unSubscribe(Modal_VIEW, close);
  }, []);

  const show = (params: ModalState) => {
    setModalProps({
      ...params,
    });
  };

  const close = () => {
    setModalProps({ ...modalProps, visible: false });
    modalProps.onClose && modalProps.onClose();
  };
  const onDidConfirm = () => {
    modalProps.onConfirm && modalProps.onConfirm();
  };
  return (
    <Modal
      {...modalProps}
      onCancel={close}
      title={modalProps.title}
      // style={{ maxWidth: "100%", maxHeight: "100vh" }}
      // width="100vw"
      // height="100vw"
      // modalContainerClassName={cn(
      //   "w-[400px]",
      //   "bg-accent_backup4 rounded-[24px]"
      // )}
      // titleContainerClassName={undefined}
      // titleHide={modalProps.type === "CongratsSucced"}
    >
      {modalProps.children}
    </Modal>
  );
};
