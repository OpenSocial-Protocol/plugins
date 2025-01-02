import type { WebResultCustomerBindVo } from "./WebResultCustomerBindVo";

 export type OauthLoginQueryParams = {
    /**
     * @description 三方 token
     * @type string
    */
    idToken: string;
    /**
     * @description 三方 publicKey
     * @type string
    */
    publicKey: string;
    /**
     * @description 钱包账户地址
     * @type string
    */
    walletAddress: string;
    /**
     * @description 三方认证来源 (EXTERNAL_SOCIAL、EXTERNAL_WALLET)
     * @type string
    */
    thirdAuthSource: string;
    /**
     * @description 钱包类型 (evm、sui), 默认值为 evm
     * @type string | undefined
    */
    walletType?: string;
    /**
     * @description 是否自动注册 (即账户未注册的情况下，注册后登录)，默认 false
     * @default false
     * @type boolean | undefined
    */
    autoRegister?: boolean;
};
export type OauthLoginHeaderParams = {
    /**
     * @type string | undefined
    */
    saas_id?: string;
};
/**
 * @description Successful operation
*/
export type OauthLogin200 = WebResultCustomerBindVo;
/**
 * @description Successful operation
*/
export type OauthLoginMutationResponse = Omit<NonNullable<WebResultCustomerBindVo>, "responseEnum">;
export type OauthLoginMutation = {
    Response: OauthLoginMutationResponse;
    QueryParams: OauthLoginQueryParams;
    HeaderParams: OauthLoginHeaderParams;
};