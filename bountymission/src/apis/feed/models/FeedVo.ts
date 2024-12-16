import type { WishVo } from "./WishVo";
import type { QuestVo } from "./QuestVo";

 export const feedVoType2 = {
    "WISH": "WISH",
    "REFERRAL": "REFERRAL",
    "QUEST": "QUEST"
} as const;
export type FeedVoType2 = (typeof feedVoType2)[keyof typeof feedVoType2];
export const feedVoStatus2 = {
    "ACTIVE": "ACTIVE",
    "OFFERED": "OFFERED",
    "CLOSED": "CLOSED",
    "FINISHED": "FINISHED",
    "EXPIRED": "EXPIRED"
} as const;
export type FeedVoStatus2 = (typeof feedVoStatus2)[keyof typeof feedVoStatus2];
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
    type?: FeedVoType2;
    /**
     * @type object | undefined
    */
    quest?: QuestVo;
    /**
     * @description Status
     * @type string | undefined
    */
    status?: FeedVoStatus2;
};