import type { WebResultGetWishTagResponseVo } from "./WebResultGetWishTagResponseVo";

 export type GetWishTagQueryParams = {
    /**
     * @type array | undefined
    */
    type?: string[];
};
/**
 * @description Successful operation
*/
export type GetWishTag200 = WebResultGetWishTagResponseVo;
/**
 * @description Successful operation
*/
export type GetWishTagQueryResponse = Omit<NonNullable<WebResultGetWishTagResponseVo>, "responseEnum">;
export type GetWishTagQuery = {
    Response: GetWishTagQueryResponse;
    QueryParams: GetWishTagQueryParams;
};