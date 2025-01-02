


if (pluginApi.type === "ssr") {
  require("./codeJs/preview")
} else {
  require("./codeJs/mainCode")
}