import { IActionContext, Storyboard } from "../stores/types";

export type ActionPageState = {
  onCallBack: (action: IActionContext) => void;
  isNextScene: boolean;
  action?: IActionContext;
};

export type CreatePageState = {
  isNextScene: boolean;
  onCallBack: (data: IActionContext) => void;
  storyboardData?: Storyboard;
};

// for canvas imgUrl  callback
export type ImageState = {
  onCallBack: (imgUrl: string) => void;
};

export type MintNftState = {
  onCallBack: (zoraUrl: string) => void;
  action: IActionContext;
};
