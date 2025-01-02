import { DetailStore, useStore } from "@app/pluginUi/stores";

import { ConfigManager } from "@app/config/configManager";
import LoadingComponent from "@app/pluginUi/component/Loading/LoadingComponent";
import { QuestRowStatus } from "@app/pluginUi/utils/parse/commonUtils";
import { cn } from "@app/pluginUi/utils";
import { observer } from "mobx-react";

interface QuestOrgProps {
  role: string;
  taskLoading: boolean;
  onRefund: () => void;
  onVerify: () => void;
  onGo: () => void;
}
const QuestFooterOrg = observer((props: QuestOrgProps) => {
  const { role, taskLoading, onRefund, onVerify, onGo } = props;
  const store = useStore<DetailStore>("detailStore");
  const btnType = store.buttonType;
  const isEnded = store.isEnded;
  if (role === QuestRowStatus.OWNER) {
    const end_refund_c = isEnded
      ? "bg-button_pri_disabled_bg"
      : "bg-button_pri_hover_bg";
    return (
      <div className="flex flex-col">
        <div
          className={cn(
            "flex w-full h-44 rounded-12 items-center  justify-center headline-h8  font-obviously_variable",
            end_refund_c
          )}
          onClick={onRefund}
        >
          {store.refundLoading ? <LoadingComponent /> : null}
          {!store.refundLoading ? "Withdraw Remaining Amount" : ""}
        </div>
      </div>
    );
  } else {
    if (btnType === "verified") {
      return (
        <div className="flex flex-col">
          <div
            className={cn(
              "flex w-full h-44 rounded-12 items-center  justify-center headline-h8  font-obviously_variable",
              "bg-button_pri_disabled_bg"
            )}
          >
            <img
              className="w-20 h-20"
              src={require("../../../../assets/icon/check_alt.svg")}
            ></img>
          </div>
        </div>
      );
    }
    const end_go_c = isEnded
      ? "border-button_sec_disabled_con text-button_sec_disabled_con"
      : "border-button_pri_default_bg text-content_primary bg-button_sec_hover_bg";
    const end_verify_c = isEnded
      ? "bg-button_pri_disabled_con text-pri_disabled_con"
      : "bg-button_pri_default_bg text-button_pri_default_con bg-button_pri_hover_bg";

    return (
      <div
        className={`flex ${
          ConfigManager.getInstance().mode == "page"
            ? "flex-col gap-4"
            : "flex-row items-center gap-3"
        }`}
      >
        <div
          className={cn(
            "flex  w-full h-44 rounded-12 items-center  justify-center  headline-h8 font-obviously_variable",
            "border-2 border-solid",
            end_go_c
          )}
          onClick={onGo}
        >
          Go
        </div>
        <div
          className={cn(
            "flex w-full h-44  rounded-12 items-center  justify-center headline-h8 font-obviously_variable",
            end_verify_c
          )}
          onClick={onVerify}
        >
          {taskLoading ? <LoadingComponent /> : null}
          {!taskLoading ? "Verify" : ""}
        </div>
      </div>
    );
  }
});

export default QuestFooterOrg;
