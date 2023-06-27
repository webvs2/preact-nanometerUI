import chalk from "chalk"; // 引入chalk库，用来改变命令行中输出内容的样式

// const path = require('path')
import path from "path"; // 引入path库，用来处理文件路径

import fs from "fs"; // 引入fs库，用来读写文件
const pathResolve = (...file) => path.resolve('./',...file); // 定义一个路径解析函数
const log = (message) => console.log(chalk.green(`${message}`));
const successLog = (message) => console.log(chalk.blue(`${message}`));
const errorLog = (error) => console.log(chalk.red(`${error}`));

import { functionTemplate } from "./template.js"; // 引入模板文件

log("Please enter a file name:");
process.stdin.on("data", async (chunk) => {
  const inputName = String(chunk).trim().toString();
console.log('inputName',inputName)
  const projectDirectory = pathResolve("./src/plugins", inputName); // 生成目录放在src下
  console.log('projectDirectory',projectDirectory)
  const hasprojectDirectory = fs.existsSync(projectDirectory);
  if (hasprojectDirectory) {
    // 判断目录是否存在
    errorLog(`The project directory already exists!`);
  } else {
    log(`Building the file directory ${projectDirectory}`);
    dotExistDirectoryCreate(pathResolve(projectDirectory)); // 创建文件夹
    await generateFile(
      pathResolve(projectDirectory, `${inputName}.tsx`),
      functionTemplate
    ); // 创建文件
    successLog("File generated successfully");
  }
  process.stdin.emit("end");
});
process.stdin.on("end", () => {
  // 结束后退出  process.exit()
});

// 创建文件
function generateFile(path, data) {
  if (fs.existsSync(path)) {
    errorLog(`${path},File already exists`);
    return;
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, "utf8", (err) => {
      if (err) {
        errorLog(err.message);
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
}

// 创建文件夹
function dotExistDirectoryCreate(directory) {
  return new Promise((resolve) => {
    mkdirs(directory, function () {
      resolve();
    });
  });
}
// 递归创建目录
function mkdirs(directory, callback) {
  const exists = fs.existsSync(directory);
  if (exists) {
    callback();
  } else {
    mkdirs(path.dirname(directory), () => {
      fs.mkdirSync(directory);
      callback();
    });
  }
}
