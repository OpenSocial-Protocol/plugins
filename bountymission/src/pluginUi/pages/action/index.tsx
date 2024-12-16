import ActionTypeButton from "@app/pluginUi/component/Action/ActionTypeButton";
import { observer } from "mobx-react";
import {
  useCacheLocation,
  useCustomNavigate,
} from "@app/pluginUi/hook/useCustomLocation";
import { ActionPageState, CreatePageState, MintNftState } from "../type";
import { useState } from "react";
import { Input } from "antd";
import SubmitButton from "@app/pluginUi/component/Button/Button";
import {
  IActionContext,
  MintNft,
  Restart,
  Storyboard,
} from "@app/pluginUi/stores/types";
import { toJS } from "mobx";

function Action() {
  const navigate = useCustomNavigate();
  const location = useCacheLocation();
  const {
    isNextScene = false,
    onCallBack,
    action,
  } = (location.state || {}) as ActionPageState;

  const [curAction, SetAction] = useState(action);
  const [title, SetTitle] = useState(curAction?.name);

  const nextSenceSelected =
    !!(curAction?.data as Storyboard)?.img &&
    (curAction?.data as Storyboard)?.actions.length > 0;

  const nftSelected =
    curAction?.type === "MINT"
      ? !!(curAction?.data as MintNft)?.zoraUrl
      : false;
  const restartSelected = !!(curAction?.data as Restart)?.status;

  const handleChange = (input) => {
    SetTitle(input);
  };

  const gotoEditNextSence = () => {
    const state: CreatePageState = {
      onCallBack: (action) => {
        SetAction(action);
      },
      isNextScene: true,
      storyboardData: toJS(action?.data as Storyboard),
    };
    navigate("/create", { state: state });
  };

  const setMintNft = (zoraUrl: string) => {
    const actionData: IActionContext = {
      ...action,
      type: "MINT",
      data: {
        zoraUrl,
      },
    };
    SetAction(actionData);
  };

  const gotoEditMintNft = () => {
    const state: MintNftState = {
      onCallBack: (zoralUrl: string) => {
        setMintNft(zoralUrl);
      },
      action: action,
    };

    navigate("/mintNft", { state: state });
  };

  const setRestart = () => {
    const actionData: IActionContext = {
      ...action,
      type: "RESTART",
      data: {
        status: true,
      },
    };
    SetAction(actionData);
  };

  const submitActionData = () => {
    const actionData: IActionContext = {
      ...curAction,
      name: title,
    };
    onCallBack(actionData);
    navigate(-1);
  };

  const actionStatus =
    (!!(curAction?.data as MintNft)?.zoraUrl ||
      (!!(curAction?.data as Storyboard)?.img &&
        (curAction?.data as Storyboard)?.actions?.length > 0) ||
      (curAction?.data as Restart)?.status) &&
    !!title;

  return (
    <div className="flex flex-col w-full h-full px-16">
      <div className="flex flex-1 w-full flex-col">
        <div className="w-full flex flex-col h-85">
          <div className="text-left align-middle text-14 font-SF Pro Display font-normal leading-21 whitespace-nowrap text-[#c5c5c5]">
            Add button text
          </div>
          <Input
            className="w-full rounded-16 flex flex-row mt-8 h-56 bg-[#252525] text-14 font-SF Pro Display font-normal  whitespace-nowrap text-[#FEFEFE] placeholder-[#A1A1A1] focus:border-[#FEFEFE] focus:border-2 blur-[#252525] px-12"
            placeholder="Button text"
            maxLength={15}
            value={title}
            onChange={(data) => handleChange(data.target.value)}
            style={{
              maxLines: 1,
              backgroundColor: "#252525",
            }}
          />
        </div>
        <div className="w-full flex flex-col mt-24 h-298">
          <div className="w-full text-left align-middle text-14 font-SF Pro Display font-normal leading-21 whitespace-nowrap placeholder-[#c5c5c5] text-[#ffffff]">
            Choose the action for the button
          </div>
          <div className="w-full flex flex-col mt-8 h-269">
            {!isNextScene && (
              <ActionTypeButton
                title="To next scene"
                content="Move to the next scene with an image"
                onClick={gotoEditNextSence}
                selected={nextSenceSelected}
              />
            )}

            <ActionTypeButton
              title="Mint NFT"
              content="Select an NFT collection to mint using Zora"
              selected={nftSelected}
              onClick={gotoEditMintNft}
            />

            <ActionTypeButton
              title="Restart"
              content="Go back to the initial scene and start over"
              selected={restartSelected}
              canEdit={false}
              onClick={setRestart}
            />
          </div>
        </div>
      </div>
      <div className="mb-24">
        <SubmitButton
          content="Done"
          onClick={submitActionData}
          enable={actionStatus}
        />
      </div>
    </div>
  );
}

export default observer(Action);
