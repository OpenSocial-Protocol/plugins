export type CurrentUserVo = {
    /**
     * @type string | undefined
    */
    twitterName?: string;
    /**
     * @type number | undefined
    */
    dividePoint?: number;
    /**
     * @description 用户加成后的积分
     * @type number | undefined
    */
    available?: number;
    /**
     * @type string | undefined
    */
    rankPercent?: string;
    /**
     * @type number | undefined
    */
    invitePoint?: number;
    /**
     * @description 是否为 vip 用户
     * @type boolean | undefined
    */
    isVip?: boolean;
    /**
     * @type string | undefined
    */
    uid?: string;
    /**
     * @type string | undefined
    */
    saasId?: string;
    /**
     * @description pfp 加成
     * @type string | undefined
    */
    pfp?: string;
    /**
     * @description vip 加成
     * @type string | undefined
    */
    vip?: string;
    /**
     * @type integer | undefined, int32
    */
    rankValue?: number;
    /**
     * @type string | undefined
    */
    discordName?: string;
    /**
     * @type number | undefined
    */
    expValue?: number;
};