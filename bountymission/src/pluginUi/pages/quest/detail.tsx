import { OspStore, useStore } from "@app/pluginUi/stores";
import {
  QuestRowStatus,
  QuestStatus,
} from "@app/pluginUi/utils/parse/commonUtils";
import { formatPow, trimTrailingZeros } from "@app/pluginUi/utils/calculate";

import bigDecimal from "js-big-decimal";
import { chain } from "lodash";
import useGetChainInfo from "../hooks/useGetChainInfo";
import { useQuestDetailHook } from "@app/apis/quest";

interface QuestDetailProps {}

export const QuestDetail = (props: QuestDetailProps) => {
  const ospStore = useStore<OspStore>("ospStore");
  const zeekClient = ospStore?.zeekClient;
  const bizId = "123";

  const { data, refetch } = useQuestDetailHook(bizId, {
    biz_id: bizId,
  });

  // const chainInfo = useGetChainInfo({ zeekClient, address: data?.obj?.token });
  // 币种图标
  // const coinUrl = chainInfo?.icon;
  // //币种名称
  // const coinName = chainInfo?.symbol;
  // // handle name
  // const handleName = data?.obj?.handle;
  // // 总金额
  // const total = formatPow(data?.obj?.value ?? 0, chainInfo?.decimals ?? 1);

  // const reward = trimTrailingZeros(
  //   new bigDecimal(total)
  //     .divide(new bigDecimal(data?.obj?.quantity ?? 1))
  //     .round(3, bigDecimal.RoundingModes.DOWN)
  //     .getValue()
  // );
  // // 展示： 每份奖励
  // const rewarFormatValue =
  //   new bigDecimal(reward).compareTo(new bigDecimal("0.001")) < 0
  //     ? "< 0.001"
  //     : new bigDecimal(reward).compareTo(new bigDecimal("99999999")) > 0
  //     ? "99999999+"
  //     : reward;
  // // 展示： 已参与人数百分比
  // const progress =
  //   ((data?.obj?.participateCount ?? 0) / (data?.obj?.quantity ?? 1)) * 100;

  // // 是否展示 go and verify
  // const showGoVerify =
  //   data?.obj?.role === QuestRowStatus.Audience &&
  //   data?.obj?.status === QuestStatus.Active;

  // // 任务是否结束
  // const isEnded = data?.obj?.status === QuestStatus.Finished;

  return <div>Quest Detail</div>;
};
