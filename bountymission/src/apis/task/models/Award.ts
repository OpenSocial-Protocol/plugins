export type Award = {
    /**
     * @description 奖励金额
     * @type string | undefined
    */
    amount?: string;
    /**
     * @type integer | undefined, int32
    */
    index?: number;
    /**
     * @type string | undefined
    */
    currency?: string;
    /**
     * @description NFT,TOKEN,POINT
     * @type string | undefined
    */
    type?: string;
    /**
     * @description 奖品描述
     * @type string | undefined
    */
    desc?: string;
    /**
     * @description 1:已发放 0：未发放
     * @type integer | undefined, int32
    */
    status?: number;
};