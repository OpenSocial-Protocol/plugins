import type { WebResultTaskRewardStatVo } from "./WebResultTaskRewardStatVo";

 export type V2TasksRewardByCodeGetQueryParams = {
    /**
     * @description code
     * @type array
    */
    code: string[];
};
export type V2TasksRewardByCodeGetHeaderParams = {
    /**
     * @description saasId
     * @type string
    */
    saas_id: string;
};
/**
 * @description 成功
*/
export type V2TasksRewardByCodeGet200 = WebResultTaskRewardStatVo;
/**
 * @description 成功
*/
export type V2TasksRewardByCodeGetQueryResponse = Omit<NonNullable<WebResultTaskRewardStatVo>, "responseEnum">;
export type V2TasksRewardByCodeGetQuery = {
    Response: V2TasksRewardByCodeGetQueryResponse;
    QueryParams: V2TasksRewardByCodeGetQueryParams;
    HeaderParams: V2TasksRewardByCodeGetHeaderParams;
};