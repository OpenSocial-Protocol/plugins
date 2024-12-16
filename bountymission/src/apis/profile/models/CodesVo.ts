export const codesVoType = {
    "DEFAULT_INVITE": "DEFAULT_INVITE",
    "SINGLE_USE": "SINGLE_USE",
    "INTERVAL_LIMIT": "INTERVAL_LIMIT",
    "UNLIMITED": "UNLIMITED"
} as const;
export type CodesVoType = (typeof codesVoType)[keyof typeof codesVoType];
export const codesVoStatus = {
    "effective": "effective",
    "writtenOff": "writtenOff"
} as const;
export type CodesVoStatus = (typeof codesVoStatus)[keyof typeof codesVoStatus];
export type CodesVo = {
    /**
     * @description 使用者名称
     * @type string | undefined
    */
    userHandle?: string;
    /**
     * @description 周期内已使用次数
     * @type integer | undefined, int32
    */
    limitUsed?: number;
    /**
     * @description 兑换码
     * @type string | undefined
    */
    code?: string;
    /**
     * @description 等级
     * @type integer | undefined, int32
    */
    level?: number;
    /**
     * @description 类型(DEFAULT_INVITE, SINGLE_USE, INTERVAL_LIMIT, UNLIMITED)
     * @type string | undefined
    */
    type?: CodesVoType;
    /**
     * @description 使用者id
     * @type string | undefined
    */
    userId?: string;
    /**
     * @description 限制周期
     * @type string | undefined
    */
    limitCycle?: string;
    /**
     * @description 使用者钱包
     * @type string | undefined
    */
    userWallet?: string;
    /**
     * @description 限制次数
     * @type integer | undefined, int32
    */
    limitNumber?: number;
    /**
     * @description 状态
     * @type string | undefined
    */
    status?: CodesVoStatus;
    /**
     * @description 场景
     * @type string | undefined
    */
    scene?: string;
};