import type { WebResultNftMintCheckResponseVo } from "./WebResultNftMintCheckResponseVo";

 export type NftMintCheckQueryParams = {
    /**
     * @type string | undefined
    */
    contractAddress?: string;
    /**
     * @description nft type, values(badge)
     * @type string | undefined
    */
    nftType?: string;
    /**
     * @type string | undefined
    */
    customerAddress?: string;
};
/**
 * @description Successful operation
*/
export type NftMintCheck200 = WebResultNftMintCheckResponseVo;
/**
 * @description Successful operation
*/
export type NftMintCheckMutationResponse = Omit<NonNullable<WebResultNftMintCheckResponseVo>, "responseEnum">;
export type NftMintCheckMutation = {
    Response: NftMintCheckMutationResponse;
    QueryParams: NftMintCheckQueryParams;
};