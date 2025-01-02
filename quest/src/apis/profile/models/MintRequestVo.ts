export type MintRequestVo = {
    /**
     * @type number | undefined
    */
    rizz?: number;
    /**
     * @type string | undefined
    */
    royaltyRecipient?: string;
    /**
     * @type integer | undefined, int64
    */
    quantity?: number;
    /**
     * @description token id
     * @type string | undefined
    */
    tokenId?: string;
    /**
     * @type string | undefined
    */
    signature?: string;
    /**
     * @type integer | undefined, int64
    */
    royaltyBps?: number;
    /**
     * @type string | undefined
    */
    primarySaleRecipient?: string;
    /**
     * @type string | undefined
    */
    contractAddress?: string;
    /**
     * @type string | undefined
    */
    uri?: string;
    /**
     * @type integer | undefined, int64
    */
    validityStartTimestamp?: number;
    /**
     * @type string | undefined
    */
    uid?: string;
    /**
     * @type integer | undefined, int64
    */
    pricePerToken?: number;
    /**
     * @description 请求ID 可以校验是否重复请求
     * @type string | undefined
    */
    requestId?: string;
    /**
     * @type integer | undefined, int64
    */
    validityEndTimestamp?: number;
    /**
     * @type string | undefined
    */
    currency?: string;
};