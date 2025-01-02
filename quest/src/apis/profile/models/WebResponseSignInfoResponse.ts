import type { SignInfoResponse } from "./SignInfoResponse";

 export type WebResponseSignInfoResponse = {
    /**
     * @type string | undefined
    */
    code?: string;
    /**
     * @type boolean | undefined
    */
    success?: boolean;
    /**
     * @type object | undefined
    */
    obj?: SignInfoResponse;
    /**
     * @type string | undefined
    */
    msgKey?: string;
};