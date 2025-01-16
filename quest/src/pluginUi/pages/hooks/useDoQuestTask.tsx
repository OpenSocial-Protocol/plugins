import { openURL, validURL } from "@app/pluginUi/utils/parse/commonUtils";

import { ContractAction } from "@app/pluginUi/utils/constance/contractAction";
import { ZeekClient } from "@keccak256-evg/zeek-client";
import { axiosInstance } from "@app/modules/client";
import { encodeURIStrWithExtensions } from "@app/pluginUi/utils/parse/encode";
import { getHostConfig } from "../config/host";
import usePostMessage from "@app/pluginUi/hook/usePostMessage";
import { useQuestVerifyHook } from "@app/apis/quest";
import { useState } from "react";

export const useDoQuestTask = (
  env: string,
  zeekClient: ZeekClient,
  chainId: string
) => {
  const [loading, setLoading] = useState(false);
  const postMessage = usePostMessage();
  const { mutateAsync: questVerifyMutateAsync } = useQuestVerifyHook();
  const sign = async () => {
    try {
      const config = {
        baseURL: process.env.EXPO_PUBLIC_QUESTS_API_URL,
        url: "/v2/customer/sign",
        method: "GET",
        params: {
          type: 1,
        },
        headers: {
          saas_id: "zeek",
        },
      };
      const res = await axiosInstance(config);
      return res?.data;
    } catch (err) {
      throw new Error(err);
    }
  };

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
          try {
            const signResponse = await sign();
            console.log("signResponse", signResponse?.obj?.sign);
            if (!signResponse?.success || !signResponse?.obj?.sign) {
              console.error("get deek customer sign error");
              setLoading(false);
              return;
            }
            const encodeSign = encodeURIStrWithExtensions(
              signResponse?.obj?.sign
            );
            const verifyUrl = `https://twitter.com/i/oauth2/authorize?response_type=code&scope=tweet.read%20offline.access%20users.read&state=twitter_plugin_${chainId}_${encodeURIComponent(
              encodeSign
            )}&code_challenge=mugen&code_challenge_method=plain&client_id=ZXFad3d4TDNRNE01SDlaWWZySVc6MTpjaQ`;

            const redirectUri = `${getHostConfig(env).taskLandingHost}/task`;
            const taskUrl =
              verifyUrl + "&redirect_uri=" + decodeURIComponent(redirectUri);

            console.log("taskUrl-->", taskUrl, encodeURIComponent(encodeSign));
            openURL({
              scheme: taskUrl,
              url: taskUrl,
            });
            setLoading(false);
          } catch (e) {
            setLoading(false);
            console.error("error message: " + e.message);
          }
        } else if (res?.msgKey === "100028") {
          postMessage(ContractAction.plugin_toast, {
            toast: "The service is currently busy. Please try again later.",
          });
        } else {
          // 其他错误
          postMessage(ContractAction.plugin_toast, {
            toast: "Task not verified. Please try again.",
          });
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
