import { useEffect, useMemo, useState } from "react";
import SubmitButton from "../../component/Button/Button";
import ActionButtonGroup from "../../component/Action/ActionButtonGroup";
import { IActionContext, Storyboard } from "@app/pluginUi/stores/types";
import {
  useCacheLocation,
  useCustomNavigate,
} from "@app/pluginUi/hook/useCustomLocation";
import { ActionPageState, CreatePageState, ImageState } from "../type";
import { observer } from "mobx-react";
import CreateFlowStore from "@app/pluginUi/stores/CreateFlowStore";
import { useMemoizedFn } from "ahooks";

import ImageContent from "@app/pluginUi/component/ImageContent";
import { toJS } from "mobx";
import { ContractAction } from "@app/pluginUi/utils/constance/contractAction";
import usePostMessage from "@app/pluginUi/hook/usePostMessage";
// import { useGetRequest, usePostRequest } from "@app/pluginUi/hook/useRequest";
import request from "@app/pluginUi/api";
import storeImg from "@app/pluginUi/stores/StoreFile";
import action from "../action";

export const SourceType = {
  Canvas: "canvas",
  Album: "album",
};

function Create() {
  const navigate = useCustomNavigate();
  const location = useCacheLocation();
  const [imgSource, setImgSource] = useState(null);

  const postMessage = usePostMessage();

  const {
    isNextScene = false,
    onCallBack,
    storyboardData,
  } = (location.state || {}) as CreatePageState;

  useEffect(() => {
    document.body.style.backgroundColor = "#0a0a0a";
    const getData = async () => {
      try {
        const response = await request.get<Storyboard>("/storyboard/get", {
          params: {
            id: "d2b87f59-a925-42eb-bd1a-bd866d8a8859",
          },
        });
        console.log("/storyboard/get-->", response.data);
      } catch (err) {
        console.log("/storyboard/get-->error", err);
      }
    };
    getData();
  }, []);

  const createFlowStore = useMemo(() => {
    return new CreateFlowStore(isNextScene, storyboardData);
  }, []);

  const initialActions = createFlowStore.storyboardData?.actions ?? [{}, {}];

  const [actions, setActions] = useState<IActionContext[]>(initialActions);

  const [imgUrl, setImgUrl] = useState(createFlowStore.storyboardData.img);

  const setAction = useMemoizedFn(
    (action: IActionContext, position: number) => {
      createFlowStore.setActions(action, position);
      setActions(
        actions.map((item, index) => (index === position ? action : item))
      );
    }
  );

  // const map = new Map<string, File>();

  const handleChange = async ({ file }) => {
    if (file.status === "uploading") {
      const url = URL.createObjectURL(file.originFileObj);
      setImgUrl(url);
      setImgSource(SourceType.Album);
      createFlowStore.setImg(url);
      storeImg[url] = file.name;
    }
  };

  const clearEdit = () => {
    setImgUrl(null);
    setImgSource(null);
  };

  const previewStoryboard = () => {
    const state = toJS(createFlowStore.storyboardData);
    navigate("/preview", { state: state });
  };

  const gotoCanvas = () => {
    console.log("gotoCanvas");
    const state: ImageState = {
      onCallBack: (imgUrl) => {
        setImgUrl(imgUrl);
        setImgSource(SourceType.Canvas);
      },
    };
    navigate("/canvas", { state: state });
  };

  const createStoryboard = async () => {
    if (isNextScene) {
      const senceData = createFlowStore.toSenceData();
      onCallBack(senceData);
      navigate(-1);
    } else {
      postStoryboard();
    }
  };

  async function postStoryboard() {
    // 先批量上传图片，再创建 storyboard
    const map = new Map<string, string>();
    const imgs = createFlowStore.storyboardData.actions
      .filter((action) => action.type === "NEXT")
      .map((action) => {
        const board = action.data as Storyboard;
        return board.img;
      });
    imgs.push(createFlowStore.storyboardData.img);
    const promise = imgs.map(async (img) => {
      const file = new File([img], storeImg[img], {
        type: "image/*",
      });
      const formData = new FormData();
      formData.append("file", file);
      const response = await request.post<string>(
        "/storyboard/upload",
        formData
      );
      map.set(img, response.data);
    });
    await Promise.all(promise);
    const data = createFlowStore.transfer(map);
    // console.log("createStoryboard", JSON.stringify(data));
    const createResponse = await request.post<string>(
      "/storyboard/create",
      data
    );
    const creatId = createResponse.data;
    // console.log("createStoryboard finished", JSON.stringify(creatId));
    const preview = createFlowStore.toCreatePreviewInfo(creatId);
    // console.log("createStoryboard finished", JSON.stringify(preview));
    postMessage(ContractAction.pluginCreated, preview);
  }

  const gotoEditAction = (position: number, action: IActionContext) => {
    const state: ActionPageState = {
      onCallBack: (action) => {
        setAction({ ...action, position }, position);
      },
      isNextScene: isNextScene,
      action: toJS(createFlowStore.getAction(position)),
    };
    navigate("/action", {
      state: state,
    });
  };

  return (
    <div className="flex flex-col w-full h-full px-16 bg-[#252525]">
      <div className="flex flex-1 w-full flex-col">
        <div className="flex-1  rounded-tl-24 rounded-tr-24">
          <div className="w-full  rounded-16 p-12 flex flex-col ">
            <div className="w-full flex flex-col ">
              <div className="w-full flex flex-col">
                <div className="text-left align-middle text-14 font-SF Pro Display font-normal leading-21 whitespace-nowrap text-[#c5c5c5]">
                  Choose your image
                </div>
                <ImageContent
                  imgUrl={imgUrl}
                  imgSource={imgSource}
                  onClear={clearEdit}
                  onUpload={handleChange}
                  onDraw={gotoCanvas}
                />
              </div>
              <div className="w-full flex flex-col mt-24 ">
                <div className="text-left align-middle text-14 font-SF Pro Display font-normal leading-21 whitespace-nowrap text-[#c5c5c5]">
                  sssssssss
                </div>
                <ActionButtonGroup
                  actions={actions}
                  mode="edit"
                  onActionClick={(index, action) =>
                    gotoEditAction(index, action)
                  }
                  onAddActionClick={() => {
                    setActions([...actions, {}]);
                  }}
                  addButtonText="Add Action"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 w-full flex-row fixed-bottom">
        <div className="flex flex-row  h-56 space-x-9  ">
          {!isNextScene && (
            <SubmitButton
              enable={createFlowStore.isDataReady}
              content="Preview"
              type="gray"
              onClick={previewStoryboard}
            />
          )}
          <SubmitButton
            enable={createFlowStore.isDataReady}
            onClick={createStoryboard}
            content="Done"
          />
        </div>
      </div>
    </div>
  );
}
export default observer(Create);
