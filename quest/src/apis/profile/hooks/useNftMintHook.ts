import client from "@app/modules/client";
import { useMutation } from "@tanstack/react-query";
import type { NftMintMutationRequest, NftMintMutationResponse } from "../models/NftMint";
import type { UseMutationOptions } from "@tanstack/react-query";

 type NftMintClient = typeof client<NftMintMutationResponse, Error, NftMintMutationRequest>;
type NftMint = {
    data: NftMintMutationResponse;
    error: Error;
    request: NftMintMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: NftMintMutationResponse;
    client: {
        parameters: Partial<Parameters<NftMintClient>[0]>;
        return: Awaited<ReturnType<NftMintClient>>;
    };
};
/**
 * @description NFT铸造 包括GenesisNFT/OG NFT/Badge NFT
 * @summary NFT铸造
 * @link /v1/assets/nft/mint
 */
export function useNftMintHook(options: {
    mutation?: UseMutationOptions<NftMint["response"], NftMint["error"], NftMint["request"]>;
    client?: NftMint["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<NftMint["data"], NftMint["error"], NftMint["request"]>({
                method: "post",
                url: `/v1/assets/nft/mint`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}