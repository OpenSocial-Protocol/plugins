import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { NftMintCheckMutationResponse, NftMintCheckQueryParams } from "../models/NftMintCheck";
import type { UseMutationOptions } from "@tanstack/react-query";

 type NftMintCheckClient = typeof client<NftMintCheckMutationResponse, Error, never>;
type NftMintCheck = {
    data: NftMintCheckMutationResponse;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: NftMintCheckQueryParams;
    headerParams: never;
    response: NftMintCheckMutationResponse;
    client: {
        parameters: Partial<Parameters<NftMintCheckClient>[0]>;
        return: Awaited<ReturnType<NftMintCheckClient>>;
    };
};
/**
 * @description NFT铸造检查 包括GenesisNFT/OG NFT/
 * @summary NFT铸造检查
 * @link /v1/assets/nft/mint/check
 */
export function useNftMintCheckHook(params?: NftMintCheck["queryParams"], options: {
    mutation?: UseMutationOptions<NftMintCheck["response"], NftMintCheck["error"], NftMintCheck["request"]>;
    client?: NftMintCheck["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<NftMintCheck["data"], NftMintCheck["error"], NftMintCheck["request"]>({
                method: "post",
                url: `/v1/assets/nft/mint/check`,
                params,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}