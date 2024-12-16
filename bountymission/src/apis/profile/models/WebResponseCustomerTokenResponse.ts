import type { CustomerTokenResponse } from "./CustomerTokenResponse";

 export type WebResponseCustomerTokenResponse = {
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
    obj?: CustomerTokenResponse;
    /**
     * @type string | undefined
    */
    msgKey?: string;
};