import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { TasksFulfillMutationRequest, TasksFulfillMutationResponse } from "../models/TasksFulfill";
import type { UseMutationOptions } from "@tanstack/react-query";

 type TasksFulfillClient = typeof client<TasksFulfillMutationResponse, Error, TasksFulfillMutationRequest>;
type TasksFulfill = {
    data: TasksFulfillMutationResponse;
    error: Error;
    request: TasksFulfillMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: TasksFulfillMutationResponse;
    client: {
        parameters: Partial<Parameters<TasksFulfillClient>[0]>;
        return: Awaited<ReturnType<TasksFulfillClient>>;
    };
};
/**
 * @description Submit Apply
 * @summary Submit Apply
 * @link /s1/tasks/fulfill
 */
export function useTasksFulfillHook(options: {
    mutation?: UseMutationOptions<TasksFulfill["response"], TasksFulfill["error"], TasksFulfill["request"]>;
    client?: TasksFulfill["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<TasksFulfill["data"], TasksFulfill["error"], TasksFulfill["request"]>({
                method: "post",
                url: `/s1/tasks/fulfill`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}