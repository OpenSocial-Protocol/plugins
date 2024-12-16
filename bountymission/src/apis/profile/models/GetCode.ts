import type { WebResponse } from "./WebResponse";

 export type GetCodeQueryParams = {
    /**
     * @description 邮箱
     * @default ""
     * @type string
    */
    email: string;
    /**
     * @description 业务类型(14: 登录)
     * @default -1
     * @type integer, int32
    */
    businessType: number;
};
/**
 * @description Successful operation
*/
export type GetCode200 = WebResponse;
/**
 * @description Successful operation
*/
export type GetCodeMutationResponse = WebResponse;
export type GetCodeMutation = {
    Response: GetCodeMutationResponse;
    QueryParams: GetCodeQueryParams;
};