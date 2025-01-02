import type { WebResultCustomerVo } from "./WebResultCustomerVo";

 export type OauthLoginQueryParams = {
    /**
     * @description 三方token
     * @type string
    */
    idToken: string;
    /**
     * @description 三方publicKey
     * @type string
    */
    publicKey: string;
    /**
     * @description 三方认证来源(EXTERNAL_SOCIAL、EXTERNAL_WALLET)
     * @type string
    */
    thirdAuthSource: string;
    /**
     * @description 钱包类型(evm、sui), 默认值为 evm
     * @type string | undefined
    */
    walletType?: string;
    /**
     * @description 三方平台来源(web3auth/osp)
     * @type string | undefined
    */
    platform?: string;
    /**
     * @description 邀请码
     * @type string | undefined
    */
    inviteCode?: string;
    /**
     * @description 邀请码类型(DEFAULT_INVITE, CDK_INVITE, CDK_NFT)
     * @type string | undefined
    */
    codeType?: string;
    /**
     * @description 是否自动注册(即账户未注册的情况下，注册后登录)，默认false
     * @default false
     * @type boolean | undefined
    */
    autoRegister?: boolean;
    /**
     * @description 渠道类型（WEB3AUTH、FIREBASE、TELEGRAM)
     * @type string | undefined
    */
    channel?: string;
};
export type OauthLoginHeaderParams = {
    /**
     * @type string | undefined
    */
    saas_id?: string;
    /**
     * @type string | undefined
    */
    deviceType?: string;
};
/**
 * @description Successful operation
*/
export type OauthLogin200 = WebResultCustomerVo;
/**
 * @description Successful operation
*/
export type OauthLoginMutationResponse = Omit<NonNullable<WebResultCustomerVo>, "responseEnum">;
export type OauthLoginMutation = {
    Response: OauthLoginMutationResponse;
    QueryParams: OauthLoginQueryParams;
    HeaderParams: OauthLoginHeaderParams;
};