import type { CodeCheckResponseVo } from "./CodeCheckResponseVo";
import type { CodeCheckRequestVo } from "./CodeCheckRequestVo";

 /**
 * @description Successful operation
*/
export type CodeCheck200 = CodeCheckResponseVo;
export type CodeCheckMutationRequest = CodeCheckRequestVo;
/**
 * @description Successful operation
*/
export type CodeCheckMutationResponse = Omit<NonNullable<CodeCheckResponseVo>, "responseEnum">;
export type CodeCheckMutation = {
    Response: CodeCheckMutationResponse;
    Request: CodeCheckMutationRequest;
};