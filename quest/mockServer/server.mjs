#!/usr/bin/env zx

import path from "path";
import { readEnv, readIp, baseInfo } from "./utils.mjs"

const fs = require("fs");
const express = require("express");
const https = require("https");

const pwdPath = process.cwd();
// env dev test
const configInfo = baseInfo();

const manifestPath = path.join(pwdPath, configInfo.apiManifest);
const staticPath = path.join(pwdPath, configInfo.apiStatic);

const apiPath = "/api"
const serverMock = async () => {
  const localIp = await readIp()
  const port = configInfo.apiPort
  const testId = configInfo.apiPluginId ?? "static"
  const app = express();
  // 读取 SSL 证书和私钥
  const options = {
    key: fs.readFileSync(path.join(__dirname, './private-key.pem')), // 替换为你的私钥路径
    cert: fs.readFileSync(path.join(__dirname, './certificate.pem')) // 替换为你的证书路径
  };
  //设置跨域访问
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // 设置允许的请求源
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE'); // 设置允许的方法
    res.header('Access-Control-Allow-Headers', 'Content-Type'); // 设置允许的请求头
    next();
  });
  app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.send();
  });
  app.get("/api", function (req, res) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const response = require(manifestPath)
    response.id = 222
    res.send(require(manifestPath));
  });
  app.use(`/${testId}`, express.static(staticPath));
  const httpsServer = https.createServer(options, app);

  // app.listen(port, () => {
  //   console.log(`Example app listening on port ${port}`);
  // });

  // 启动服务器
  httpsServer.listen(port, () => {
    console.log(`Example app listening on port ${port} with HTTPS`);
  });


  console.log(chalk.green(`app started at port ${port}:`), chalk.blue(`https://${localIp}:${port}${apiPath}`));
  console.log(chalk.green(`app static at `), chalk.blue(`https://${localIp}:${port}/${testId}`));

};


serverMock(); 
