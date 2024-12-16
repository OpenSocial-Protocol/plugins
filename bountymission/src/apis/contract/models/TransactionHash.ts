import type { WebResultTransactionHashProcess } from "./WebResultTransactionHashProcess";
import type { TransactionHashProcessRequestVo } from "./TransactionHashProcessRequestVo";

 /**
 * @description OK
*/
export type TransactionHash200 = WebResultTransactionHashProcess;
export type TransactionHashMutationRequest = TransactionHashProcessRequestVo;
/**
 * @description OK
*/
export type TransactionHashMutationResponse = Omit<NonNullable<WebResultTransactionHashProcess>, "responseEnum">;
export type TransactionHashMutation = {
    Response: TransactionHashMutationResponse;
    Request: TransactionHashMutationRequest;
};