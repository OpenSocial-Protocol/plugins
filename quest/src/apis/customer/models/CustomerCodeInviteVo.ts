export type CustomerCodeInviteVo = {
    /**
     * @description 用户id
     * @type string | undefined
    */
    customerId?: string;
    /**
     * @description 兑换码被使用的次数
     * @type integer | undefined, int64
    */
    useCount?: number;
};