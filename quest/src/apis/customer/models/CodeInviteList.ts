import type { WebResultCustomerCodeInviteListVo } from "./WebResultCustomerCodeInviteListVo";

 export type CodeInviteListQueryParams = {
    /**
     * @description 兑换码
     * @type string
    */
    code: string;
    /**
     * @description 数量
     * @type integer, int32
    */
    limit: number;
    /**
     * @description next token
     * @type string | undefined
    */
    next_token?: string;
};
/**
 * @description Successful operation
*/
export type CodeInviteList200 = WebResultCustomerCodeInviteListVo;
/**
 * @description Successful operation
*/
export type CodeInviteListQueryResponse = Omit<NonNullable<WebResultCustomerCodeInviteListVo>, "responseEnum">;
export type CodeInviteListQuery = {
    Response: CodeInviteListQueryResponse;
    QueryParams: CodeInviteListQueryParams;
};