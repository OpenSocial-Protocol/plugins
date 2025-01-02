import type { WebResultBundlerProxy } from "./WebResultBundlerProxy";
import type { OffchainProcessRequestVo } from "./OffchainProcessRequestVo";

 /**
 * @description OK
*/
export type BundlerProxy200 = WebResultBundlerProxy;
export type BundlerProxyMutationRequest = OffchainProcessRequestVo;
/**
 * @description OK
*/
export type BundlerProxyMutationResponse = Omit<NonNullable<WebResultBundlerProxy>, "responseEnum">;
export type BundlerProxyMutation = {
    Response: BundlerProxyMutationResponse;
    Request: BundlerProxyMutationRequest;
};