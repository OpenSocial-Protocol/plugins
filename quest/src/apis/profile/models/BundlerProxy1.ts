import type { WebResultBundlerProxy } from "./WebResultBundlerProxy";

 /**
 * @description OK
*/
export type BundlerProxy1200 = WebResultBundlerProxy;
export type BundlerProxy1MutationRequest = object;
/**
 * @description OK
*/
export type BundlerProxy1MutationResponse = Omit<NonNullable<WebResultBundlerProxy>, "responseEnum">;
export type BundlerProxy1Mutation = {
    Response: BundlerProxy1MutationResponse;
    Request: BundlerProxy1MutationRequest;
};