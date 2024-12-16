export type ModalProps = {
  visible?: boolean;
  close?: () => void;
  children?: React.ReactNode;
  modalContainerClassName?: string;
  closeAble?: boolean;
  className?: string;
  title?: React.ReactNode;
  titleContainerClassName?: string;
  titleHide?: boolean;
};
