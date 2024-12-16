export type MintNft = {
  zoraUrl?: string;
};

export type Restart = {
  status?: boolean;
};

// common action 数据结构
export type IActionContext = {
  name?: string;
  type?: "NEXT" | "MINT" | "RESTART";
  data?: Storyboard | MintNft | Restart;
  position?: number;
};

export type Storyboard = {
  img?: string;
  actions?: IActionContext[];
};

export enum TQuestEnum {
  // start = "start",
  // end = "end",
  // refund = "refund",
  Initial = "Initial", // 没有链上信息
  Pending = "Pending", // 链上信息不完整
  Active = "Active",
  Finished = "Finished", // 结束
  Closed = "Closed", // 关闭
}

export type TQuestType = keyof typeof TQuestEnum;

export type TDetailTypeMap = {
  [key in TQuestType]: string;
};

export enum TQuestRoleEnmu {
  Audience = "", // 路人视角
  OWNER = "OWNER", // 发布者
  PARTICIPANT_CLAIMED = "PARTICIPANT_CLAIMED", // 已参与已领奖
  PARTICIPANT_UNCLAIM = "PARTICIPANT_UNCLAIM", // 已参与未领奖
}
export type TQuestRoleType = keyof typeof TQuestRoleEnmu;
