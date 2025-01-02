import type { WebResultTaskRewardVo } from "./WebResultTaskRewardVo";

 export type V2TasksDoquestsPostQueryParams = {
    /**
     * @description 用户id、address
     * @type string
    */
    userId: string;
    /**
     * @description 事件名称
     * @type string
    */
    name: string;
    /**
     * @description 当前事件对应的资源id
     * @type string
    */
    contentId: string;
    /**
     * @description 当前事件对应的资源价钱
     * @type integer, int64
    */
    eventTime: number;
    /**
     * @description 当前事件对应的资源的原资源用户id
     * @type string | undefined
    */
    targetUserId?: string;
    /**
     * @description 当前事件对应的资源的原资源id
     * @type string | undefined
    */
    targetContentId?: string;
    /**
     * @description 当前事件附加属性
     * @type string | undefined
    */
    extendAttr?: string;
};
export type V2TasksDoquestsPostHeaderParams = {
    /**
     * @description app授权码
     * @type string
    */
    sign: string;
    /**
     * @description saasId
     * @type string
    */
    saas_id: string;
};
/**
 * @description 成功
*/
export type V2TasksDoquestsPost200 = WebResultTaskRewardVo;
/**
 * @description 成功
*/
export type V2TasksDoquestsPostMutationResponse = Omit<NonNullable<WebResultTaskRewardVo>, "responseEnum">;
export type V2TasksDoquestsPostMutation = {
    Response: V2TasksDoquestsPostMutationResponse;
    QueryParams: V2TasksDoquestsPostQueryParams;
    HeaderParams: V2TasksDoquestsPostHeaderParams;
};