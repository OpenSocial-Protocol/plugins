import type { WebResponse } from "./WebResponse";

 export type SwitchVerifyQueryParams = {
    /**
     * @type integer, int32
    */
    type: number;
    /**
     * @type integer, int32
    */
    on: number;
    /**
     * @type string | undefined
    */
    token?: string;
};
/**
 * @description OK
*/
export type SwitchVerify200 = WebResponse;
/**
 * @description OK
*/
export type SwitchVerifyMutationResponse = WebResponse;
export type SwitchVerifyMutation = {
    Response: SwitchVerifyMutationResponse;
    QueryParams: SwitchVerifyQueryParams;
};