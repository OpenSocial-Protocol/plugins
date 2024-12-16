import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { AddEducationMutationRequest, AddEducationMutationResponse } from "../models/AddEducation";
import type { UseMutationOptions } from "@tanstack/react-query";

 type AddEducationClient = typeof client<AddEducationMutationResponse, Error, AddEducationMutationRequest>;
type AddEducation = {
    data: AddEducationMutationResponse;
    error: Error;
    request: AddEducationMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: AddEducationMutationResponse;
    client: {
        parameters: Partial<Parameters<AddEducationClient>[0]>;
        return: Awaited<ReturnType<AddEducationClient>>;
    };
};
/**
 * @description 增加用户教育经历
 * @summary 增加用户教育经历
 * @link /v1/user/education
 * @deprecated
 */
export function useAddEducationHook(options: {
    mutation?: UseMutationOptions<AddEducation["response"], AddEducation["error"], AddEducation["request"]>;
    client?: AddEducation["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<AddEducation["data"], AddEducation["error"], AddEducation["request"]>({
                method: "post",
                url: `/v1/user/education`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}