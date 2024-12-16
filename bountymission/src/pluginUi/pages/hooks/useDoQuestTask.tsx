import { OspStore, useStore } from "@app/pluginUi/stores";
import { UserOp, ZeekClient } from "@keccak256-evg/zeek-client";
import { openURL, validURL } from "@app/pluginUi/utils/parse/commonUtils";

import { ID_TOKEN } from "@app/modules/constant";
import { QueryMap } from "@app/pluginUi/utils/queryMap";
import { encodeURIStrWithExtensions } from "@app/pluginUi/utils/parse/encode";
import { hostConfig } from "../config/host";
import { toast } from "react-toastify";
import { useCustomerSignHook } from "@app/apis/customer";
import { useQuestVerifyHook } from "@app/apis/quest";
import { useState } from "react";

export const useDoQuestTask = (questId: string, zeekClient: ZeekClient) => {
  const [loading, setLoading] = useState(false);
  const { mutateAsync: questVerifyMutateAsync } = useQuestVerifyHook();
  const { data: customerSign } = useCustomerSignHook(
    {
      type: 1,
    },
    {
      saas_id: "zeek",
    }
  );

  /**
   * when click go, then go to x do follow this x handle
   * @param xHandle
   * @returns
   */
  const doFollowTask = (xHandle: string) => {
    if (!xHandle) {
      return;
    }
    const taskUrl = `https://twitter.com/intent/follow?screen_name=${xHandle}`;
    if (validURL(taskUrl)) {
      window.open(
        taskUrl,
        "oauth",
        "menubar=no,location=no,resizable=no,scrollbars=no,status=no, height=720,width=390"
      );
    } else {
      console.log("url is invalid", taskUrl);
    }
  };

  const doVerify = async ({
    questId,
    aaAddress,
    onSuccess,
  }: {
    questId: string;
    aaAddress: string;
    onSuccess: ({ extension }: { extension: any }) => void;
  }) => {
    try {
      setLoading(true);
      const res = await questVerifyMutateAsync({ questId });
      if (res?.success) {
        console.log("verifyQuest", res);
        const verifyExtension = await zeekClient?.quest.buildVerifyQuestPlug(
          {
            questId: res?.obj?.questId,
            talent: res?.obj?.talent,
            applyTime: res?.obj?.applyTime,
            applyNonce: res?.obj?.nonce,
            signer: res?.obj?.singer,
            signature: res?.obj?.signatureExtension,
            deadline: res?.obj?.deadline,
          },
          aaAddress
        );
        console.log("verifyExtension,verifyQuest", verifyExtension, aaAddress);
        onSuccess?.({ extension: verifyExtension });
      } else {
        // 没有授权信息
        if (res?.msgKey === "100020") {
          if (!customerSign?.success || !customerSign?.obj?.sign) {
            console.error("get deek customer sign error");
            return;
          }
          const encodeSign = encodeURIStrWithExtensions(
            customerSign?.obj?.sign
          );
          const verifyUrl = `https://twitter.com/i/oauth2/authorize?response_type=code&scope=tweet.read%20offline.access%20users.read&state=twitter_plugin__${encodeURIComponent(
            encodeSign
          )}&code_challenge=mugen&code_challenge_method=plain&client_id=ZXFad3d4TDNRNE01SDlaWWZySVc6MTpjaQ`;

          const redirectUri = `${hostConfig.taskLandingHost}/task`;
          const taskUrl =
            verifyUrl + "&redirect_uri=" + decodeURIComponent(redirectUri);

          console.log("taskUrl-->", taskUrl);
          openURL({
            scheme: taskUrl,
            url: taskUrl,
          });
          setLoading(false);
          return;
        } else if (res?.msgKey === "100021") {
          toast.success("Please go to follow this Twitter account first");
        } else {
          // 其他错误
          toast.success("Failed to verify, please try later");
        }
        setLoading(false);
      }
    } catch (err) {
      console.log("err", err);
      setLoading(false);
    }
  };

  const updateLoading = (loading: boolean) => {
    setLoading(loading);
  };

  return {
    doFollowTask,
    doVerify,
    loading,
    updateLoading,
  };
};
