import type { NftAsset } from "./NftAsset";

 export type NftAssetsVo = {
    /**
     * @description nft tier
     * @type string | undefined
    */
    maxNFTTierName?: string;
    /**
     * @type array | undefined
    */
    assets?: NftAsset[];
    /**
     * @description 用户id
     * @type string | undefined
    */
    customerId?: string;
    /**
     * @description 加密后的积分倍数加成，用于完成任务时透传给 quests 系统
     * @type string | undefined
    */
    encryptMaxPointMultiplier?: string;
    /**
     * @description nft tier
     * @type integer | undefined, int32
    */
    maxNFTTier?: number;
    /**
     * @description 积分倍数加成
     * @type number | undefined
    */
    maxPointMultiplier?: number;
};