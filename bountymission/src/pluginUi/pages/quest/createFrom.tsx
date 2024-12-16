"use client";

// import Twitter from "@app/pluginUi/public/images/twitter_icon.svg";
import "./from.css";

import { CreateStore, OspStore, useStore } from "@app/pluginUi/stores";
import { Currency, WishActivityExtension } from "@keccak256-evg/zeek-client";
import {
  getDeadLineTime,
  getStartTime,
} from "@app/pluginUi/utils/parse/commonUtils";
import { useCacheLocation, useCustomNavigate } from "@app/pluginUi/hook";
import { useEffect, useState } from "react";

import { ContractAction } from "@app/pluginUi/utils/constance/contractAction";
import { Input } from "antd";
import { TPluginTemplate } from "@open-social-protocol/osp-plugin-api-types";
import bigDecimal from "js-big-decimal";
import { cn } from "@app/pluginUi/utils";
import modal from "@app/pluginUi/utils/modal";
import { observer } from "mobx-react";
import useBalance from "../hooks/useBalance";
import { useGetQuestTokenRestrict } from "../hooks/useGetQuestTokenRestrict";
// import useChainConfig from "../hooks/chainInfo";
import useGetWishConfig from "../hooks/useGetWishConfig";
import usePostMessage from "@app/pluginUi/hook/usePostMessage";
import { useQuestPostHook } from "@app/apis/quest";

