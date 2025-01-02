export type LoginRequest = {
    /**
     * @description 邀请码类型(DEFAULT_INVITE, CDK_INVITE, CDK_NFT)
     * @type string | undefined
    */
    codeType?: string;
    /**
     * @description 钱包类型(evm、sui)
     * @type string | undefined
    */
    walletType?: string;
    /**
     * @description 邀请码
     * @type string | undefined
    */
    inviteCode?: string;
    /**
     * @description 三方token
     * @type string
    */
    idToken: string;
    /**
     * @description 渠道类型（WEB3AUTH、FIREBASE、TELEGRAM)
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
     * @description 是否自动注册(即账户未注册的情况下，注册后自动登录)
     * @type boolean | undefined
    */
    autoRegister?: boolean;
    /**
     * @description 三方平台来源(web3auth/osp/metamask/walletconnect)
     * @type string | undefined
    */
    platform?: string;
};