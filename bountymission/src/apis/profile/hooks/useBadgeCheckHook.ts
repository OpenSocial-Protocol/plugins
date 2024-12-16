import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { BadgeCheckMutationResponse } from "../models/BadgeCheck";
import type { UseMutationOptions } from "@tanstack/react-query";

 type BadgeCheckClient = typeof client<BadgeCheckMutationResponse, Error, never>;
type BadgeCheck = {
    data: BadgeCheckMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: BadgeCheckMutationResponse;
    client: {
        parameters: Partial<Parameters<BadgeCheckClient>[0]>;
        return: Awaited<ReturnType<BadgeCheckClient>>;
    };
};
/**
 * @description Badge NFT check
 * @summary badge check
 * @link /v1/assets/nft/badges/check
 */
export function useBadgeCheckHook(options: {
    mutation?: UseMutationOptions<BadgeCheck["response"], BadgeCheck["error"], BadgeCheck["request"]>;
    client?: BadgeCheck["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<BadgeCheck["data"], BadgeCheck["error"], BadgeCheck["request"]>({
                method: "post",
                url: `/v1/assets/nft/badges/check`,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}