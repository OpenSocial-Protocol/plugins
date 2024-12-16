export type BindRequest = {
    /**
     * @description 钱包地址
     * @type string | undefined
    */
    address?: string;
    /**
     * @description 钱包类型(evm、sui)
     * @type string | undefined
    */
    walletType?: string;
    /**
     * @description 三方token
     * @type string
    */
    idToken: string;
    /**
     * @description 渠道类型（WEB3AUTH、FIREBASE、TELEGRAM、WALLET)
     * @type string | undefined
    */
    channel?: string;
    /**
     * @description 三方publicKey
     * @type string
    */
    publicKey: string;
    /**
     * @description 三方publicKey
     * @type string | undefined
    */
    nonce?: string;
    /**
     * @description 三方认证来源(EXTERNAL_SOCIAL、EXTERNAL_WALLET、THIRD_WALLET)
     * @type string
    */
    thirdAuthSource: string;
    /**
     * @description 三方平台来源(web3auth/osp/metamask/walletconnect)
     * @type string | undefined
    */
    platform?: string;
    /**
     * @description 是否仅绑定钱包(true: 绑定钱包, false: 绑定钱包并支持登录), 默认为 false
     * @type boolean | undefined
    */
    connect?: boolean;
};