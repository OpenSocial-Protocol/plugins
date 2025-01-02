import type { FriendApplyRemark } from "./FriendApplyRemark";

 export const friendVoStatus = {
    "pending": "pending",
    "added": "added",
    "rejected": "rejected",
    "processing": "processing",
    "expired": "expired",
    "failed": "failed"
} as const;
export type FriendVoStatus = (typeof friendVoStatus)[keyof typeof friendVoStatus];
export type FriendVo = {
    /**
     * @description 最近一条申请备注 列表有 详情没有
     * @type string | undefined
    */
    applyRemark?: string;
    /**
     * @description 签名 pending/failed状态返回
     * @type string | undefined
    */
    signature?: string;
    /**
     * @description 申请备注 最近20条 详情返回
     * @type array | undefined
    */
    applyRemarks?: FriendApplyRemark[];
    /**
     * @description 好友id
     * @type string | undefined
    */
    customerId?: string;
    /**
     * @description 好友昵称
     * @type string | undefined
    */
    name?: string;
    /**
     * @description 申请人ChainProfileId  pending/failed状态返回
     * @type string | undefined
    */
    applyChainProfileId?: string;
    /**
     * @description 好友头像
     * @type string | undefined
    */
    avatar?: string;
    /**
     * @description 申请时间
     * @type integer | undefined, int64
    */
    applyTime?: number;
    /**
     * @description deadline 单位秒 pending/failed状态返回
     * @type integer | undefined, int32
    */
    deadline?: number;
    /**
     * @description 好友状态
     * @type string | undefined
    */
    status?: FriendVoStatus;
};