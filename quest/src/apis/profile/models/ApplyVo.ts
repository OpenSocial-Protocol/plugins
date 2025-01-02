import type { ApplyVoProfile } from "./ApplyVoProfile";

 export type ApplyVo = {
    /**
     * @type string | undefined
    */
    linkCode?: string;
    /**
     * @type string | undefined
    */
    signature?: string;
    /**
     * @type object | undefined
    */
    linkerProfile?: ApplyVoProfile;
    /**
     * @type object | undefined
    */
    profile?: ApplyVoProfile;
    /**
     * @description winner tag
     * @type boolean | undefined
    */
    winnerTag?: boolean;
    /**
     * @type string | undefined
    */
    wishId?: string;
    /**
     * @type string | undefined
    */
    type?: string;
    /**
     * @description Answer is empty but Referral returns remark
     * @type string | undefined
    */
    content?: string;
    /**
     * @type string | undefined
    */
    wishApplyId?: string;
    /**
     * @type string | undefined
    */
    profileId?: string;
    /**
     * @description OSP ID profileId_contentId
     * @type string | undefined
    */
    bizId?: string;
    /**
     * @description apply timestamp
     * @type integer | undefined, int64
    */
    applyTime?: number;
    /**
     * @description expired timestamp
     * @type integer | undefined, int64
    */
    deadline?: number;
};