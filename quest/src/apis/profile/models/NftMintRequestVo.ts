export const nftMintRequestVoNftType = {
    "genesis": "genesis",
    "og": "og",
    "badge": "badge"
} as const;
export type NftMintRequestVoNftType = (typeof nftMintRequestVoNftType)[keyof typeof nftMintRequestVoNftType];
export type NftMintRequestVo = {
    /**
     * @description customer address
     * @type string | undefined
    */
    customerAddress?: string;
    /**
     * @description nft type
     * @type string | undefined
    */
    nftType?: NftMintRequestVoNftType;
    /**
     * @description nft address
     * @type string | undefined
    */
    contractAddress?: string;
    /**
     * @description claimable ids
     * @type array | undefined
    */
    claimableIds?: string[];
};