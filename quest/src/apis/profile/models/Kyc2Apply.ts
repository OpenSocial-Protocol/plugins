import type { WebResponse } from "./WebResponse";

 export type Kyc2ApplyQueryParams = {
    /**
     * @description 居住详细地址
     * @type string | undefined
    */
    address?: string;
    /**
     * @description 居住证明/多个逗号隔开
     * @type string | undefined
    */
    residentProof?: string;
    /**
     * @description 问卷调查结果
     * @type string
    */
    surveyResults: string;
    /**
     * @description 城市
     * @type string | undefined
    */
    city?: string;
    /**
     * @description 邮政编码
     * @type string | undefined
    */
    postalCode?: string;
};
/**
 * @description OK
*/
export type Kyc2Apply200 = WebResponse;
/**
 * @description OK
*/
export type Kyc2ApplyMutationResponse = WebResponse;
export type Kyc2ApplyMutation = {
    Response: Kyc2ApplyMutationResponse;
    QueryParams: Kyc2ApplyQueryParams;
};