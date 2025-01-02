export function encodeURIStrWithExtensions(str) {
  return encodeURIComponent(str)
    .replace(/\./g, "%2E")
    .replace(/\_/g, "%5F")
    .replace(/\!/g, "%21")
    .replace(/\~/g, "%7E")
    .replace(/\*/g, "%2A")
    .replace(/\'/g, "%27")
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/\-/g, "%2D");
}
