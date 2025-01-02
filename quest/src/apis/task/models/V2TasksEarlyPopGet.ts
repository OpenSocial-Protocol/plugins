import type { WebResultTaskPopVo } from "./WebResultTaskPopVo";

 export type V2TasksEarlyPopGetHeaderParams = {
    /**
     * @description saasId
     * @type string
    */
    saas_id: string;
};
/**
 * @description 成功
*/
export type V2TasksEarlyPopGet200 = WebResultTaskPopVo;
/**
 * @description 成功
*/
export type V2TasksEarlyPopGetQueryResponse = Omit<NonNullable<WebResultTaskPopVo>, "responseEnum">;
export type V2TasksEarlyPopGetQuery = {
    Response: V2TasksEarlyPopGetQueryResponse;
    HeaderParams: V2TasksEarlyPopGetHeaderParams;
};