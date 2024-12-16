import pubsub from "./pubsub";
import { Modal_VIEW, ModalState } from "./modalView";
import { POPUP_VIEW, PopupState } from "./popupView";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Show(params: ModalState) {
    pubsub.publish(Modal_VIEW, {
      ...params,
      visible: true,
    });
  },
  Colse() {
    pubsub.publish(Modal_VIEW, {
      visible: false,
    });
  },
  popShow(params: PopupState) {
    pubsub.publish(POPUP_VIEW, {
      ...params,
      visible: true,
    });
  },
  popHidden() {
    pubsub.publish(POPUP_VIEW, {
      visible: false,
    });
  },
};
