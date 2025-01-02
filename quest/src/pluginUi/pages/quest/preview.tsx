"use client";

import "../questDetail/detail.css";

import { CreateStore, OspStore, useStore } from "@app/pluginUi/stores";
import {
  amountBigDecimal,
  getDeadLineTime,
  getStartTime,
} from "@app/pluginUi/utils/parse/commonUtils";
import { useEffect, useRef, useState } from "react";

import { ConfigManager } from "@app/config/configManager";
import { ContractAction } from "@app/pluginUi/utils/constance/contractAction";
import { JsPluginUIEventEmitInstance } from "@app/pluginUi/utils/common/JsSdkEventEmit";
import LoadingComponent from "@app/pluginUi/component/Loading/LoadingComponent";
import { TPluginTemplate } from "@open-social-protocol/osp-plugin-api-types";
import { TUIMsgEnum } from "@app/pluginUi/component";
import { WishActivityExtension } from "@keccak256-evg/zeek-client";
import bigDecimal from "js-big-decimal";
import { cn } from "@app/pluginUi/utils";
import html2canvas from "html2canvas";
import { observer } from "mobx-react";
import { transformIpfs } from "@app/pluginUi/utils/transformIpfs";
import { useCustomNavigate } from "@app/pluginUi/hook";
import usePostMessage from "@app/pluginUi/hook/usePostMessage";
import { useQuestPostHook } from "@app/apis/profile";

