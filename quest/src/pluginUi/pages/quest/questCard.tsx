"use client";

import "../questDetail/detail.css";

import { DetailStore, OspStore, useStore } from "@app/pluginUi/stores";
import { OspClient, QueryTypeEnum } from "@open-social-protocol/osp-client";
import {
  QuestRowStatus,
  dp2px,
  formatKMBNumber,
  formatNumberPrecision,
} from "@app/pluginUi/utils/parse/commonUtils";
import { TQuestEnum, TQuestType } from "@app/pluginUi/stores/types";
import { useEffect, useRef } from "react";

import { ConfigManager } from "@app/config/configManager";
import { Progress } from "antd";
import QuestFooterOrg from "./QuestFooter";
import QuestOrg from "./QuestFooter";
import bigDecimal from "js-big-decimal";
import classNames from "classnames";
import { cn } from "@app/pluginUi/utils";
import { observer } from "mobx-react";
import { transformIpfs } from "@app/pluginUi/utils/transformIpfs";
import { useOspProfileList } from "../hooks/useOspProfileList";

/**
|--------------------------------------------------
|如果是 card 模式，就用 questCard 显示
|反之，page 模式, 就用 questDetail 显示
|--------------------------------------------------
*/
export interface QCardProps {
  // 标题
  title: string;
  //   获得币种
  coinName: string;
  //   获得币种图标
  coinIcon?: string;
  //   总金额
  coinTotal: string;
  // 获得金额
  gainCoin: string;
  //   进度
  progress?: number;
  // 参与人数
  verified?: number;
  //   百分比
  claimed?: string;
  // 隐藏类型
  btnHid?: boolean;
  // verify 的人handle 数组
  verifiers?: string[];

  btn?: "GO" | "VERIFY" | "HIDE";

  loading: boolean;

  cardType: "install" | "end" | "refund" | "hide" | "verified";

  isNotLogin: boolean;

  role: string;
  // 是否结束
  isEnded?: boolean;

  onGo?(): void;
  onVerify?(): void;
  onRefund?(): void;
}

