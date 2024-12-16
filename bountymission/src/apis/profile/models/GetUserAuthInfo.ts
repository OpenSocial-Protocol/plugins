import type { WebResultUserAuthInfoVo } from "./WebResultUserAuthInfoVo";

 export type GetUserAuthInfoQueryParams = {
    /**
     * @description 查询指定用户
     * @type string | undefined
    */
    customerId?: string;
};
/**
 * @description Successful operation
*/
export type GetUserAuthInfo200 = WebResultUserAuthInfoVo;
/**
 * @description Successful operation
*/
export type GetUserAuthInfoQueryResponse = Omit<NonNullable<WebResultUserAuthInfoVo>, "responseEnum">;
export type GetUserAuthInfoQuery = {
    Response: GetUserAuthInfoQueryResponse;
    QueryParams: GetUserAuthInfoQueryParams;
};