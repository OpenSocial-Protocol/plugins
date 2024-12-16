import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { BindMutationRequest, BindMutationResponse, BindHeaderParams } from "../models/Bind";
import type { UseMutationOptions } from "@tanstack/react-query";

 type BindClient = typeof client<BindMutationResponse, Error, BindMutationRequest>;
type Bind = {
    data: BindMutationResponse;
    error: Error;
    request: BindMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: BindHeaderParams;
    response: BindMutationResponse;
    client: {
        parameters: Partial<Parameters<BindClient>[0]>;
        return: Awaited<ReturnType<BindClient>>;
    };
};
/**
 * @summary 绑定第三方平台
 * @link /v2/customer/bind
 */
export function useBindHook(headers?: Bind["headerParams"], options: {
    mutation?: UseMutationOptions<Bind["response"], Bind["error"], Bind["request"]>;
    client?: Bind["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<Bind["data"], Bind["error"], Bind["request"]>({
                method: "post",
                url: `/v2/customer/bind`,
                data,
                headers: { ...headers, ...clientOptions.headers },
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}