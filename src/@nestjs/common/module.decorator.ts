import "reflect-metadata";

export interface ModuleMetadata {
  controllers?: Function[];
}

// 定义 Module 函数，接收一个 ModuleMetadata 类型的参数 metadata，返回一个 ClassDecorator
export function Module(metaData: ModuleMetadata): ClassDecorator {
  return (target: Function) => {
    Reflect.defineMetadata("controllers", metaData.controllers, target);
  };
}