const QuestCardOrg = observer((props: QCardProps) => {
  const {
    title,
    coinName,
    coinIcon,
    coinTotal,
    gainCoin,
    verified,
    claimed,
    btn,
    progress,
    btnHid,
    verifiers,
    loading,
    cardType = TQuestEnum.Initial,
    isNotLogin: islogin,
    role,
    onGo,
    onVerify,
    onRefund,
  } = props;
  const store = useStore<DetailStore>("detailStore");
  console.log("btnHid", btnHid);
  const titleStr = islogin ? "Follow --- X" : `Follow @${title}'s X`;
  const gainCoinStr = islogin ? "---" : gainCoin;
  const coinTotalStr = islogin
    ? "from a --- prize pool"
    : `from a ${coinTotal} ${coinName} prize pool`;

  const progressNum = islogin ? 40 : progress;

  const claimedStr = islogin ? "---" : claimed;

  const previewRef = useRef(null);
  const ospStore = useStore<OspStore>("ospStore");

  const { data } = useOspProfileList(ospStore?.ospClient, verifiers);

  const onGoAction = () => {
    console.log("onGoAction");
    onGo && onGo();
  };
  const onVerifyAction = () => {
    onVerify && onVerify();
  };
  const onRefundAction = () => {
    onRefund && onRefund();
  };

  const formatVerified =
    verified === 0
      ? "No user verified yet"
      : formatKMBNumber(
          formatNumberPrecision(
            verified,
            1,
            bigDecimal.RoundingModes.DOWN,
            true,
            false
          ),
          1
        ) + " verified";
  const verifiedStr = islogin ? "--" : formatVerified;

  const TopView = () => {
    return (
      <div className="flex w-full flex-row items-center gap-2 ">
        <div className="flex p-10 bg-background_primary items-center justify-center rounded-8">
          <img
            src={require("../../../../assets/icon/twitter_icon.svg")}
            className="h-24 w-24"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex relative flex-1">
          <div flex-col>
            <div className="text-content_primary body-l-bold">{titleStr}</div>
            <div className="flex flex-row text-content_tertiary items-center whitespace-nowrap overflow-ellipsis overflow-hidden body-s-regular gap-1 ">
              Earn
              <div className="flex whitespace-nowrap overflow-ellipsis overflow-hidden body-s-bold text-content_primary items-center flex-row">
                {!islogin ? (
                  <img
                    src={
                      coinIcon ||
                      require("../../../../assets/icon/USDC_test.svg")
                    }
                    className="h-12 w-12 mr-2"
                    // style={{ objectFit: "contain" }}
                  />
                ) : null}
                <div>{gainCoinStr}</div>
              </div>
              {coinTotalStr}
            </div>
          </div>
          {cardType === "end" && !islogin ? (
            <div className=" absolute flex px-4 py-4 items-center h-17 bg-primitives_blue_900 text-primitives_teal_500 rounded-4 body-s-bold right-0">
              Ended
            </div>
          ) : null}
        </div>
      </div>
    );
  };

  /**
  |--------------------------------------------------
  | 去掉 deek 标识
  |--------------------------------------------------
  */
  const EndDescView = () => {
    return (
      <div className="flex flex-row items-center mt-24 py-4 px-8 w-fit bg-background_tertiary rounded-6">
        <div>
          <img
            src={require("../../../../assets/icon/zeek.svg")}
            className="h-14 w-14"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="text-content_secondary ml-[8px] body-s-regular">
          Powered by Deek
        </div>
      </div>
    );
  };

  const ButtonView = () => {
    const isEnd = cardType === "end";
    const isRefund = cardType === "refund";
    console.log("questCard==ButtonView", cardType);
    if (cardType === "hide") {
      return null;
    }
    return (
      <div className="mt-24">
        <QuestFooterOrg
          role={role}
          taskLoading={loading}
          onRefund={onRefundAction}
          onGo={onGoAction}
          onVerify={onVerifyAction}
        />
      </div>
    );
  };

  interface ProgressProps {
    progress?: number;
  }
  const ProgressView = () => {
    return (
      <div className="flex flex-col w-full bg-background_overlay10 rounded-6 mt-12">
        <div className="absolute left-0 top-0 h-8 bg-red-400 "></div>
        <Progress
          percent={progressNum}
          type="line"
          showInfo={false}
          strokeColor="#1ed1e9"
        />
      </div>
    );
  };
  const ProgressInfoView = (props: ProgressProps) => {
    const { progress } = props;
    if (btn === "GO") {
      return null;
    }

    const UsesAvartar = () => {
      return (
        <div className="flex flex-row justify-center items-center">
          {data?.map((profile, index) => {
            return (
              <div
                className="w-16 h-16 rounded-full"
                key={profile?.profile_id}
                style={{ marginLeft: index === 0 ? 0 : dp2px(-6) }}
              >
                <img
                  src={transformIpfs(profile?.avatar)}
                  className="h-16 w-16 rounded-16"
                />
              </div>
            );
          })}
        </div>
      );
    };
    return (
      <div className="flex flex-col w-full mt-12">
        <ProgressView />
        <div className="flex flex-row justify-between mt-12 items-center">
          <div className="flex flex-row">
            <UsesAvartar />
            <div className="ml-4 text-content_tertiary body-s-regular">
              {verifiedStr}
            </div>
          </div>
          <div className="flex text-content_primary whitespace-nowrap overflow-ellipsis overflow-hidden body-s-bold">
            {claimedStr}
            <div className="ml-4 text-content_secondary whitespace-nowrap overflow-ellipsis overflow-hidden body-s-regular">
              Claimed
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      ref={previewRef}
      className={classNames(
        "flex flex-col w-full bg-background_secondary rounded-16 p-16"
      )}
    >
      <div className="flex flex-col">
        <TopView />
        <ProgressInfoView />
      </div>

      {btnHid ? <ButtonView /> : null}
      {/* <EndDescView /> */}
    </div>
  );
});
const QuestCard = QuestCardOrg;

export { QuestCard };

/**
   <QuestCard
        title="Follow @gaaaqi’s X"
        gainIcon={require("../../../../assets/icon/coin.svg")}
        //   获得金额
        gain="0.3"
        claimed="85.5%"
        btn="GO"
      />

      <QuestCard
        title="Follow @gaaaqi’s X"
        gainIcon={require("../../../../assets/icon/coin.svg")}
        //   获得金额
        gain="0.3"
        claimed="85.5%"
        btn="VERIFY"
      />

      <QuestCard
        title="Follow @gaaaqi’s X"
        gainIcon={require("../../../../assets/icon/coin.svg")}
        //   获得金额
        gain="0.3"
        claimed="85.5%"
        btn="HIDE"
      />
 */
