export type GasPolicyVo = {
    /**
     * @description gas异常时提示值
     * @type string | undefined
    */
    gasWarning?: string;
    /**
     * @type string | undefined
    */
    policy_data?: string;
    /**
     * @description 是否补贴
     * @type boolean | undefined
    */
    isSubsidy?: boolean;
};