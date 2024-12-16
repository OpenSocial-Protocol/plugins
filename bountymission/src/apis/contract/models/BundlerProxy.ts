import type { WebResultBundlerProxy } from "./WebResultBundlerProxy";

 /**
 * @description OK
*/
export type BundlerProxy200 = WebResultBundlerProxy;
export type BundlerProxyMutationRequest = object;
/**
 * @description OK
*/
export type BundlerProxyMutationResponse = Omit<NonNullable<WebResultBundlerProxy>, "responseEnum">;
export type BundlerProxyMutation = {
    Response: BundlerProxyMutationResponse;
    Request: BundlerProxyMutationRequest;
};