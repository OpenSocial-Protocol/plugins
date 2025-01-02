import type { WebResultCustomerVo } from "./WebResultCustomerVo";

 export type BindAuthQueryParams = {
    /**
     * @description 用户第三方钱包的地址
     * @type string
    */
    address: string;
    /**
     * @description 签名
     * @type string
    */
    signature: string;
    /**
     * @description 三方认证来源(EXTERNAL_SOCIAL、EXTERNAL_WALLET)
     * @type string
    */
    thirdAuthSource: string;
    /**
     * @description 第三方平台，比如 web3auth, firebase, tencent_im, particle
     * @type string
    */
    platform: string;
    /**
     * @description 钱包类型(evm, sui, bsc, eth, zksync_era, linea, mantle, polygon)
     * @type string
    */
    walletType: string;
    /**
     * @description 用户第三方钱包的公钥
     * @type string | undefined
    */
    publicKey?: string;
    /**
     * @description 随机数字符串，用于用户钱包登陆、绑定时进行签名。（一个随机字符串只能用一次）
     * @type string | undefined
    */
    nonce?: string;
    /**
     * @description 是否仅绑定钱包(true: 绑定钱包, false: 绑定钱包并支持登录), 默认为 false
     * @type boolean | undefined
    */
    connect?: boolean;
};
export type BindAuthHeaderParams = {
    /**
     * @description 平台标识
     * @type string | undefined
    */
    saas_id?: string;
};
/**
 * @description Successful operation
*/
export type BindAuth200 = WebResultCustomerVo;
/**
 * @description Successful operation
*/
export type BindAuthMutationResponse = Omit<NonNullable<WebResultCustomerVo>, "responseEnum">;
export type BindAuthMutation = {
    Response: BindAuthMutationResponse;
    QueryParams: BindAuthQueryParams;
    HeaderParams: BindAuthHeaderParams;
};