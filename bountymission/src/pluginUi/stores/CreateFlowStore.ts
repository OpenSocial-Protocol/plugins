import { makeAutoObservable, toJS } from "mobx";
import { IActionContext, MintNft, Storyboard } from "./types";
import { find, findIndex } from "lodash";
import {
  TCreatePluginInfo,
  TPluginTemplate,
} from "@open-social-protocol/osp-plugin-api-types";

class CreateFlowStore {
  storyboardData: Storyboard;
  isNextSence: boolean;

  constructor(isNextSence: boolean, storyboardData?: Storyboard) {
    this.storyboardData = storyboardData || {};
    this.isNextSence = isNextSence;
    makeAutoObservable(this);
  }

  setImg(imgUrl?: string, file?: File) {
    this.storyboardData.img = imgUrl;
  }

  getAction(position: number) {
    const action = find(this.storyboardData.actions, {
      position,
    });
    return action;
  }

  setActions(action: IActionContext, position: number) {
    if (typeof action.position !== "number") {
      throw Error("action position null error");
    }
    if (this.storyboardData.actions === undefined) {
      this.storyboardData.actions = [];
    }
    const index = findIndex(this.storyboardData.actions, {
      position,
    });

    if (index > -1) {
      this.storyboardData.actions[index] = action;
    } else {
      this.storyboardData.actions = [...this.storyboardData.actions, action];
    }
  }

  removeAction(position: number) {
    const index = findIndex(this.storyboardData.actions, {
      position,
    });
    if (index > -1) {
      this.storyboardData.actions.splice(index, 1);
      this.resortAction(position);
    }
  }

  private resortAction(position: number) {
    this.storyboardData.actions?.forEach((action, index) => {
      if (action?.position > position) {
        this.storyboardData.actions[index].position - 1;
      }
    });
  }

  get isDataReady() {
    return !!this.storyboardData.img && this.storyboardData.actions?.length > 0;
  }

  toSenceData() {
    if (this.isNextSence && this.isDataReady) {
      return {
        type: "NEXT",
        data: toJS(this.storyboardData),
      } as IActionContext;
    }
    return null;
  }

  toCreatePreviewInfo(id: string): TCreatePluginInfo {
    if (this.isDataReady) {
      const preview: TPluginTemplate = {
        type: "imgWithBtns",
        data: {
          media: {
            type: "image",
            url: this.storyboardData.img,
            width: 329,
            height: 44,
          },
          buttons: this.storyboardData.actions.map((action) => action.name),
        }
      };
      const extensionCode = {
        skuid: id,
      };
      return {
        preview: preview,
        // extensionData: ,
      };
    }
    return null;
  }

  transfer(map: Map<string, string>) {
    if (this.isDataReady) {
      const newData = this.storyboardData.actions.map((curAction) => {
        if (curAction.type === "NEXT") {
          const board = curAction.data as Storyboard;
          const actions = board.actions.map((action) => {
            return {
              name: action.name,
              type: action.type,
              value:
                action.type === "MINT"
                  ? (action.data as MintNft).zoraUrl
                  : null,
            };
          });
          return {
            name: curAction.name,
            type: curAction.type,
            value: JSON.stringify({
              img: map.get(board.img),
              actions: actions,
            }),
          };
        }
        return {
          name: curAction.name,
          type: curAction.type,
          value:
            curAction.type === "MINT"
              ? (curAction.data as MintNft).zoraUrl
              : null,
        };
      });
      return {
        img: map.get(this.storyboardData.img),
        actions: newData,
      };
    }
    return null;
  }
}

export default CreateFlowStore;
