import type { WebResultDoTaskVo } from "./WebResultDoTaskVo";

 export type V2TasksVerifyPostQueryParams = {
    /**
     * @description 任务id
     * @type string
    */
    taskId: string;
    /**
     * @description 其他参数，如邀请链接
     * @type string | undefined
    */
    ext?: string;
};
export type V2TasksVerifyPostHeaderParams = {
    /**
     * @description saasId
     * @type string
    */
    saas_id: string;
};
/**
 * @description 成功
*/
export type V2TasksVerifyPost200 = WebResultDoTaskVo;
/**
 * @description 成功
*/
export type V2TasksVerifyPostMutationResponse = Omit<NonNullable<WebResultDoTaskVo>, "responseEnum">;
export type V2TasksVerifyPostMutation = {
    Response: V2TasksVerifyPostMutationResponse;
    QueryParams: V2TasksVerifyPostQueryParams;
    HeaderParams: V2TasksVerifyPostHeaderParams;
};