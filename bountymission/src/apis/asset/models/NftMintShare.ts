import type { WebResultNftMintShareResponseVo } from "./WebResultNftMintShareResponseVo";

 export type NftMintShareQueryParams = {
    /**
     * @description nft contract address
     * @type string
    */
    address: string;
    /**
     * @description nft tier
     * @type integer | undefined, int64
    */
    tier?: number;
};
/**
 * @description Successful operation
*/
export type NftMintShare200 = WebResultNftMintShareResponseVo;
/**
 * @description Successful operation
*/
export type NftMintShareQueryResponse = Omit<NonNullable<WebResultNftMintShareResponseVo>, "responseEnum">;
export type NftMintShareQuery = {
    Response: NftMintShareQueryResponse;
    QueryParams: NftMintShareQueryParams;
};