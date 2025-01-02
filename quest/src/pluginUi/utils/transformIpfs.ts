import { ConfigManager } from "@app/config/configManager";

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
      `${ConfigManager.getInstance().ipfsApi}/cdn-cgi/image/width=${Math.floor(
        width
      )},quality=${quality}/ipfs/`
    );
    return result;
  }
  return ipfs.replace("ipfs://", `${ConfigManager.getInstance().ipfsApi}/ipfs/`);
};
