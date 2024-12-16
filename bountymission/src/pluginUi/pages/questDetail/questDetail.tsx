"use client";

import "./detail.css";

import { DetailStore, OspStore, useStore } from "@app/pluginUi/stores";
import { formatPow, trimTrailingZeros } from "@app/pluginUi/utils/calculate";

import { ContractAction } from "@app/pluginUi/utils/constance/contractAction";
import { JsPluginUIEventEmitInstance } from "@app/pluginUi/utils/common/JsSdkEventEmit";
import { QuestCard } from "../quest/questCard";
import { TUIMsgEnum } from "@app/pluginUi/component";
import bigDecimal from "js-big-decimal";
import { cn } from "@app/pluginUi/utils";
import { ethers } from "ethers";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { useDoQuestTask } from "../hooks/useDoQuestTask";
import { useEffect } from "react";
import useGetChainInfo from "../hooks/useGetChainInfo";
import usePostMessage from "@app/pluginUi/hook/usePostMessage";
import { useQuestDetailHook } from "@app/apis/quest";

export interface QDetailProps {
  profileId: string;
  referencedProfileId: string;
  referencedContentId: string;
  communityId: string;
  onGo?(): void;
  onVerify?(): void;
}

const QuestDetailOrg = observer((props: QDetailProps) => {
  const { referencedProfileId, referencedContentId, communityId, profileId } =
    props;
  const bizId = `${referencedProfileId}_${referencedContentId}`;
  console.log("detail props:", props);
  const ospStore = useStore<OspStore>("ospStore");
  const store = useStore<DetailStore>("detailStore");
  const aaAddress = ospStore.aaAddress;
  const postMessage = usePostMessage();
  const zeekClient = ospStore?.zeekClient;
  const { data, refetch, isLoading } = useQuestDetailHook(bizId, {
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
  // console.log("quest detail ", data);
  const chainInfo = useGetChainInfo({
    chainConfig: zeekClient?.config,
    address: data?.obj?.token,
  });

  const { doFollowTask, doVerify, loading, updateLoading } = useDoQuestTask(
    data?.obj?.questId,
    zeekClient
  );
  // // 总金额
  const total = formatPow(data?.obj?.value ?? 0, chainInfo?.decimals ?? 1);

  const reward = trimTrailingZeros(
    new bigDecimal(total)
      .divide(new bigDecimal(data?.obj?.quantity ?? 1))
      .round(3, bigDecimal.RoundingModes.DOWN)
      .getValue()
  );
  // // 展示： 每份奖励
  const rewarFormatValue =
    new bigDecimal(reward).compareTo(new bigDecimal("0.001")) < 0
      ? "< 0.001"
      : new bigDecimal(reward).compareTo(new bigDecimal("99999999")) > 0
      ? "99999999+"
      : reward;
  // // 展示： 已参与人数百分比
  const progress =
    ((data?.obj?.participateCount ?? 0) / (data?.obj?.quantity ?? 1)) * 100;

  const isEnded = store.isEnded;

  const btnType = store.buttonType;

  console.log("----btnType", btnType);

  const onGoAction = () => {
    if (btnType !== "install") return;
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

  const verifyRes = (response: any) => {
    console.log("----verifyRes", response);
    if (!response.success) {
      console.log("pluginVerify failed");
      return;
    }
    updateLoading(false);
    refetch();
  };
  const refundRes = (response: any) => {
    console.log("----refundRes", response);
    if (!response.success) {
      console.log("pluginRefund failed");
      return;
    }
    store.setRefundLoading(false);
    refetch();
  };
  const onRefundAction = () => {
    if (store.refundLoading) return;
    store.setRefundLoading(true);
    const test = toJS(data);
    const prams = {
      questId: test.obj.onChainQuestId,
    };
    postMessage(ContractAction.pluginRefund, prams);
  };

  const DetailFootBtn = () => {
    if (btnType === "hide" || store.isH5 || isLoading) {
      return <></>;
    }
    if (btnType === "refund") {
      return (
        <div className="flex flex-col">
          <div
            className={cn(
              "flex bg-button_pri_default_bg w-full h-[44px] mt-[14px] rounded-[12px] items-center  justify-center headline-h6 ",
              "hover:bg-button_pri_hover_bg",
              "active:bg-button_pri_disabled_bg"
            )}
            onClick={onRefundAction}
          >
            Refund
          </div>
        </div>
      );
    } else {
      const end_go_c = isEnded
        ? "border-button_sec_disabled_con text-button_sec_disabled_con"
        : "border-button_pri_default_bg text-content_primary hover:bg-button_sec_hover_bg";
      const end_verify_c = isEnded
        ? "bg-button_pri_disabled_con text-pri_disabled_con"
        : "bg-button_pri_default_bg text-pri_defult_con hover:bg-button_pri_hover_bg";

      return (
        <div className="flex flex-col">
          <div
            className={cn(
              "flex  w-full h-[44px] rounded-[12px] items-center  justify-center  headline-h6",
              "border-[2px] border-solid",
              end_go_c
            )}
            onClick={onGoAction}
          >
            Go
          </div>
          <div
            className={cn(
              "flex w-full h-[44px] mt-[14px] rounded-[12px] items-center  justify-center headline-h6",
              end_verify_c
            )}
            onClick={onVerifyAction}
          >
            {loading ? <div className="btn_loader" /> : null}
            {!loading ? "Verify" : ""}
          </div>
        </div>
      );
    }
  };
  const LoadingView = () => {
    return (
      <div className="p-[16px] flex flex-col w-full bg-background_secondary mt-[14px] rounded-[16px] ">
        <div className="flex flex-col w-full ">
          <div className="flex flex-row">
            <div className="loader1 mt-[12px]" />
            <div className="ml-[12px]">
              <div className="loader2  mt-[12px] " />
              <div className="loader3  mt-[12px]" />
            </div>
          </div>
          <div className="loader4 mt-[24px]" />
          <div className="loader5  mt-[24px]" />
        </div>
      </div>
    );
  };
  return (
    <div className="p-[16px] flex flex-col w-full justify-between">
      <div>
        {isLoading ? (
          <LoadingView />
        ) : (
          <QuestCard
            title={data?.obj?.handle ?? ""}
            coinName={chainInfo?.symbol ?? ""} //币种名称
            coinIcon={chainInfo?.icon}
            coinTotal={total ?? "0"} //   总金额s
            gainCoin={rewarFormatValue ?? "0"} //   获得金额s
            progress={progress >= 100 ? 100 : progress} //进度
            claimed={`${progress ?? "0"}%`} //百分比
            cardType={btnType}
            onGo={onGoAction}
            onVerify={onVerifyAction}
            onRefund={onRefundAction}
            btnHid={!store.isH5}
            isEnded={isEnded}
            verified={data?.obj?.participateCount ?? 0}
            verifiers={data?.obj?.verifiers}
            loading={loading}
          />
        )}
      </div>
      <div className="mt-[48px]">
        <DetailFootBtn />
      </div>
    </div>
  );
});
const QuestDetail = QuestDetailOrg;

export { QuestDetail };
