import type { WebResponse } from "./WebResponse";

 /**
 * @description OK
*/
export type KycResult200 = WebResponse;
/**
 * @description OK
*/
export type KycResultQueryResponse = WebResponse;
export type KycResultQuery = {
    Response: KycResultQueryResponse;
};