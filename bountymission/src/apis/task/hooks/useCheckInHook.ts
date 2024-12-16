import client from "@app/modules/client.quests";
import { useMutation } from "@tanstack/react-query";
import type { CheckInMutationResponse, CheckInHeaderParams } from "../models/CheckIn";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CheckInClient = typeof client<CheckInMutationResponse, Error, never>;
type CheckIn = {
    data: CheckInMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: CheckInHeaderParams;
    response: CheckInMutationResponse;
    client: {
        parameters: Partial<Parameters<CheckInClient>[0]>;
        return: Awaited<ReturnType<CheckInClient>>;
    };
};
/**
 * @summary check in
 * @link /v2/tasks/checkin
 */
export function useCheckInHook(headers: CheckIn["headerParams"], options: {
    mutation?: UseMutationOptions<CheckIn["response"], CheckIn["error"], CheckIn["request"]>;
    client?: CheckIn["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<CheckIn["data"], CheckIn["error"], CheckIn["request"]>({
                method: "post",
                url: `/v2/tasks/checkin`,
                headers: { ...headers, ...clientOptions.headers },
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}