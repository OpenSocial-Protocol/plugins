import { OspStore, useStore } from "@app/pluginUi/stores";
import {
  getDeadLineTime,
  getStartTime,
} from "@app/pluginUi/utils/parse/commonUtils";

import { ZeekClient } from "@keccak256-evg/zeek-client";
import { useState } from "react";

export const usePostQuest = (address: string, zeekClient: ZeekClient) => {
  // const ospStore = useStore<OspStore>("ospStore");
  // const zeekClient = ospStore.zeekClient;
  const [loading, setLoading] = useState(false);

  const createConfirm = async () => {
    setLoading(true);

    const plugData = await zeekClient?.quest?.buildIssueQuestPlug(
      {
        // 奖金池 TODO: 洪伟
        questPool: {
          token: "", // 币种
          value: "100", // 总金额
        },

        quantity: 1, // 份数
        start: getStartTime(),
        deadline: getDeadLineTime(),
        salt: "", // 盐值，questId
      },
      address as string
    );
    setLoading(false);
    return {
      address: plugData?.address,
      call_data: plugData?.call_data,
      value: plugData?.value,
      loading,
    };
  };

  return { createConfirm };
};
