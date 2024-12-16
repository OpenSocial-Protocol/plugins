export const nftMintRequestVoNftType2 = {
    "genesis": "genesis",
    "og": "og",
    "badge": "badge"
} as const;
export type NftMintRequestVoNftType2 = (typeof nftMintRequestVoNftType2)[keyof typeof nftMintRequestVoNftType2];
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
    nftType?: NftMintRequestVoNftType2;
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