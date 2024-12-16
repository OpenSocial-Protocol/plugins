import ActionButtonGroup from "@app/pluginUi/component/Action/ActionButtonGroup";
import ImageContent from "@app/pluginUi/component/ImageContent";
import {
  useCacheLocation,
  useCustomNavigate,
} from "@app/pluginUi/hook/useCustomLocation";
import {
  IActionContext,
  MintNft,
  Storyboard,
} from "@app/pluginUi/stores/types";
import { observer } from "mobx-react";

function Preview() {
  const navigate = useCustomNavigate();
  const location = useCacheLocation();
  const storyboard = location.state as Storyboard;
  console.log("Preview", { storyboard });

  const gotoPreviewAction = (index) => {
    const action = storyboard.actions[index] as IActionContext;
    if (action.type === "MINT") {
      const state = {
        zoraUrl: (action?.data as MintNft)?.zoraUrl,
        imgUrl: storyboard.img,
      };
      navigate("/nftDetail", { state: state });
    } else if (action.type === "NEXT") {
      const state = {
        imgUrl: (action?.data as Storyboard)?.img,
        actions: (action?.data as Storyboard)?.actions,
      };
      navigate("/preview", { state: state });
    } else {
      //  restart ignore action
    }
  };
  return (
    <div className="w-full h-full flex flex-col mt-8 px-16">
      <div className="bg-[#252525] rounded-16  flex flex-col">
        <div className="w-full flex flex-col p-8">
          <ImageContent imgUrl={storyboard.img} mode="preview" />
          <ActionButtonGroup
            mode="interaction"
            onActionClick={(index) => gotoPreviewAction(index)}
            actions={storyboard.actions}
          />
        </div>
      </div>
    </div>
  );
}

export default observer(Preview);
