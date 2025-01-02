import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { UpdateEducationMutationRequest, UpdateEducationMutationResponse } from "../models/UpdateEducation";
import type { UseMutationOptions } from "@tanstack/react-query";

 type UpdateEducationClient = typeof client<UpdateEducationMutationResponse, Error, UpdateEducationMutationRequest>;
type UpdateEducation = {
    data: UpdateEducationMutationResponse;
    error: Error;
    request: UpdateEducationMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: UpdateEducationMutationResponse;
    client: {
        parameters: Partial<Parameters<UpdateEducationClient>[0]>;
        return: Awaited<ReturnType<UpdateEducationClient>>;
    };
};
/**
 * @description 修改用户工作经历
 * @summary 修改用户工作经历
 * @link /v1/user/education
 * @deprecated
 */
export function useUpdateEducationHook(options: {
    mutation?: UseMutationOptions<UpdateEducation["response"], UpdateEducation["error"], UpdateEducation["request"]>;
    client?: UpdateEducation["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<UpdateEducation["data"], UpdateEducation["error"], UpdateEducation["request"]>({
                method: "put",
                url: `/v1/user/education`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}