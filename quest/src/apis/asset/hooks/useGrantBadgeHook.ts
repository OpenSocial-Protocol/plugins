import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { GrantBadgeMutationRequest, GrantBadgeMutationResponse } from "../models/GrantBadge";
import type { UseMutationOptions } from "@tanstack/react-query";

 type GrantBadgeClient = typeof client<GrantBadgeMutationResponse, Error, GrantBadgeMutationRequest>;
type GrantBadge = {
    data: GrantBadgeMutationResponse;
    error: Error;
    request: GrantBadgeMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GrantBadgeMutationResponse;
    client: {
        parameters: Partial<Parameters<GrantBadgeClient>[0]>;
        return: Awaited<ReturnType<GrantBadgeClient>>;
    };
};
/**
 * @description grant badge
 * @summary grant badge
 * @link /v1/assets/nft/badges
 */
export function useGrantBadgeHook(options: {
    mutation?: UseMutationOptions<GrantBadge["response"], GrantBadge["error"], GrantBadge["request"]>;
    client?: GrantBadge["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<GrantBadge["data"], GrantBadge["error"], GrantBadge["request"]>({
                method: "post",
                url: `/v1/assets/nft/badges`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}