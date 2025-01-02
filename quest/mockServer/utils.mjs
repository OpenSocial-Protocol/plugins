#!/usr/bin/env zx

export const readEnv = (envPath) => {
  // 获取 .env 文件路径
  // const envPath = path.join(pwdPath, "../.env");

  // 读取 .env 文件内容
  const envFileContent = fs.readFileSync(envPath, "utf8");

  // 将 .env 文件内容按行拆分
  const envLines = envFileContent.split("\n");

  // 初始化一个对象存储环境变量
  const envVars = {};

  // 遍历每一行，解析环境变量
  envLines.forEach((line) => {
    // 跳过空行和注释行
    if (line.trim() && !line.startsWith("#")) {
      const [key, value] = line.split("=");
      if (key && value) {
        envVars[key.trim()] = value.trim();
      }
    }
  });
  return envVars;
};

export const readIp = async () => {
  const localIpStdout = await $`(ifconfig | grep 'inet ' | grep -v '127.0.0.1' | awk '{print $2}' | grep -E  "192|172")`;
  const pwdPath = process.cwd();

  const localIp = localIpStdout.stdout.trim();
  // return "127.0.0.1";
  // return localIp
  return "localhost"
};

export const baseInfo = () => {
  // env dev test
  const env = argv.e;
  const configInfo =
    env === "test"
      ? require("./test.config.json")
      : require("./dev.config.json");
  return configInfo;
};
