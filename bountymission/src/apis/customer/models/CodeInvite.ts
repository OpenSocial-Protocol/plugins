import type { WebResultCustomerCodeInviteVo } from "./WebResultCustomerCodeInviteVo";

 export type CodeInviteQueryParams = {
    /**
     * @description code类型
     * @type array | undefined
    */
    types?: string[];
    /**
     * @description 场景
     * @type array | undefined
    */
    scenes?: string[];
};
/**
 * @description Successful operation
*/
export type CodeInvite200 = WebResultCustomerCodeInviteVo;
/**
 * @description Successful operation
*/
export type CodeInviteQueryResponse = Omit<NonNullable<WebResultCustomerCodeInviteVo>, "responseEnum">;
export type CodeInviteQuery = {
    Response: CodeInviteQueryResponse;
    QueryParams: CodeInviteQueryParams;
};