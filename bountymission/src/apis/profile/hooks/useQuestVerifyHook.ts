import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { QuestVerifyMutationRequest, QuestVerifyMutationResponse } from "../models/QuestVerify";
import type { UseMutationOptions } from "@tanstack/react-query";

 type QuestVerifyClient = typeof client<QuestVerifyMutationResponse, Error, QuestVerifyMutationRequest>;
type QuestVerify = {
    data: QuestVerifyMutationResponse;
    error: Error;
    request: QuestVerifyMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: QuestVerifyMutationResponse;
    client: {
        parameters: Partial<Parameters<QuestVerifyClient>[0]>;
        return: Awaited<ReturnType<QuestVerifyClient>>;
    };
};
/**
 * @description Submit Apply
 * @summary Submit Apply
 * @link /v1/quest/verify
 */
export function useQuestVerifyHook(options: {
    mutation?: UseMutationOptions<QuestVerify["response"], QuestVerify["error"], QuestVerify["request"]>;
    client?: QuestVerify["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<QuestVerify["data"], QuestVerify["error"], QuestVerify["request"]>({
                method: "post",
                url: `/v1/quest/verify`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}