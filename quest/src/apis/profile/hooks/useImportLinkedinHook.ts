import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { ImportLinkedinMutationResponse } from "../models/ImportLinkedin";
import type { UseMutationOptions } from "@tanstack/react-query";

 type ImportLinkedinClient = typeof client<ImportLinkedinMutationResponse, Error, never>;
type ImportLinkedin = {
    data: ImportLinkedinMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: ImportLinkedinMutationResponse;
    client: {
        parameters: Partial<Parameters<ImportLinkedinClient>[0]>;
        return: Awaited<ReturnType<ImportLinkedinClient>>;
    };
};
/**
 * @description 导入linkedin信息
 * @summary 导入linkedin信息
 * @link /v1/user/linkedin/import
 * @deprecated
 */
export function useImportLinkedinHook(options: {
    mutation?: UseMutationOptions<ImportLinkedin["response"], ImportLinkedin["error"], ImportLinkedin["request"]>;
    client?: ImportLinkedin["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<ImportLinkedin["data"], ImportLinkedin["error"], ImportLinkedin["request"]>({
                method: "post",
                url: `/v1/user/linkedin/import`,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}