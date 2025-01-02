import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { QuestPostMutationRequest, QuestPostMutationResponse } from "../models/QuestPost";
import type { UseMutationOptions } from "@tanstack/react-query";

 type QuestPostClient = typeof client<QuestPostMutationResponse, Error, QuestPostMutationRequest>;
type QuestPost = {
    data: QuestPostMutationResponse;
    error: Error;
    request: QuestPostMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: QuestPostMutationResponse;
    client: {
        parameters: Partial<Parameters<QuestPostClient>[0]>;
        return: Awaited<ReturnType<QuestPostClient>>;
    };
};
/**
 * @description Submit Apply
 * @summary Submit Apply
 * @link /v1/quest/post
 */
export function useQuestPostHook(options: {
    mutation?: UseMutationOptions<QuestPost["response"], QuestPost["error"], QuestPost["request"]>;
    client?: QuestPost["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<QuestPost["data"], QuestPost["error"], QuestPost["request"]>({
                method: "post",
                url: `/v1/quest/post`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}