import type { WebResultGetWishCountResponseVo } from "./WebResultGetWishCountResponseVo";

 export type WishCountQueryParams = {
    /**
     * @description 用户id
     * @type string | undefined
    */
    customerId?: string;
};
/**
 * @description Successful operation
*/
export type WishCount200 = WebResultGetWishCountResponseVo;
/**
 * @description Successful operation
*/
export type WishCountQueryResponse = Omit<NonNullable<WebResultGetWishCountResponseVo>, "responseEnum">;
export type WishCountQuery = {
    Response: WishCountQueryResponse;
    QueryParams: WishCountQueryParams;
};