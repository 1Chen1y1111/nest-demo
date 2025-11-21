import express, { Express } from "express";
import { Logger } from "./logger";

export class NestApplication {
  // 在内部私有化一个Express 实例
  private readonly app: Express = express();

  private readonly module: any;

  constructor(module: any) {
    this.module = module;
  }

  // 初始化应用
  async init() {
    // const controllers = Reflect.get
  }

  // 启动HTT
  async listen(port: number) {
    // 初始化应用
    // await this.init();

    // 指定监听端口
    this.app.listen(port, () => {
      Logger.log(
        `Application is running on: http://localhost:${port}`,
        "NestApplication"
      );
    });
  }
}
