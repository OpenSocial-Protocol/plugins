export type ApplyPostRequestVo = {
    /**
     * @type string | undefined
    */
    linkCode?: string;
    /**
     * @type string
    */
    wishApplyId: string;
    /**
     * @type string
    */
    signature: string;
    /**
     * @type string
    */
    wishId: string;
    /**
     * @type string
    */
    deadline: string;
    /**
     * @type string
    */
    applyTime: string;
    /**
     * @description Not required for Answer/ Required for Referral as remark
     * @type string | undefined
    */
    content?: string;
};