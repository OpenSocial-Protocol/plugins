import type { WebResultActiveTaskVo } from "./WebResultActiveTaskVo";

 export type V2TasksDotaskPostQueryParams = {
    /**
     * @description 任务id
     * @type string
    */
    taskId: string;
};
/**
 * @description 成功
*/
export type V2TasksDotaskPost200 = WebResultActiveTaskVo;
/**
 * @description 成功
*/
export type V2TasksDotaskPostMutationResponse = Omit<NonNullable<WebResultActiveTaskVo>, "responseEnum">;
export type V2TasksDotaskPostMutation = {
    Response: V2TasksDotaskPostMutationResponse;
    QueryParams: V2TasksDotaskPostQueryParams;
};