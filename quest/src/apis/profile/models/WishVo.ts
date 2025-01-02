import type { WishVoReward } from "./WishVoReward";
import type { ApplyVo } from "./ApplyVo";
import type { WishVoProfile } from "./WishVoProfile";
import type { TokenValueVo } from "./TokenValueVo";

 export const wishVoRole = {
    "OWNER": "OWNER",
    "POSTER": "POSTER",
    "UNLOCKER": "UNLOCKER",
    "ANSWERER": "ANSWERER",
    "STRANGER": "STRANGER"
} as const;
export type WishVoRole = (typeof wishVoRole)[keyof typeof wishVoRole];
export type WishVo = {
    /**
     * @type object | undefined
    */
    reward?: WishVoReward;
    /**
     * @type array | undefined
    */
    applys?: ApplyVo[];
    /**
     * @type string | undefined
    */
    backgroundColor?: string;
    /**
     * @type string | undefined
    */
    role?: WishVoRole;
    /**
     * @description 是否已申请
     * @type boolean | undefined
    */
    applied?: boolean;
    /**
     * @type array | undefined
    */
    appliers?: string[];
    /**
     * @description created timestamp
     * @type integer | undefined, int64
    */
    created?: number;
    /**
     * @description participant count
     * @type integer | undefined, int64
    */
    participateCount?: number;
    /**
     * @description apply count
     * @type integer | undefined, int64
    */
    applyCount?: number;
    /**
     * @type object | undefined
    */
    profile?: WishVoProfile;
    /**
     * @type object | undefined
    */
    ownerProfile?: WishVoProfile;
    /**
     * @type string | undefined
    */
    wishId?: string;
    /**
     * @description Type for Question or Referral
     * @type string | undefined
    */
    type?: string;
    /**
     * @description unlock count
     * @type integer | undefined, int64
    */
    unlockCount?: number;
    /**
     * @description 买盘时间
     * @type integer | undefined, int64
    */
    bidTime?: number;
    /**
     * @type object | undefined
    */
    quote?: TokenValueVo;
    /**
     * @type object | undefined
    */
    price?: TokenValueVo;
    /**
     * @description OSP ID profileId_contentId
     * @type string | undefined
    */
    bizId?: string;
    /**
     * @description onChainWishId
     * @type string | undefined
    */
    onChainWishId?: string;
    /**
     * @description ask bid count
     * @type integer | undefined, int64
    */
    transactionCount?: number;
    /**
     * @type integer | undefined, int64
    */
    deadline?: number;
    /**
     * @description Status - Active , Offered
     * @type string | undefined
    */
    status?: string;
};