"use client";

// import Twitter from "@app/pluginUi/public/images/twitter_icon.svg";
import "./from.css";

import { CreateStore, OspStore, useStore } from "@app/pluginUi/stores";
import { Currency, WishActivityExtension } from "@keccak256-evg/zeek-client";
import { Input, Select, Space } from "antd";
import {
  getDeadLineTime,
  getStartTime,
} from "@app/pluginUi/utils/parse/commonUtils";
import { useCacheLocation, useCustomNavigate } from "@app/pluginUi/hook";
import { useEffect, useRef, useState } from "react";

import { ConfigManager } from "@app/config/configManager";
import { ContractAction } from "@app/pluginUi/utils/constance/contractAction";
import CurrencyListView from "./CurrencyListView";
import LoadingView from "@app/pluginUi/component/Loading/LoadingView";
import classNames from "classnames";
import { cn } from "@app/pluginUi/utils";
import modal from "@app/pluginUi/utils/modal";
import { observer } from "mobx-react";
import useBalance from "../hooks/useBalance";
import { useGetQuestTokenRestrict } from "../hooks/useGetQuestTokenRestrict";
// import useChainConfig from "../hooks/chainInfo";
import useGetWishConfig from "../hooks/useGetWishConfig";

const QuestCreateFromOrg = observer(() => {
  const { navigate } = useCustomNavigate();
  const location = useCacheLocation();
  const store = useStore<CreateStore>("createStore");
  const ospStore = useStore<OspStore>("ospStore");
  const zeekClient = ospStore.zeekClient;
  const address = ospStore.aaAddress;
  const [token, setToken] = useState<string>();
  const [tokenList, setTokenList] = useState<Currency[]>([]);
  const [curTokenInfo, setTokenInfo] = useState<Currency>();
  const [isShowCurrentModal, setShowCurrentModal] = useState(false);
  const popRef = useRef(null);
  const popTriggerRef = useRef(null);
  console.log("env-->", process.env.PROXY_TARGET_ENV);
  const { data: tokenConfig, isLoading: isConfigLoading } = useGetWishConfig(
    token || "USDT",
    zeekClient
  );
  const [bottomModalVisible, setBottomModalVisible] = useState(false);

  const { data: questRestrict, isLoading: isQuestRestrictLoading } =
    useGetQuestTokenRestrict(token, zeekClient);

  // 最小发行 token 数量
  const minIssueTokensValue = tokenConfig?.minIssueTokens?.valueStr;

  const rewardInputRef = useRef(null);
  const {
    data: blData,
    isLoading,
    onRefresh: refetchBalance,
  } = useBalance(address, zeekClient, token);

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
      questRestrict,
      curTokenInfo?.showDecimals || 8
    );
  }, [blData, minIssueTokensValue, questRestrict]);

  useEffect(() => {
    if (!rewardInputRef.current?.input) {
      return;
    }
    const value = rewardInputRef.current?.input?.value;
    store.onChange("REWARDS", value);
  }, [blData]);

  useEffect(() => {
    /** web 项目 */
    if (isShowCurrentModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isShowCurrentModal]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popRef.current &&
      !popRef.current.contains(event.target) &&
      !popTriggerRef?.current.contains(event.target)
    ) {
      setShowCurrentModal(false);
    }
  };

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
    if (ConfigManager.getInstance().mode === "card") {
      setShowCurrentModal(true);
      return;
    }
    modal.popShow({
      children: <CurrencyView />,
    });
    setBottomModalVisible(true);
  };
  const showClose = () => {
    modal.popHidden();
    setBottomModalVisible(false);
  };

  const onPreview = async () => {
    if (store.disableBtn) return;
    navigate("/questPreview");
  };

  const formatPositiveNumber = (value: string | number): string => {
    let _value = String(value);
    const regExp = /^(?!0\d)\d*(?:\.\d{0,5})?$/;
    if (_value.startsWith(".")) {
      _value = "";
    }
    return regExp.test(_value) ? _value : _value.slice(0, -1);
  };

  const formatInteger = (value: string | number): string => {
    let _value = String(value);
    // 使用正则表达式验证输入，确保只接受不以0开头的整数，并且不允许输入 0. 或 0.x
    const regExp = /^(?!0$)(?!0\d)\d*$/;
    if (_value.startsWith(".")) {
      _value = "";
    }
    return regExp.test(_value) ? _value : _value.slice(0, -1);
  };
  const CurrencyView = () => {
    const ItemView = (info: { item: Currency }) => {
      const { item } = info;
      return (
        <div
          className="flex flex-row h-64  justify-between mr-16"
          onClick={() => {
            setToken(item.symbol);
            setTokenInfo(item);
            store.onSetToken(item.symbol);
            store.clearRewardsError();
            showClose();
          }}
        >
          <div className="flex flex-row  items-center justify-center">
            <div>
              <img
                src={item?.icon}
                className="h-32 w-32"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="text-content_primary ml-8 body-l-regular">
              {item.symbol}
            </div>
          </div>
          {store.token === item.symbol ? (
            <div className="flex items-center justify-center">
              <img
                src={require("../../../../assets/icon/checked.svg")}
                className="h-18 w-18"
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
        <div className="h-300 w-full bg-background_secondary px-16 pt-24 pb-16">
          <div className="flex flex-row justify-between">
            <div className="text-content_primary headline-h6">
              Select currency
            </div>
            <div className="w-32 h-32" onClick={showClose}>
              <img
                src={require("../../../../assets/icon/clse.svg")}
                className="h-12 w-12"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="mt-24">
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
    <div className="flex w-full flex-1">
      <div
        className={classNames("flex flex-col w-full flex-1", {
          "mb-150": true,
          "overflow-auto": ConfigManager.getInstance().mode === "page",
        })}
      >
        <div className="text-content_tertiary body-m-regular mt-24">
          Your X Account
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
            maxLength={15}
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
            Number of Winners
          </div>
          <div className="flex flex-row items-center mt-8 justify-between">
            <div className="w-full h-full">
              <Input
                ref={rewardInputRef}
                placeholder={`Min ${
                  isConfigLoading ? "--" : minIssueTokensValue
                }`}
                className="body-xl-bold text-content_primary px-0"
                value={store.rewardsStr}
                maxLength={11}
                onChange={rewardsChange}
                onFocus={() => store.onTheFocus("REWARDS")}
                onBlur={() => store.onTheFocus("REWARDS")}
                onInput={(e) => {
                  const value = e.currentTarget.value;
                  e.currentTarget.value = formatPositiveNumber(value);
                }}
              />
            </div>
            <div className="w-140  h-24 flex flex-row items-center justify-center">
              {/* <div className="bg-background_overlay10 px-[6px] py-[2px] w-[45px] h-[28px] text-content_primary rounded-[4px]">
                Max
              </div> */}

              <div className="flex flex-row ml-8 items-center relative">
                <div
                  ref={popTriggerRef}
                  className="flex flex-row items-center"
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
                      className={`h-16 w-16 ${
                        isShowCurrentModal || bottomModalVisible
                          ? "rotated"
                          : "rotate-back"
                      }`}
                      style={{ objectFit: "contain" }}
                    />
                  ) : null}
                </div>

                {isShowCurrentModal && (
                  <div
                    ref={popRef}
                    className="w-180 bg-background_secondary rounded-12 p-12"
                    style={{
                      zIndex: 1,
                      position: "absolute",
                      top: 30,
                      right: 0,
                    }}
                  >
                    <CurrencyListView
                      tokenList={tokenList}
                      onClick={(item: Currency) => {
                        setToken(item.symbol);
                        setTokenInfo(item);
                        store.onSetToken(item.symbol);
                        store.clearRewardsError();
                        setShowCurrentModal(false);
                      }}
                      selected={store.token}
                    />
                  </div>
                )}
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
              ? "border-2 border-feedback_error border-solid"
              : ""
          )}
        >
          <div className="text-content_secondary body-m-regular">
            Task Quota
          </div>
          <div className="py-2 text-content_primary rounded-4 flex flex-1 flex-row items-center">
            <Input
              placeholder="0"
              maxLength={5}
              type="digit"
              value={store.amountStr}
              className="body-xl-bold flex flex-1 px-0"
              onChange={amountChange}
              onFocus={() => store.onTheFocus("AMOUNT")}
              onBlur={() => store.onTheFocus("AMOUNT")}
              onInput={(e) => {
                const value = e.currentTarget.value;
                e.currentTarget.value = formatInteger(value);
              }}
            />
            <div className="text-content_tertiary body-l-regular">Users</div>
          </div>
          <div className="flex flex-row text-content_tertiary whitespace-nowrap overflow-ellipsis overflow-hidden body-s-regular">
            Reward per follow:
            <div className="ml-4 mr-4 flex flex-row text-content_primary whitespace-nowrap overflow-ellipsis overflow-hidden body-s-bold">
              <div className="ml-4 text-content_primary whitespace-nowrap overflow-ellipsis overflow-hidden body-s-bold">
                {store.perReward} {` `} {token}
              </div>
              {store.amountStr && store.rewardsStr && (
                <div className="body-s-regular whitespace-pre">{` (min ${store.amountMinValue})`}</div>
              )}
            </div>
          </div>
        </div>
        {store.amountError ? (
          <div className="text-feedback_error">{store.amountErrorValue}</div>
        ) : null}
      </div>
      {ConfigManager.getInstance().mode === "card" ? null : <Space />}

      <div
        className={cn(
          "fixed bottom-0 mb-24 flex mx-auto h-56 rounded-12 items-center z-100 justify-center headline-h8 font-obviously_variable",
          store.disableBtn
            ? "bg-button_pri_disabled_bg"
            : "bg-button_pri_default_bg",
          ConfigManager.getInstance().mode === "card" ? "w-full" : "w-360"
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
