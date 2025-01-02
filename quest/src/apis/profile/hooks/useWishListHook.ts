import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { WishListMutationRequest, WishListMutationResponse } from "../models/WishList";
import type { UseMutationOptions } from "@tanstack/react-query";

 type WishListClient = typeof client<WishListMutationResponse, Error, WishListMutationRequest>;
type WishList = {
    data: WishListMutationResponse;
    error: Error;
    request: WishListMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: WishListMutationResponse;
    client: {
        parameters: Partial<Parameters<WishListClient>[0]>;
        return: Awaited<ReturnType<WishListClient>>;
    };
};
/**
 * @description Wish list inquiry
 * @summary Inquiry wish list
 * @link /v1/wish
 */
export function useWishListHook(options: {
    mutation?: UseMutationOptions<WishList["response"], WishList["error"], WishList["request"]>;
    client?: WishList["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<WishList["data"], WishList["error"], WishList["request"]>({
                method: "post",
                url: `/v1/wish`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}