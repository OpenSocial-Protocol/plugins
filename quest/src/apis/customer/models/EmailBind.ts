import type { WebResultCustomerVo } from "./WebResultCustomerVo";

 export type EmailBindQueryParams = {
    /**
     * @description 绑定/换绑的邮箱
     * @type string
    */
    email: string;
    /**
     * @description 邮箱验证码
     * @type string
    */
    verifyCode: string;
    /**
     * @description 类型(8: 绑定, 11: 换绑)
     * @type integer, int32
    */
    type: number;
    /**
     * @description 换绑时，旧邮箱生成的token
     * @type string | undefined
    */
    tokenId?: string;
};
export type EmailBindHeaderParams = {
    /**
     * @type string | undefined
    */
    saas_id?: string;
};
/**
 * @description Successful operation
*/
export type EmailBind200 = WebResultCustomerVo;
/**
 * @description Successful operation
*/
export type EmailBindMutationResponse = Omit<NonNullable<WebResultCustomerVo>, "responseEnum">;
export type EmailBindMutation = {
    Response: EmailBindMutationResponse;
    QueryParams: EmailBindQueryParams;
    HeaderParams: EmailBindHeaderParams;
};