import type { WalletAddressVo } from "./WalletAddressVo";
import type { WalletAddressV2Vo } from "./WalletAddressV2Vo";

 export type CustomerVo = {
    /**
     * @description 是否认证手机
     * @type boolean | undefined
    */
    isPhoneCertified?: boolean;
    /**
     * @description 是否认证Google
     * @type boolean | undefined
    */
    isGoogleCertified?: boolean;
    /**
     * @description 是否绑定了邮箱
     * @type boolean | undefined
    */
    isBindEmail?: boolean;
    /**
     * @description 三方public_key(web3auth)
     * @type string | undefined
    */
    publicKey?: string;
    /**
     * @description web3auth登录选择的社交方式(twitter、google、apple)
     * @type string | undefined
    */
    socialType?: string;
    /**
     * @type string | undefined
    */
    merchantName?: string;
    /**
     * @type string | undefined
    */
    merchantId?: string;
    /**
     * @description kyc身份验证状态,目前废弃,使用kycAuthLevel字段
     * @type integer | undefined, int32
    */
    idCertifiedStatus?: number;
    /**
     * @type string | undefined
    */
    id?: string;
    /**
     * @type string | undefined
    */
    wsKey?: string;
    /**
     * @description 昵称
     * @type string | undefined
    */
    nickName?: string;
    /**
     * @description 创建时间
     * @type integer | undefined, int64
    */
    created?: number;
    /**
     * @type string | undefined
    */
    telegramId?: string;
    /**
     * @description vip到期时间
     * @type integer | undefined, int64
    */
    vipEndTime?: number;
    /**
     * @type string | undefined
    */
    uniqueName?: string;
    /**
     * @description 手机号
     * @type string | undefined
    */
    phone?: string;
    /**
     * @type string | undefined
    */
    whatsAppId?: string;
    /**
     * @type integer | undefined, int32
    */
    isMigration?: number;
    /**
     * @description 国家地区
     * @type string | undefined
    */
    region?: string;
    /**
     * @type string | undefined
    */
    jwtKey?: string;
    /**
     * @description 钱包账户地址
     * @type string | undefined
    */
    walletAddress?: string;
    /**
     * @description web3auth登录选择社交方式的 handle_name
     * @type string | undefined
    */
    socialHandle?: string;
    /**
     * @description 是否绑定web3
     * @type boolean | undefined
    */
    isBindWeb3?: boolean;
    /**
     * @description 是否支持绑定web钱包，true-支持绑定，false-不支持绑定
     * @type boolean | undefined
    */
    allowBindWallet?: boolean;
    /**
     * @description 用户状态
     * @type integer | undefined, int32
    */
    status?: number;
    /**
     * @description web3auth账号对应的public key, 通过 idToken 验证后得到
     * @type string | undefined
    */
    web3authPublicKey?: string;
    /**
     * @description 性别
     * @type integer | undefined, int32
    */
    gender?: number;
    /**
     * @description 用户注册时的设备类型, 取值 android, ios, web (老用户数据没有该字段）
     * @type string | undefined
    */
    registerDeviceType?: string;
    /**
     * @description 是否认证邮箱
     * @type boolean | undefined
    */
    isEmailCertified?: boolean;
    /**
     * @description 注册类型
     * @type integer | undefined, int32
    */
    registerType?: number;
    /**
     * @type string | undefined
    */
    locale?: string;
    /**
     * @description 是否存在资金密码
     * @type boolean | undefined
    */
    isExistAssetPassword?: boolean;
    /**
     * @description vip等级
     * @type string | undefined
    */
    vipLevel?: string;
    /**
     * @description 是否绑定了手机号码
     * @type boolean | undefined
    */
    isBindPhone?: boolean;
    /**
     * @description telegram username
     * @type string | undefined
    */
    telegramName?: string;
    /**
     * @description refreshToken 过期时间
     * @type integer | undefined, int64
    */
    refreshTokenExpireIn?: number;
    /**
     * @description 是否是通过web3钱包注册
     * @type boolean | undefined
    */
    registByWallet?: boolean;
    /**
     * @description 连接钱包账户地址
     * @type string | undefined
    */
    connectAddress?: string;
    /**
     * @description 邮箱
     * @type string | undefined
    */
    email?: string;
    /**
     * @description 是否绑定Google
     * @type boolean | undefined
    */
    isBindGoogle?: boolean;
    /**
     * @description 是否存在密码
     * @type boolean | undefined
    */
    noPassword?: boolean;
    /**
     * @type object | undefined
    */
    address?: WalletAddressVo;
    /**
     * @type object | undefined
    */
    addressAll?: WalletAddressV2Vo;
    /**
     * @type string | undefined
    */
    lineId?: string;
    /**
     * @description 头像
     * @type string | undefined
    */
    avatar?: string;
    /**
     * @description 用户名
     * @type string | undefined
    */
    userName?: string;
    /**
     * @description kyc等级
     * @type string | undefined
    */
    kycLevel?: string;
    /**
     * @type string | undefined
    */
    middleName?: string;
    /**
     * @type string | undefined
    */
    refreshToken?: string;
};