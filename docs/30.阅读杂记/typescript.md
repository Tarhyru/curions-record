# 参考资料
type-challenges:<https://github.com/type-challenges/type-challenges>.
知乎专栏:<https://zhuanlan.zhihu.com/c_206498766>.

# typescript 全局 type 声明：
<https://stackoverflow.com/questions/42233987/how-to-configure-custom-global-interfaces-d-ts-files-for-typescript>
概括：
1、有类型声明的文件包含在 typeRoute 下，默认值 "typeRoots": ["./node_modules/@types/"]
    （验证下是否需要 declare namespace ）
2、include 包含 .d.ts 文件，且该文件没有任何导入导出（作为脚本使用，而不是模块）
实际上，typescript 不鼓励全局类型声明.d.ts 文件也仅因作为 js 库与别的库交互的接口


# type 与 interface 的关系与区别

1. 都是用来描述对象和函数定义
2. 且可以相互继承

```ts
interface example {
    name: string;
    age: number;
}
interface exampleFunc {
    (name: string, age: number): void;
}

type example = {
    name: string;
    age: number;
};
type example = (name: string, age: number) => void;

type exampleType1 = {
    name: string;
};
interface exampleInterface1 {
    name: string;
}

type exampleType2 = exampleType1 & {
    age: number;
};
type exampleType2 = exampleInterface1 & {
    age: number;
};
interface exampleInterface2 extends exampleType1 {
    age: number;
}
interface exampleInterface2 extends exampleInterface1 {
    age: number;
}
```

## interface 可以而 type 不可以

声明合并

```ts
interface test {
    name: string;
}
interface test {
    age: number;
}
```

## type 可以而 interface 不可以

1. type 可以定义 基本类型的别名，如 type myString = string
2. type 可以通过 typeof 操作符来定义，如 type myType = typeof someObj
3. type 可以申明 联合类型，如 type unionType = myType1 | myType2
4. type 可以申明 元组类型，如 type yuanzu = [myType1, myType2]


