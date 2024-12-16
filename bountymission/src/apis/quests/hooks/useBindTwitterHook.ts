import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { BindTwitterMutationRequest, BindTwitterMutationResponse } from "../models/BindTwitter";
import type { UseMutationOptions } from "@tanstack/react-query";

 type BindTwitterClient = typeof client<BindTwitterMutationResponse, Error, BindTwitterMutationRequest>;
type BindTwitter = {
    data: BindTwitterMutationResponse;
    error: Error;
    request: BindTwitterMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: BindTwitterMutationResponse;
    client: {
        parameters: Partial<Parameters<BindTwitterClient>[0]>;
        return: Awaited<ReturnType<BindTwitterClient>>;
    };
};
/**
 * @description Bind Twitter
 * @summary Bind Twitter
 * @link /v1/quests/bind/twitter
 */
export function useBindTwitterHook(options: {
    mutation?: UseMutationOptions<BindTwitter["response"], BindTwitter["error"], BindTwitter["request"]>;
    client?: BindTwitter["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<BindTwitter["data"], BindTwitter["error"], BindTwitter["request"]>({
                method: "post",
                url: `/v1/quests/bind/twitter`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}