const QuestPreviewOrg = observer(() => {
  const previewRef = useRef(null);
  // const { showError } = useErrorMessage();
  const { goBack } = useCustomNavigate();
  // 获取wishId
  const questMutation = useQuestPostHook();
  const store = useStore<CreateStore>("createStore");
  const ospStore = useStore<OspStore>("ospStore");
  const postMessage = usePostMessage();
  const zeekClient = ospStore.zeekClient;
  const ospClient = ospStore.ospClient;
  const address = ospStore.aaAddress;
  console.log(
    "createStore",
    store.rewardsStr,
    store.amountStr,
    store.handleStr,
    store.token
  );
  const chainConfig = zeekClient?.config.tokens[store.token || "USDT"];

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    JsPluginUIEventEmitInstance.addEventListener(
      TUIMsgEnum.Create_Approve,
      approveRes
    );
  }, []);

  const approveRes = (res) => {
    console.log("====approveRes", res);
    if (!res?.success) {
      setLoading(false);
      // showError("Failed to received");
      return;
    }
  };

  const back = () => {
    if (loading) return;
    goBack();
  };
  const onConfirm = async () => {
    if (loading) return;
    setLoading(true);
    const upload = await takeScreenshot();
    if (!upload) {
      setLoading(false);
      return;
    }
    if (
      !store.rewardsStr ||
      !store.amountStr ||
      !store.handleStr ||
      !store.token
    ) {
      return;
    }
    const questData = await questMutation.mutateAsync({
      handle: store.handleStr,
    });
    const postId = questData.obj;
    if (!postId) {
      setLoading(false);
      console.error("Invalid postId");
      // showError("Invalid postId");
      return;
    }
    const plugData = await zeekClient?.quest?.buildIssueQuestPlug(
      {
        questPool: {
          token: store.token,
          value: store.rewardsStr,
        },
        quantity: Number(store.amountStr),
        start: getStartTime(),
        deadline: getDeadLineTime(30),
        salt: postId,
      },
      address
    );
    postMessage(
      ContractAction.pluginCreated,
      toCreateQuest(plugData, postId, upload)
    );
  };
  const toCreateQuest = (
    plugData: WishActivityExtension,
    questId: string,
    imgUrl?: string
  ) => {
    // 从bug开看要是直接写死329,44 有bug
    const { width, height } = previewRef.current.getBoundingClientRect() || {
      width: 329,
      height: 44,
    };
    const preview: TPluginTemplate = {
      type: "imgWithBtns",
      data: {
        media: {
          type: "image",
          url: imgUrl,
          width: width,
          height: height,
        },
        buttons: ["Go"],
      },
    };
    const extensionData = {
      address: plugData.address,
      call_data: plugData.call_data,
      value: plugData.value,
    };
    const approveData = {
      spender: zeekClient.config?.contracts["zeek"].address,
      tokenAddress: chainConfig?.address,
      amount: amountBigDecimal(store.rewardsStr, chainConfig?.decimals),
      questId: questId,
    };
    return {
      preview: preview,
      extensionData: extensionData,
      approveData: approveData,
    };
  };

  // 截图函数
  const takeScreenshot = async () => {
    // ospClient.IPFS.upload();
    if (previewRef.current) {
      try {
        const canvas = await html2canvas(previewRef.current, {
          backgroundColor: "transparent",
          useCORS: true,
          imageTimeout: 5000,
        });
        const imgData = canvas.toDataURL("image/png");

        // 将 base64 数据转换为 Blob
        const blob = dataURLToBlob(imgData);
        const file = new File([blob], "quest-preview.png", {
          type: "image/png",
        });
        const response = await ospClient.IPFS.upload(file);
        const transfer = transformIpfs(response);
        console.log("upload IPFS success transfer", transfer);

        return transfer;
        // const link = document.createElement("a");
        // link.href = imgData;
        // link.download = "quest-preview.png";
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
      } catch (error) {
        console.error("Error taking screenshot:", error);
        // showError("Error taking screenshot");
        return null;
      }
    }
  };

  // 将 base64 数据转换为 Blob
  const dataURLToBlob = (dataURL) => {
    const byteString = atob(dataURL.split(",")[1]);
    const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  const TopView = () => {
    return (
      <div
        ref={previewRef}
        className="flex flex-row bg-transparent selection:w-full items-center"
      >
        <div className="flex w-44 h-44 bg-background_primary items-center justify-center rounded-8">
          <img
            src={require("../../../../assets/icon/twitter_icon.svg")}
            className="h-24 w-24"
          />
        </div>
        <div className="flex flex-col ml-8">
          <div className="text-content_primary body-xl-bold">
            Follow @{store.handleStr}'s X
          </div>
          <div className="flex flex-1 flex-row items-center gap-1 text-content_tertiary body-s-regular">
            Earn
            <img
              src={chainConfig.icon}
              className="h-12 w-12"
              // style={{ objectFit: "contain" }}
            />
            <div className="text-content_primary body-s-bold">
              {store.perReward}
            </div>
            <div>
              {` `} from a {` `} {store.rewardsStr} {chainConfig?.symbol} prize
              pool
            </div>
          </div>
        </div>
      </div>
    );
  };

  /**
  |--------------------------------------------------
  | 去掉 deek 标识
  |--------------------------------------------------
  */
  const EndView = () => {
    return (
      <div className="bg-background_tertiary flex flex-row items-center mt-24 py-4 rounded-6 w-fit">
        <div>
          <img
            src={require("../../../../assets/icon/zeek.svg")}
            className="h-14 w-14"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="text-content_secondary ml-4 body-s-regular">
          Powered by Deek
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-col w-full h-full relative">
      <div className="flex flex-col w-full bg-background_secondary p-16 mt-14 rounded-16 ">
        <TopView />
        <div
          className={cn(
            "flex flex-row items-center text-content_primary justify-center mt-24 h-44 rounded-12 headline-h8 font-obviously_variable",
            "bg-button_ton_default_bg"
          )}
        >
          Go
        </div>
      </div>
      <div
        className={cn(
          "flex flex-col absolute bottom-0 w-full ",
          ConfigManager.getInstance().mode === "card" ? "" : "mb-24"
        )}
      >
        <div
          className={cn(
            "flex flex-row items-center  justify-center  h-56 rounded-12 headline-h8 font-obviously_variable",
            "bg-button_pri_default_bg"
          )}
          onClick={onConfirm}
        >
          {loading ? <LoadingComponent /> : null}
          {!loading ? "Confirm" : ""}
        </div>
        <div
          className={cn(
            "flex flex-row items-center  justify-center  h-56  headline-h8 font-obviously_variable mt-16 text-content_primary"
          )}
          onClick={back}
        >
          Cancel
        </div>
      </div>
    </div>
  );
});
const QuestPreview = QuestPreviewOrg;

export { QuestPreview };
