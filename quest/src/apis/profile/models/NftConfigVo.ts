import type { NftConfigVoMetadata } from "./NftConfigVoMetadata";

 export const nftConfigVoStatus = {
    "UPCOMING": "UPCOMING",
    "LIVE": "LIVE",
    "ENDED": "ENDED",
    "COMING_SOON": "COMING_SOON"
} as const;
export type NftConfigVoStatus = (typeof nftConfigVoStatus)[keyof typeof nftConfigVoStatus];
export type NftConfigVo = {
    /**
     * @description 前多少名用户mint盲盒NFT可获取积分
     * @type integer | undefined, int64
    */
    getExtraPointsUserMaxNo?: number;
    /**
     * @type object | undefined
    */
    metadata?: NftConfigVoMetadata;
    /**
     * @description 对应币种价格格式化
     * @type string | undefined
    */
    priceFormat?: string;
    /**
     * @description 盲盒NFT 超过最大mint数量提示
     * @type string | undefined
    */
    overMintDesc?: string;
    /**
     * @type string | undefined
    */
    address?: string;
    /**
     * @type integer | undefined, int64
    */
    mintedCount?: number;
    /**
     * @type integer | undefined, int64
    */
    totalSupply?: number;
    /**
     * @type string | undefined
    */
    description?: string;
    /**
     * @type string | undefined
    */
    title?: string;
    /**
     * @description 对应币种格式化名称
     * @type string | undefined
    */
    currencyFormat?: string;
    /**
     * @type integer | undefined, int64
    */
    extraPoints?: number;
    /**
     * @type integer | undefined, int64
    */
    tier?: number;
    /**
     * @type integer | undefined, int64
    */
    price?: number;
    /**
     * @type integer | undefined, int64
    */
    beginTime?: number;
    /**
     * @type integer | undefined, int64
    */
    endTime?: number;
    /**
     * @type string | undefined
    */
    status?: NftConfigVoStatus;
};