const QuestCreateFromOrg = observer(() => {
  const navigate = useCustomNavigate();
  const location = useCacheLocation();
  const store = useStore<CreateStore>("createStore");
  const ospStore = useStore<OspStore>("ospStore");
  const postMessage = usePostMessage();
  const zeekClient = ospStore.zeekClient;
  const address = ospStore.aaAddress;

  const [token, setToken] = useState<string>();
  const [tokenList, setTokenList] = useState<Currency[]>([]);
  const [curTokenInfo, setTokenInfo] = useState<Currency>();

  console.log("token-->", token);
  const { data: tokenConfig, isLoading: isConfigLoading } = useGetWishConfig(
    token || "USDT",
    zeekClient
  );
  const { data: questRestrict, isLoading: isQuestRestrictLoading } =
    useGetQuestTokenRestrict(token, zeekClient);

  console.log("tokenConfig", tokenConfig);
  // 最小发行 token 数量
  const minIssueTokensValue = tokenConfig?.minIssueTokens?.valueStr || "1.0";
  console.log("minIssueTokensValue", tokenConfig?.minIssueTokens);

  // get balance, 跟 用户输入的 token 数量做比较，不能大于 balance
  const {
    data: blData,
    isLoading,
    onRefresh: refetchBalance,
  } = useBalance(address, zeekClient, token);

  console.log("balance", blData);

  useEffect(() => {
    if (!zeekClient?.config?.tokens) {
      return;
    }
    const tokensList = Object.values(zeekClient?.config?.tokens ?? {}) || [];
    setTokenList(tokensList);
    setToken(tokensList[0]?.symbol);
    setTokenInfo(tokensList[0]);
    store.onSetToken(tokensList[0]?.symbol);
  }, [zeekClient?.config]);

  useEffect(() => {
    store.setInitInfo(
      blData?.balance || "0",
      minIssueTokensValue,
      questRestrict
    );
  }, [blData, minIssueTokensValue, questRestrict]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    store.onChange("HANDLE", value);
  };
  const rewardsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    store.onChange("REWARDS", value);
  };
  const amountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    store.onChange("AMOUNT", value);
  };
  const showUSDC = () => {
    store.clearRewardsError();
    modal.popShow({
      children: <CurrencyView />,
    });
  };
  const showClose = () => {
    modal.popHidden();
  };

  const onPreview = async () => {
    navigate("/questPreview");
  };

  const CurrencyView = () => {
    const ItemView = (info: { item: Currency }) => {
      const { item } = info;
      return (
        <div
          className="flex flex-row h-[64px] justify-between mr-[16px]"
          onClick={() => {
            setToken(item.symbol);
            setTokenInfo(item);
            store.onSetToken(item.symbol);
            showClose();
          }}
        >
          <div className="flex flex-row  items-center justify-center">
            <div>
              <img
                src={item?.icon}
                className="h-[32px] w-[32px]"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="text-content_primary ml-[8px] body-l-regular">
              {item.symbol}
            </div>
          </div>
          {store.token === item.symbol ? (
            <div className="flex items-center justify-center">
              <img
                src={require("../../../../assets/icon/checked.svg")}
                className="h-[20px] w-[20px]"
                style={{ objectFit: "contain" }}
              />
            </div>
          ) : null}
        </div>
      );
    };
    return (
      <div className="flex flex-col w-full  justify-end items-end">
        <div className="flex h-full w-full " onClick={showClose}></div>
        <div className="h-[300px] w-full bg-background_secondary px-[24px] py-[24px]">
          <div className="flex flex-row justify-between">
            <div className="text-content_primary headline-h6">
              Select currency
            </div>
            <div className="w-[32px] h-[32px]" onClick={showClose}>
              <img
                src={require("../../../../assets/icon/clse.svg")}
                className="h-[12px] w-[12px]"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="mt-[24px]">
            {tokenList &&
              tokenList.map((item) => {
                return <ItemView item={item} />;
              })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full h-full justify-between overflow-auto">
      <div className="flex flex-col w-full h-full ">
        <div className="text-content_tertiary body-m-regular mt-24">
          The X account you want to grow
        </div>
        <div
          className={cn(
            "px-8 py-12 mt-8 flex flex-row items-center w-full",
            "rounded-8 bg-background_overlay10",
            store.handleError
              ? "border-[2] border-feedback_error border-solid"
              : ""
          )}
        >
          <div className="w-20 h-20 mr-8">
            <img
              src={require("../../../../assets/icon/twitter_icon.svg")}
              className="h-20 w-20"
              style={{ objectFit: "contain" }}
            />
          </div>
          <Input
            placeholder="@ x handle"
            className="w-full body-l-regular"
            onChange={handleChange}
            onFocus={() => store.onTheFocus("HANDLE")}
            onBlur={() => store.onTheFocus("HANDLE")}
          />
        </div>
        {store.handleError ? (
          <div className="text-feedback_error">
            Please enter handle in the correct format
          </div>
        ) : null}

        <div
          className={cn(
            "bg-background_overlay10 p-12 mt-24 rounded-8",
            store.rewardsError
              ? "border-2 border-feedback_error border-solid"
              : ""
          )}
        >
          <div className="text-content_secondary body-m-regular ">
            Total Rewards
          </div>
          <div className="flex flex-row items-center mt-8 justify-between">
            <div className="w-full h-full">
              <Input
                placeholder={`Min ${
                  isConfigLoading ? "--" : minIssueTokensValue + " " + token
                }`}
                className="body-xl-bold text-content_primary"
                value={store.rewardsStr}
                onChange={rewardsChange}
                onFocus={() => store.onTheFocus("REWARDS")}
                onBlur={() => store.onTheFocus("REWARDS")}
              />
            </div>
            <div className="w-140  h-24 flex flex-row items-center justify-center">
              {/* <div className="bg-background_overlay10 px-[6px] py-[2px] w-[45px] h-[28px] text-content_primary rounded-[4px]">
                Max
              </div> */}

              <div
                className="flex flex-row ml-8 items-center"
                onClick={showUSDC}
              >
                {token ? (
                  <img
                    src={curTokenInfo.icon}
                    className="h-16 w-16"
                    style={{ objectFit: "contain" }}
                  />
                ) : null}
                <div className="ml-4 mr-4 text-content_primary body-l-bold">
                  {token}
                </div>
                {token ? (
                  <img
                    src={require("../../../../assets/icon/chevron_down.svg")}
                    className="h-16 w-16"
                    style={{ objectFit: "contain" }}
                  />
                ) : null}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center ">
            <img
              src={require("../../../../assets/icon/wallet.svg")}
              className="h-12 w-12"
              style={{ objectFit: "contain" }}
            />
            <div className="text-content_tertiary ml-5 body-m-regular">
              {blData?.balance}
            </div>
          </div>
        </div>
        {store.rewardsError ? (
          <div className="text-feedback_error">{store.rewardsErrorValue}</div>
        ) : null}

        <div
          className={cn(
            "bg-background_overlay10 px-8 py-12 mt-24 rounded-8",
            store.amountError
              ? "border-[2px] border-feedback_error border-solid"
              : ""
          )}
        >
          <div className="text-content_secondary body-m-regular">
            Task Quota
          </div>
          <div className="px-6 py-2 text-content_primary rounded-4 flex flex-1 flex-row items-center">
            <Input
              placeholder="Amount"
              className="body-xl-bold flex flex-1"
              onChange={amountChange}
              onFocus={() => store.onTheFocus("AMOUNT")}
              onBlur={() => store.onTheFocus("AMOUNT")}
            />
            <div className="text-content_tertiary body-l-regular">Users</div>
          </div>
          <div className="flex flex-row text-content_tertiary whitespace-nowrap overflow-ellipsis overflow-hidden body-s-regular">
            Reward per follow:
            <div className="ml-[4px] mr-[4px] flex flex-row text-content_primary whitespace-nowrap overflow-ellipsis overflow-hidden body-s-bold">
              <div className="ml-[4px] text-content_primary whitespace-nowrap overflow-ellipsis overflow-hidden body-s-bold">
                {store.amountMinValue}
              </div>
              USDC
            </div>
          </div>
        </div>
        {store.amountError ? (
          <div className="text-feedback_error">Min 0.1</div>
        ) : null}
      </div>

      <div
        className={cn(
          "flex flex-row items-center justify-center mb-45 rounded-8 body-l-regular mt-150",
          store.disableBtn
            ? "text-button_pri_disabled_bg"
            : "text-button_pri_default_con",
          store.disableBtn
            ? "bg-background_overlay10"
            : "bg-button_pri_default_bg"
        )}
        onClick={onPreview}
      >
        Preview
      </div>
    </div>
  );
});
const QuestCreateFrom = QuestCreateFromOrg;

export { QuestCreateFrom };
