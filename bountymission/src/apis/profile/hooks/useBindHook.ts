import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { BindMutationResponse, BindQueryParams, BindHeaderParams } from "../models/Bind";
import type { UseMutationOptions } from "@tanstack/react-query";

 type BindClient = typeof client<BindMutationResponse, Error, never>;
type Bind = {
    data: BindMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: BindQueryParams;
    headerParams: BindHeaderParams;
    response: BindMutationResponse;
    client: {
        parameters: Partial<Parameters<BindClient>[0]>;
        return: Awaited<ReturnType<BindClient>>;
    };
};
/**
 * @description IM用户绑定、打标签、个人资料更新
 * @summary IM用户绑定
 * @link /v1/customer/im/bind
 */
export function useBindHook(params: Bind["queryParams"], headers: Bind["headerParams"], options: {
    mutation?: UseMutationOptions<Bind["response"], Bind["error"], Bind["request"]>;
    client?: Bind["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<Bind["data"], Bind["error"], Bind["request"]>({
                method: "post",
                url: `/v1/customer/im/bind`,
                params,
                headers: { ...headers, ...clientOptions.headers },
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}