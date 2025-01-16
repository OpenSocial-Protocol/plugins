"use client";

import "./detail.css";

import { DetailStore, OspStore, useStore } from "@app/pluginUi/stores";
import {
  QuestRowStatus,
  formatNumberPrecision,
} from "@app/pluginUi/utils/parse/commonUtils";
import { formatPow, trimTrailingZeros } from "@app/pluginUi/utils/calculate";
import { useEffect, useState } from "react";

import { ConfigManager } from "@app/config/configManager";
import { ContractAction } from "@app/pluginUi/utils/constance/contractAction";
import { JsPluginUIEventEmitInstance } from "@app/pluginUi/utils/common/JsSdkEventEmit";
import { PageMode } from "@open-social-protocol/osp-plugin-api-types";
import { QuestCard } from "../quest/questCard";
import QuestFooterOrg from "../quest/QuestFooter";
import QuestOrg from "../quest/QuestFooter";
import { TUIMsgEnum } from "@app/pluginUi/component";
import bigDecimal from "js-big-decimal";
import classNames from "classnames";
import { cn } from "@app/pluginUi/utils";
import { ethers } from "ethers";
import { observer } from "mobx-react";
import { queryClient } from "@app/modules/queryClient";
import { toJS } from "mobx";
import { useDoQuestTask } from "../hooks/useDoQuestTask";
import useGetChainInfo from "../hooks/useGetChainInfo";
import { useOspProfile } from "../hooks/useGetospProfile";
import usePostMessage from "@app/pluginUi/hook/usePostMessage";
import { useQuestDetailHook } from "@app/apis/quest";
import { useUserOpHashProcessHook } from "@app/apis/contract";

export interface QDetailProps {
  profileId: string;
  referencedProfileId: string;
  referencedContentId: string;
  communityId: string;
  onGo?(): void;
  onVerify?(): void;
  mode?: PageMode;
}

