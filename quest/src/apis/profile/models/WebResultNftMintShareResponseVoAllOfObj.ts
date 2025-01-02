import type { NftShareExtraVo } from "./NftShareExtraVo";

 export type WebResultNftMintShareResponseVoAllOfObj = {
    /**
     * @description 用户地址
     * @type string | undefined
    */
    customerAddress?: string;
    /**
     * @description NFT名称
     * @type string | undefined
    */
    nftName?: string;
    /**
     * @type object | undefined
    */
    extras?: NftShareExtraVo;
    /**
     * @description 交易hash
     * @type string | undefined
    */
    transactionHash?: string;
    /**
     * @description mint 后获得的积分
     * @type integer | undefined, int64
    */
    rizzPoint?: number;
    /**
     * @description mint顺序
     * @type string | undefined
    */
    mintSequence?: string;
};