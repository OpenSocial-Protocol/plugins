import type { WebResultNftConfigDetailResponseVo } from "./WebResultNftConfigDetailResponseVo";

 export type NftConfigDetailPathParams = {
    /**
     * @description contractAddress
     * @type string
    */
    contractAddress: string;
};
/**
 * @description Successful operation
*/
export type NftConfigDetail200 = WebResultNftConfigDetailResponseVo;
/**
 * @description Successful operation
*/
export type NftConfigDetailQueryResponse = Omit<NonNullable<WebResultNftConfigDetailResponseVo>, "responseEnum">;
export type NftConfigDetailQuery = {
    Response: NftConfigDetailQueryResponse;
    PathParams: NftConfigDetailPathParams;
};