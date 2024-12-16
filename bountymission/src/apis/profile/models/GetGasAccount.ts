import type { WebResultUserAccountVo } from "./WebResultUserAccountVo";

 /**
 * @description OK
*/
export type GetGasAccount200 = WebResultUserAccountVo;
/**
 * @description OK
*/
export type GetGasAccountQueryResponse = Omit<NonNullable<WebResultUserAccountVo>, "responseEnum">;
export type GetGasAccountQuery = {
    Response: GetGasAccountQueryResponse;
};