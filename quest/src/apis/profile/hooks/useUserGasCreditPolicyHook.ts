import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { UserGasCreditPolicyMutationRequest, UserGasCreditPolicyMutationResponse } from "../models/UserGasCreditPolicy";
import type { UseMutationOptions } from "@tanstack/react-query";

 type UserGasCreditPolicyClient = typeof client<UserGasCreditPolicyMutationResponse, Error, UserGasCreditPolicyMutationRequest>;
type UserGasCreditPolicy = {
    data: UserGasCreditPolicyMutationResponse;
    error: Error;
    request: UserGasCreditPolicyMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: UserGasCreditPolicyMutationResponse;
    client: {
        parameters: Partial<Parameters<UserGasCreditPolicyClient>[0]>;
        return: Awaited<ReturnType<UserGasCreditPolicyClient>>;
    };
};
/**
 * @description get policy of gas credit
 * @summary /gas_credit/policy
 * @link /v1/gasCredit/policy
 */
export function useUserGasCreditPolicyHook(options: {
    mutation?: UseMutationOptions<UserGasCreditPolicy["response"], UserGasCreditPolicy["error"], UserGasCreditPolicy["request"]>;
    client?: UserGasCreditPolicy["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<UserGasCreditPolicy["data"], UserGasCreditPolicy["error"], UserGasCreditPolicy["request"]>({
                method: "post",
                url: `/v1/gasCredit/policy`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}