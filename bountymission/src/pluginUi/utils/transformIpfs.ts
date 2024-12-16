const ipfsGateway =
  process.env.EXPO_PUBLIC_IPFS_GATEWAY || "https://test.trexprotocol.com";

export const transformIpfs = (
  ipfs: string,
  width?: number,
  quality: number = 85
) => {
  if (typeof ipfs !== "string") return ipfs;
  if (ipfs.startsWith("http://") || ipfs.startsWith("https://")) {
    if (ipfs?.includes(".") && !ipfs?.includes("?")) {
      return `${ipfs}?image_process=resize,w_${width}`;
    }
    return ipfs;
  }
  if (!ipfs.startsWith("ipfs://")) return ipfs;
  if (width > 1) {
    const result = ipfs.replace(
      "ipfs://",
      `${ipfsGateway}/cdn-cgi/image/width=${Math.floor(
        width
      )},quality=${quality}/ipfs/`
    );
    return result;
  }
  return ipfs.replace("ipfs://", `${ipfsGateway}/ipfs/`);
};
