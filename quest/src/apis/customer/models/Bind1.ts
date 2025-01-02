import type { WebResponseBoolean } from "./WebResponseBoolean";

 export type Bind1QueryParams = {
    /**
     * @description IM用户ID
     * @type string
    */
    imUid: string;
    /**
     * @description 设备locale
     * @type string | undefined
    */
    locale?: string;
};
export type Bind1HeaderParams = {
    /**
     * @description 设备ID
     * @type string
    */
    device_id: string;
    /**
     * @description 业务线
     * @type string
    */
    saas_id: string;
};
/**
 * @description Successful operation
*/
export type Bind1200 = WebResponseBoolean;
/**
 * @description Successful operation
*/
export type Bind1MutationResponse = WebResponseBoolean;
export type Bind1Mutation = {
    Response: Bind1MutationResponse;
    QueryParams: Bind1QueryParams;
    HeaderParams: Bind1HeaderParams;
};