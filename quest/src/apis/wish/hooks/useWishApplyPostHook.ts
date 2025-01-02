import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { WishApplyPostMutationRequest, WishApplyPostMutationResponse } from "../models/WishApplyPost";
import type { UseMutationOptions } from "@tanstack/react-query";

 type WishApplyPostClient = typeof client<WishApplyPostMutationResponse, Error, WishApplyPostMutationRequest>;
type WishApplyPost = {
    data: WishApplyPostMutationResponse;
    error: Error;
    request: WishApplyPostMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: WishApplyPostMutationResponse;
    client: {
        parameters: Partial<Parameters<WishApplyPostClient>[0]>;
        return: Awaited<ReturnType<WishApplyPostClient>>;
    };
};
/**
 * @description Submit Apply
 * @summary Submit Apply
 * @link /v1/wish/apply
 */
export function useWishApplyPostHook(options: {
    mutation?: UseMutationOptions<WishApplyPost["response"], WishApplyPost["error"], WishApplyPost["request"]>;
    client?: WishApplyPost["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<WishApplyPost["data"], WishApplyPost["error"], WishApplyPost["request"]>({
                method: "post",
                url: `/v1/wish/apply`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}