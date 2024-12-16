export type FriendOperateRequestVo = {
    /**
     * @description 签名
     * @type string | undefined
    */
    signature?: string;
    /**
     * @description 好友id
     * @type string
    */
    customerId: string;
    /**
     * @description 申请备注
     * @type string | undefined
    */
    remark?: string;
    /**
     * @description deadline 单位秒
     * @type integer | undefined, int32
    */
    deadline?: number;
};