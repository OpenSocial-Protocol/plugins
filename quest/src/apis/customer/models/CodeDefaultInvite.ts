import type { WebResultCustomerCodeVo } from "./WebResultCustomerCodeVo";

 /**
 * @description Successful operation
*/
export type CodeDefaultInvite200 = WebResultCustomerCodeVo;
/**
 * @description Successful operation
*/
export type CodeDefaultInviteQueryResponse = Omit<NonNullable<WebResultCustomerCodeVo>, "responseEnum">;
export type CodeDefaultInviteQuery = {
    Response: CodeDefaultInviteQueryResponse;
};