/*
 * test.js
 *
 * Copyright (c) 2022, 2023 Xiongfei Shi
 *
 * Author: Xiongfei Shi <xiongfei.shi(a)icloud.com>
 * License: Apache-2.0
 *
 * https://github.com/shixiongfei/napi-ctp
 */

const ctp = require(".");
const fs = require("node:fs");

if (!fs.existsSync("./flow/")) {
  fs.mkdirSync("./flow/", { recursive: true });
}
const trader = ctp.createTrader("./flow/", "tcp://180.168.146.187:10202");

if (!fs.existsSync("./flowMd/")) {
  fs.mkdirSync("./flowMd/", { recursive: true });
}
const md = ctp.createMarketData("./flowMd/", "tcp://180.168.146.187:10212");

console.log(trader.getApiVersion());
console.log(md.getApiVersion());
