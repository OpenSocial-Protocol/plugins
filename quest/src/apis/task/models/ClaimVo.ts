export type ClaimVo = {
    /**
     * @description 奖励金额
     * @type number | undefined
    */
    reward?: number;
    /**
     * @description 订单id，如果需要支付时产生订单id
     * @type string | undefined
    */
    orderId?: string;
    /**
     * @description 奖励币种
     * @type string | undefined
    */
    currency?: string;
};