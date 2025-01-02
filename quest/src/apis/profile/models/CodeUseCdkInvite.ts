import type { WebResultUseCodeResponseVo } from "./WebResultUseCodeResponseVo";
import type { CodeCdkInviteVo } from "./CodeCdkInviteVo";

 /**
 * @description Successful operation
*/
export type CodeUseCdkInvite200 = WebResultUseCodeResponseVo;
export type CodeUseCdkInviteMutationRequest = CodeCdkInviteVo;
/**
 * @description Successful operation
*/
export type CodeUseCdkInviteMutationResponse = Omit<NonNullable<WebResultUseCodeResponseVo>, "responseEnum">;
export type CodeUseCdkInviteMutation = {
    Response: CodeUseCdkInviteMutationResponse;
    Request: CodeUseCdkInviteMutationRequest;
};