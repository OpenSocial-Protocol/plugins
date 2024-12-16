import type { SelfIntroductionVo } from "./SelfIntroductionVo";

 export type ProfileVoBasic = {
    /**
     * @type string | undefined
    */
    defaultInviteCode?: string;
    /**
     * @type integer | undefined, int64
    */
    chainProfileId?: number;
    /**
     * @type string | undefined
    */
    customerId?: string;
    /**
     * @type string | undefined
    */
    nickname?: string;
    /**
     * @type string | undefined
    */
    twitterName?: string;
    /**
     * @type string | undefined
    */
    handle?: string;
    /**
     * @type array | undefined
    */
    selfIntroduction?: SelfIntroductionVo[];
    /**
     * @type string | undefined
    */
    avatar?: string;
    /**
     * @type integer | undefined, int64
    */
    twitterCreated?: number;
    /**
     * @type string | undefined
    */
    twitterId?: string;
};