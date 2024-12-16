import type { WebResultUserTwitterInfoVo } from "./WebResultUserTwitterInfoVo";

 export type GetUserTwitterInfoQueryParams = {
    /**
     * @description 查询指定用户
     * @type string | undefined
    */
    customerId?: string;
};
/**
 * @description Successful operation
*/
export type GetUserTwitterInfo200 = WebResultUserTwitterInfoVo;
/**
 * @description Successful operation
*/
export type GetUserTwitterInfoQueryResponse = Omit<NonNullable<WebResultUserTwitterInfoVo>, "responseEnum">;
export type GetUserTwitterInfoQuery = {
    Response: GetUserTwitterInfoQueryResponse;
    QueryParams: GetUserTwitterInfoQueryParams;
};