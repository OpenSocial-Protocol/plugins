export type NftAsset = {
    /**
     * @description contract address
     * @type string | undefined
    */
    address?: string;
    /**
     * @type integer | undefined, int32
    */
    tier?: number;
    /**
     * @description nft 数量
     * @type integer | undefined, int64
    */
    balance?: number;
    /**
     * @description nft tier
     * @type string | undefined
    */
    tierName?: string;
    /**
     * @description 是否 mint 得到
     * @type boolean | undefined
    */
    minted?: boolean;
    /**
     * @description nft uri
     * @type string | undefined
    */
    uri?: string;
};