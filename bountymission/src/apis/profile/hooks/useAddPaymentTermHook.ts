import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { AddPaymentTermMutationRequest, AddPaymentTermMutationResponse } from "../models/AddPaymentTerm";
import type { UseMutationOptions } from "@tanstack/react-query";

 type AddPaymentTermClient = typeof client<AddPaymentTermMutationResponse, Error, AddPaymentTermMutationRequest>;
type AddPaymentTerm = {
    data: AddPaymentTermMutationResponse;
    error: Error;
    request: AddPaymentTermMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: AddPaymentTermMutationResponse;
    client: {
        parameters: Partial<Parameters<AddPaymentTermClient>[0]>;
        return: Awaited<ReturnType<AddPaymentTermClient>>;
    };
};
/**
 * @description 添加卡
 * @summary 添加卡
 * @link /v1/customer/payment/terms
 */
export function useAddPaymentTermHook(options: {
    mutation?: UseMutationOptions<AddPaymentTerm["response"], AddPaymentTerm["error"], AddPaymentTerm["request"]>;
    client?: AddPaymentTerm["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<AddPaymentTerm["data"], AddPaymentTerm["error"], AddPaymentTerm["request"]>({
                method: "post",
                url: `/v1/customer/payment/terms`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}