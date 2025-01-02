import client from "@app/modules/client.quests";
import { useMutation } from "@tanstack/react-query";
import type { FulfillTaskMutationResponse, FulfillTaskQueryParams, FulfillTaskHeaderParams, FulfillTask400 } from "../models/FulfillTask";
import type { UseMutationOptions } from "@tanstack/react-query";

 type FulfillTaskClient = typeof client<FulfillTaskMutationResponse, FulfillTask400, never>;
type FulfillTask = {
    data: FulfillTaskMutationResponse;
    error: FulfillTask400;
    request: never;
    pathParams: never;
    queryParams: FulfillTaskQueryParams;
    headerParams: FulfillTaskHeaderParams;
    response: FulfillTaskMutationResponse;
    client: {
        parameters: Partial<Parameters<FulfillTaskClient>[0]>;
        return: Awaited<ReturnType<FulfillTaskClient>>;
    };
};
/**
 * @summary 做任务
 * @link /s2/tasks/fulfill
 */
export function useFulfillTaskHook(params: FulfillTask["queryParams"], headers: FulfillTask["headerParams"], options: {
    mutation?: UseMutationOptions<FulfillTask["response"], FulfillTask["error"], FulfillTask["request"]>;
    client?: FulfillTask["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<FulfillTask["data"], FulfillTask["error"], FulfillTask["request"]>({
                method: "post",
                url: `/s2/tasks/fulfill`,
                params,
                headers: { ...headers, ...clientOptions.headers },
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}