import SubmitButton from "@app/pluginUi/component/Button/Button";
import {
  useCacheLocation,
  useCustomNavigate,
} from "@app/pluginUi/hook/useCustomLocation";
import { Input } from "antd";
import { observer } from "mobx-react";
import { MintNftState } from "../type";
import { matchZoralNftUrl } from "@app/pluginUi/utils/parse/parseZoralNft";
import { useState } from "react";
import { MintNft } from "@app/pluginUi/stores/types";

function MintNft() {
  const navigate = useCustomNavigate();
  const location = useCacheLocation();
  const { onCallBack, action } = (location.state || {}) as MintNftState;
  console.log("action", { action, onCallBack });

  const url = (action?.data as MintNft)?.zoraUrl ?? "";
  const [inputValue, setInputValue] = useState(url);
  const [match, setMatch] = useState(true);

  //   https://testnet.zora.co/collect/bsep:0x8c323439e243afe55554a1ea5eb8e349bc75a965/1
  const paste = async () => {
    try {
      const data = await navigator.clipboard.readText();
      handleInput(data);
    } catch (e) {
      console.error("Could not paste", e.message);
    }
  };
  const handleInput = (input: string) => {
    const match = matchZoralNftUrl(input);
    setInputValue(input);
    setMatch(match);
  };

  const submitNft = () => {
    onCallBack(inputValue);
    navigate(-1);
  };
  return (
    <div className="flex flex-col w-full h-full px-16 mt-8  ">
      <div className="h-full flex-1 flex-col  flex  ">
        <div className="text-left align-middle text-14 font-SF Pro Display font-normal leading-21 whitespace-nowrap text-[#a0a0a0] inline-flex">
          Paste the NFT collection URL for user to mint
        </div>

        <Input
          className="rounded-16 flex flex-row mt-8 h-56 bg-[#252525] text-14 font-SF Pro Display font-normal  whitespace-nowrap text-[#FEFEFE] placeholder-[#A1A1A1] focus:border-[#FEFEFE] focus:border-2 blur-[#252525] px-12"
          placeholder="Zora URL"
          status={match ? "" : "error"}
          value={inputValue}
          onChange={(data) => {
            handleInput(data.target.value);
          }}
          style={{
            maxLines: 1,
            backgroundColor: "#252525",
          }}
          suffix={
            <div
              className=" text-left text-12 font-SF Pro Display font-bold leading-18  text-[#97de44]"
              onClick={paste}
            >
              Paste
            </div>
          }
        />
        {!match && inputValue && (
          <div className="text-left align-middle text-12 font-SF Pro Display font-normal leading-18 whitespace-nowrap text-[#ff6868]">
            Invalid Zora URL
          </div>
        )}
      </div>
      <div className="mb-24">
        <SubmitButton
          content="Done"
          onClick={submitNft}
          enable={match && !!inputValue}
        />
      </div>
    </div>
  );
}

export default observer(MintNft);
