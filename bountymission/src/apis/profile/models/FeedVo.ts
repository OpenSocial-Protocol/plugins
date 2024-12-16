import type { WishVo } from "./WishVo";
import type { QuestVo } from "./QuestVo";

 export const feedVoType = {
    "WISH": "WISH",
    "REFERRAL": "REFERRAL",
    "QUEST": "QUEST"
} as const;
export type FeedVoType = (typeof feedVoType)[keyof typeof feedVoType];
export const feedVoStatus = {
    "ACTIVE": "ACTIVE",
    "OFFERED": "OFFERED",
    "CLOSED": "CLOSED",
    "FINISHED": "FINISHED",
    "EXPIRED": "EXPIRED"
} as const;
export type FeedVoStatus = (typeof feedVoStatus)[keyof typeof feedVoStatus];
export type FeedVo = {
    /**
     * @type object | undefined
    */
    wish?: WishVo;
    /**
     * @description onchain wish_id or quest_id
     * @type string | undefined
    */
    onChainId?: string;
    /**
     * @type object | undefined
    */
    referral?: WishVo;
    /**
     * @description created timestamp
     * @type integer | undefined, int64
    */
    created?: number;
    /**
     * @description osp profileId_contentId
     * @type string | undefined
    */
    bizId?: string;
    /**
     * @description offchain wish_id or quest_id
     * @type string | undefined
    */
    id?: string;
    /**
     * @description wish or quest
     * @type string | undefined
    */
    type?: FeedVoType;
    /**
     * @type object | undefined
    */
    quest?: QuestVo;
    /**
     * @description Status
     * @type string | undefined
    */
    status?: FeedVoStatus;
};