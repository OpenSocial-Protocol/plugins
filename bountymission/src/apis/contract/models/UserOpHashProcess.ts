import type { WebResultUserOpHashProcess } from "./WebResultUserOpHashProcess";
import type { UserOpHashProcessRequestVo } from "./UserOpHashProcessRequestVo";

 /**
 * @description OK
*/
export type UserOpHashProcess200 = WebResultUserOpHashProcess;
export type UserOpHashProcessMutationRequest = UserOpHashProcessRequestVo;
/**
 * @description OK
*/
export type UserOpHashProcessMutationResponse = Omit<NonNullable<WebResultUserOpHashProcess>, "responseEnum">;
export type UserOpHashProcessMutation = {
    Response: UserOpHashProcessMutationResponse;
    Request: UserOpHashProcessMutationRequest;
};