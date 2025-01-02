import type { WebResultUseCodeResponseVo } from "./WebResultUseCodeResponseVo";
import type { CodeUseVo } from "./CodeUseVo";

 /**
 * @description Successful operation
*/
export type UseCode200 = WebResultUseCodeResponseVo;
export type UseCodeMutationRequest = CodeUseVo;
/**
 * @description Successful operation
*/
export type UseCodeMutationResponse = Omit<NonNullable<WebResultUseCodeResponseVo>, "responseEnum">;
export type UseCodeMutation = {
    Response: UseCodeMutationResponse;
    Request: UseCodeMutationRequest;
};