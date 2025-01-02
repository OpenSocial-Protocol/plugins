import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { LogoutMutationResponse, LogoutHeaderParams } from "../models/Logout";
import type { UseMutationOptions } from "@tanstack/react-query";

 type LogoutClient = typeof client<LogoutMutationResponse, Error, never>;
type Logout = {
    data: LogoutMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: LogoutHeaderParams;
    response: LogoutMutationResponse;
    client: {
        parameters: Partial<Parameters<LogoutClient>[0]>;
        return: Awaited<ReturnType<LogoutClient>>;
    };
};
/**
 * @description 登出
 * @summary 登出
 * @link /customer/logout
 */
export function useLogoutHook(headers?: Logout["headerParams"], options: {
    mutation?: UseMutationOptions<Logout["response"], Logout["error"], Logout["request"]>;
    client?: Logout["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<Logout["data"], Logout["error"], Logout["request"]>({
                method: "post",
                url: `/customer/logout`,
                headers: { ...headers, ...clientOptions.headers },
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}