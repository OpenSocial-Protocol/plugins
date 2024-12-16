import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { CustomerBindEmailMutationResponse, CustomerBindEmailQueryParams, CustomerBindEmailHeaderParams } from "../models/CustomerBindEmail";
import type { UseMutationOptions } from "@tanstack/react-query";

 type CustomerBindEmailClient = typeof client<CustomerBindEmailMutationResponse, Error, never>;
type CustomerBindEmail = {
    data: CustomerBindEmailMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: CustomerBindEmailQueryParams;
    headerParams: CustomerBindEmailHeaderParams;
    response: CustomerBindEmailMutationResponse;
    client: {
        parameters: Partial<Parameters<CustomerBindEmailClient>[0]>;
        return: Awaited<ReturnType<CustomerBindEmailClient>>;
    };
};
/**
 * @description bind email
 * @summary /customer/emails/bind
 * @link /v2/customer/emails/bind
 */
export function useCustomerBindEmailHook(params: CustomerBindEmail["queryParams"], headers: CustomerBindEmail["headerParams"], options: {
    mutation?: UseMutationOptions<CustomerBindEmail["response"], CustomerBindEmail["error"], CustomerBindEmail["request"]>;
    client?: CustomerBindEmail["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<CustomerBindEmail["data"], CustomerBindEmail["error"], CustomerBindEmail["request"]>({
                method: "post",
                url: `/v2/customer/emails/bind`,
                params,
                headers: { ...headers, ...clientOptions.headers },
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}