import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { BadgeCheckV2MutationRequest, BadgeCheckV2MutationResponse } from "../models/BadgeCheckV2";
import type { UseMutationOptions } from "@tanstack/react-query";

 type BadgeCheckV2Client = typeof client<BadgeCheckV2MutationResponse, Error, BadgeCheckV2MutationRequest>;
type BadgeCheckV2 = {
    data: BadgeCheckV2MutationResponse;
    error: Error;
    request: BadgeCheckV2MutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: BadgeCheckV2MutationResponse;
    client: {
        parameters: Partial<Parameters<BadgeCheckV2Client>[0]>;
        return: Awaited<ReturnType<BadgeCheckV2Client>>;
    };
};
/**
 * @description Badge NFT check
 * @summary badge check
 * @link /v2/assets/nft/badges/check
 */
export function useBadgeCheckV2Hook(options: {
    mutation?: UseMutationOptions<BadgeCheckV2["response"], BadgeCheckV2["error"], BadgeCheckV2["request"]>;
    client?: BadgeCheckV2["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<BadgeCheckV2["data"], BadgeCheckV2["error"], BadgeCheckV2["request"]>({
                method: "post",
                url: `/v2/assets/nft/badges/check`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}