import type { WebResponse } from "./WebResponse";

 export type RecaptchaQueryParams = {
    /**
     * @type string
    */
    token: string;
    /**
     * @default -1
     * @type integer | undefined, int32
    */
    type?: number;
};
/**
 * @description OK
*/
export type Recaptcha200 = WebResponse;
/**
 * @description OK
*/
export type RecaptchaMutationResponse = WebResponse;
export type RecaptchaMutation = {
    Response: RecaptchaMutationResponse;
    QueryParams: RecaptchaQueryParams;
};