import { Currency } from "@keccak256-evg/zeek-client";
import React from "react";
import { dp2px } from "@app/pluginUi/utils/parse/commonUtils";

interface CurrencyListViewProps {
  tokenList: Currency[];

  onClick: (item: Currency) => void;
  selected: string;
}
export default function CurrencyListView(props: CurrencyListViewProps) {
  const { tokenList, onClick, selected } = props;

  const ItemView = (info: { item: Currency }) => {
    const { item } = info;
    return (
      <div
        className="flex flex-row py-8 justify-between"
        onClick={() => {
          onClick(item);
        }}
      >
        <div className="flex flex-row  items-center justify-center">
          <div>
            <img
              src={item?.icon}
              className="h-26 w-26"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="text-content_primary ml-8 body-m-regular">
            {item.symbol}
          </div>
        </div>
        {selected === item.symbol ? (
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
    <div
      style={{
        overflowY: "auto",
        maxHeight: dp2px(200),
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {tokenList &&
        tokenList.map((item) => {
          return <ItemView item={item} key={item?.symbol} />;
        })}
    </div>
  );
}
