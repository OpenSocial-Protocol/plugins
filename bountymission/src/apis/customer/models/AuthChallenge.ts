import type { WebResultNonceVo } from "./WebResultNonceVo";

 export type AuthChallengeQueryParams = {
    /**
     * @description 用户第三方钱包的公钥
     * @type string
    */
    address: string;
    /**
     * @description 链id
     * @type string
    */
    chainId: string;
};
/**
 * @description Successful operation
*/
export type AuthChallenge200 = WebResultNonceVo;
/**
 * @description Successful operation
*/
export type AuthChallengeMutationResponse = Omit<NonNullable<WebResultNonceVo>, "responseEnum">;
export type AuthChallengeMutation = {
    Response: AuthChallengeMutationResponse;
    QueryParams: AuthChallengeQueryParams;
};