/**
|--------------------------------------------------
| 乐观更新：
| 1、verify 乐观更新
|   1>状态修改; 2>进度条增加；3>verify 人数增加 4>verify 头像增加
| 2、refund 乐观更新
|   直接更新为 end 状态
|--------------------------------------------------
*/
const QuestDetailOrg = observer((props: QDetailProps) => {
  const {
    referencedProfileId,
    referencedContentId,
    communityId,
    profileId,
    mode,
  } = props;
  const bizId = `${referencedProfileId}_${referencedContentId}`;
  console.log("detail props:", props);
  const ospStore = useStore<OspStore>("ospStore");
  const store = useStore<DetailStore>("detailStore");
  const aaAddress = ospStore.aaAddress;
  const postMessage = usePostMessage();
  const zeekClient = ospStore?.zeekClient;
  const islogin = !!ospStore?.zeekClient;
  const ospClient = ospStore?.ospClient;
  const { mutateAsync: speedMutateAsync } = useUserOpHashProcessHook();

  useEffect(() => {
    store.setInitLogin(islogin);
  }, [islogin]);

  const { data, isLoading, queryKey } = useQuestDetailHook(bizId, {
    biz_id: bizId,
  });

  useEffect(() => {
    store.setInitInfo(window.screen.availWidth, data?.obj);
    return () => {
      store.clear();
    };
  }, [data?.obj]);

  useEffect(() => {
    JsPluginUIEventEmitInstance.addEventListener(TUIMsgEnum.Refund, refundRes);
    JsPluginUIEventEmitInstance.addEventListener(TUIMsgEnum.Verify, verifyRes);
  }, []);

  const { data: myProfile } = useOspProfile(ospClient);
  const verifyRes = async (response: any) => {
    console.log("----verifyRes", response);
    if (!response.success) {
      updateLoading(false);
      console.log("pluginVerify failed");
      postMessage(ContractAction.plugin_toast, {
        toast: "Failed to received",
      });
      return;
    }
    /**
    |--------------------------------------------------
    | 加速接口，提高后端处理速度
    |--------------------------------------------------
    */
    const speedResult = await speedMutateAsync({
      userOperationHash: response?.op_hash || "",
    });
    console.log("verifyRes--speedMutateAsync", speedResult);
    // await refreshPage(1000);
    updateLoading(false);
    store.setOptimisticVerified(true);
  };
  const refundRes = async (response: any) => {
    console.log("----refundRes", response);
    if (!response.success) {
      console.log("pluginRefund failed");
      store.setRefundLoading(false);
      postMessage(ContractAction.plugin_toast, {
        toast: "Failed to received",
      });
      return;
    }
    /**
    |--------------------------------------------------
    | 加速接口，提高后端处理速度
    |--------------------------------------------------
    */
    const result = await speedMutateAsync({
      userOperationHash: response?.op_hash || "",
    });
    console.log("refundRes--speedMutateAsync", result);
    // await refreshPage(1000);
    store.setRefundLoading(false);
    store.setOptimisticEnd(true);
  };

  const refreshPage = async (timeout: number) => {
    console.log("==refreshPage==");
    setTimeout(() => {
      queryClient.invalidateQueries({ queryKey });
    }, timeout);
  };

  const chainInfo = useGetChainInfo({
    chainConfig: zeekClient?.config,
    address: data?.obj?.token,
  });

  const { doFollowTask, doVerify, loading, updateLoading } = useDoQuestTask(
    ospStore?.zeekEnvironment?.env,
    zeekClient,
    ospStore?.zeekEnvironment?.chainConfig?.id?.toString()
  );
  // // 总金额
  const total = formatPow(data?.obj?.value ?? 0, chainInfo?.decimals ?? 1);

  const reward = trimTrailingZeros(
    new bigDecimal(total)
      .divide(new bigDecimal(data?.obj?.quantity ?? 1))
      .round(chainInfo?.showDecimals, bigDecimal.RoundingModes.DOWN)
      .getValue()
  );

  const { participateCount = 0 } = data?.obj || {};

  const participant = store.OptimisticVerified
    ? participateCount + 1
    : participateCount;

  const verifies = store.OptimisticVerified
    ? [...data?.obj?.verifiers, myProfile.profile_id]
    : data?.obj?.verifiers;

  // // 展示： 每份奖励
  const rewarFormatValue =
    new bigDecimal(reward).compareTo(new bigDecimal("99999999")) > 0
      ? "99999999+"
      : reward;
  const progress = ((participant ?? 0) / (data?.obj?.quantity ?? 1)) * 100;

  const claimed =
    participant >= data?.obj?.quantity
      ? 100
      : formatNumberPrecision(
          (participant / data?.obj?.quantity) * 100,
          1,
          bigDecimal.RoundingModes.DOWN,
          true,
          false
        );

  const btnType = store.buttonType;

  console.log(
    "----btnType, mode, isH5 -->",
    btnType,
    ConfigManager.getInstance().mode,
    store.isH5,
    ospStore?.zeekEnvironment?.chainConfig?.id.toString()
  );

  const onGoAction = () => {
    if (btnType !== "install" || loading) return;
    doFollowTask?.(data?.obj?.handle);
  };
  const onVerifyAction = async () => {
    if (btnType !== "install" || loading) return;
    await doVerify?.({
      questId: data?.obj?.questId,
      aaAddress: aaAddress,
      onSuccess({ extension }) {
        try {
          console.log("do verify 111", extension);
          const ctx = ethers.utils.defaultAbiCoder.encode(
            ["bytes2", "string", "uint256", "bytes32"],
            [
              "0x0001",
              zeekClient?.config?.osp?.appId, //这块需要替换成对应的ID
              communityId, //替换成社区ID
              "0x0000000000000000000000000000000000000000000000000000000000000000",
            ]
          );
          const reactionAndData = ethers.utils.concat([
            extension?.address,
            extension?.call_data,
          ]);
          console.log("do verify 222", reactionAndData, ctx);
          const verifyData = {
            profileId: profileId,
            appId: zeekClient?.config?.osp?.appId,
            communityId: communityId,
            referencedProfileId: referencedProfileId,
            referencedContentId: referencedContentId,
            reactionAndData: reactionAndData,
            ctx: ctx,
          };
          console.log("do verify 333");
          postMessage(ContractAction.pluginVerify, verifyData);
        } catch (err) {
          console.error("do verify error", err);
        }
      },
    });
  };

  const onRefundAction = () => {
    if (store.refundLoading || btnType === "end") return;
    store.setRefundLoading(true);
    const test = toJS(data);
    const prams = {
      questId: test.obj.onChainQuestId,
    };
    postMessage(ContractAction.pluginRefund, prams);
  };

  const DetailFootBtn = () => {
    if (
      btnType === "hide" ||
      ConfigManager.getInstance().mode === "card" ||
      isLoading
    ) {
      return <></>;
    }
    return (
      <QuestFooterOrg
        role={data?.obj?.role}
        taskLoading={loading}
        onRefund={onRefundAction}
        onGo={onGoAction}
        onVerify={onVerifyAction}
      />
    );
  };
  const LoadingView = () => {
    return (
      <div className="p-16 flex flex-col w-full bg-background_secondary mt-14 rounded-16 ">
        <div className="flex flex-col w-full ">
          <div className="flex flex-row">
            <div className="loader1 mt-12" />
            <div className="ml-12">
              <div className="loader2  mt-12 " />
              <div className="loader3  mt-12" />
            </div>
          </div>
          <div className="loader4 mt-24" />
          <div className="loader5  mt-24" />
        </div>
      </div>
    );
  };
  //
  return (
    <div
      className={classNames(
        "flex flex-col w-full justify-between rounded-8  h-full"
      )}
    >
      <div>
        {isLoading ? (
          <LoadingView />
        ) : (
          <div>
            <QuestCard
              title={data?.obj?.handle ?? ""}
              coinName={chainInfo?.symbol ?? ""} //币种名称
              coinIcon={chainInfo?.icon}
              coinTotal={total ?? "0"} //   总金额s
              gainCoin={rewarFormatValue ?? "0"} //   获得金额s
              progress={progress >= 100 ? 100 : progress} //进度
              claimed={`${claimed}%`} //百分比
              cardType={btnType}
              onGo={onGoAction}
              onVerify={onVerifyAction}
              onRefund={onRefundAction}
              btnHid={ConfigManager.getInstance().mode === "card"}
              verified={participant}
              verifiers={verifies}
              loading={loading}
              isNotLogin={!islogin}
              role={data?.obj?.role}
            />
            {ConfigManager.getInstance().mode === "page" && (
              <div className="flex flex-row items-center mt-16">
                <img
                  src={require("../../../../assets/icon/action.svg")}
                  className="h-12 w-12"
                  style={{ objectFit: "contain" }}
                />
                <div className="text-content_disabled body-s-regular ml-4">
                  Note: Reward claiming has 10% fee to be fraud-free!
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className=" w-full mb-24 bottom-0">
        <DetailFootBtn />
      </div>
    </div>
  );
});
const QuestDetail = QuestDetailOrg;

export { QuestDetail };
