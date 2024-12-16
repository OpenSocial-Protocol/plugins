/**
 * @description 申请备注 最近20条 详情返回
*/
export type FriendApplyRemark = {
    /**
     * @description 申请备注
     * @type string | undefined
    */
    remark?: string;
    /**
     * @description 申请时间戳
     * @type integer | undefined, int64
    */
    applyTime?: number;
};