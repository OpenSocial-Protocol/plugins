import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { RecaptchaMutationResponse, RecaptchaQueryParams } from "../models/Recaptcha";
import type { UseMutationOptions } from "@tanstack/react-query";

 type RecaptchaClient = typeof client<RecaptchaMutationResponse, Error, never>;
type Recaptcha = {
    data: RecaptchaMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: RecaptchaQueryParams;
    headerParams: never;
    response: RecaptchaMutationResponse;
    client: {
        parameters: Partial<Parameters<RecaptchaClient>[0]>;
        return: Awaited<ReturnType<RecaptchaClient>>;
    };
};
/**
 * @link /v1/customer/verify/recaptcha
 */
export function useRecaptchaHook(params: Recaptcha["queryParams"], options: {
    mutation?: UseMutationOptions<Recaptcha["response"], Recaptcha["error"], Recaptcha["request"]>;
    client?: Recaptcha["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<Recaptcha["data"], Recaptcha["error"], Recaptcha["request"]>({
                method: "post",
                url: `/v1/customer/verify/recaptcha`,
                params,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}