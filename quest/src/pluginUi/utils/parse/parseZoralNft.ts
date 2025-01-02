export function parseZoralNftUrl(url: string) {
  if (!url) {
    return { address: null, tokenId: null };
  }
  console.log("url", url);
  const isMatch = matchZoralNftUrl(url);
  if (!isMatch) {
    return null;
  }
  const regex = /bsep:(.*?)(?=\/)\/(\d+)/;
  const match = url.match(regex);
  if (match) {
    const address = match[1];
    const tokenId = match[2];

    return {
      address,
      tokenId,
    };
  }
  return { address: null, tokenId: null };
}

export function matchZoralNftUrl(url: string): boolean {
  const regex =
    /^https:\/\/.*\.zora\.co\/collect\/[a-z]{0,5}:0x[0-9a-zA-Z]*\/[0-9]*$/;
  return regex.test(url);
}
