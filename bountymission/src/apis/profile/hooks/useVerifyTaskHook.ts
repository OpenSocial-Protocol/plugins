import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { VerifyTaskMutationRequest, VerifyTaskMutationResponse } from "../models/VerifyTask";
import type { UseMutationOptions } from "@tanstack/react-query";

 type VerifyTaskClient = typeof client<VerifyTaskMutationResponse, Error, VerifyTaskMutationRequest>;
type VerifyTask = {
    data: VerifyTaskMutationResponse;
    error: Error;
    request: VerifyTaskMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: VerifyTaskMutationResponse;
    client: {
        parameters: Partial<Parameters<VerifyTaskClient>[0]>;
        return: Awaited<ReturnType<VerifyTaskClient>>;
    };
};
/**
 * @description Submit Apply
 * @summary Submit Apply
 * @link /v1/quests/verifytask
 */
export function useVerifyTaskHook(options: {
    mutation?: UseMutationOptions<VerifyTask["response"], VerifyTask["error"], VerifyTask["request"]>;
    client?: VerifyTask["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<VerifyTask["data"], VerifyTask["error"], VerifyTask["request"]>({
                method: "post",
                url: `/v1/quests/verifytask`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}