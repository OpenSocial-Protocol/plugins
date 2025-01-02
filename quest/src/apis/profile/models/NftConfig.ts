import type { WebResultNftConfigResponseVo } from "./WebResultNftConfigResponseVo";

 /**
 * @description Successful operation
*/
export type NftConfig200 = WebResultNftConfigResponseVo;
/**
 * @description Successful operation
*/
export type NftConfigQueryResponse = Omit<NonNullable<WebResultNftConfigResponseVo>, "responseEnum">;
export type NftConfigQuery = {
    Response: NftConfigQueryResponse;
};