import type { WalletTransactionVo } from "./WalletTransactionVo";

 export type WebResultGetWalletTransactionResponseVoAllOfObj = {
    /**
     * @type string | undefined
    */
    nextToken?: string;
    /**
     * @type array | undefined
    */
    rows?: WalletTransactionVo[];
};