---
title: 知识篇 -- TypeScript接口：定义对象的形状
description: 深入探讨TypeScript中接口（Interfaces）的概念、作用、如何定义和使用，包括可选属性、只读属性、函数类型接口、可索引接口以及类类型接口，理解接口在构建强类型应用中的重要性。
date: 2024-05-20
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
sidebarSeq: 3
meta:
  - name: description
    content: TypeScript接口深度解析
  - name: keywords
    content: TypeScript 接口 Interface 可选属性 只读属性 函数类型 可索引 类类型
tags:
 - TypeScript
 - 基础知识
 - 接口
categories:
 - 前端
---

在TypeScript中，**接口（Interfaces）** 是一个非常强大的概念，它用于定义对象的“形状”（Shape）。接口可以对类、函数以及普通对象进行结构上的约束，确保它们符合预期的类型定义。通过使用接口，我们可以在编译阶段捕获类型错误，从而提高代码的健壮性、可读性和可维护性。

<!-- more -->

## 什么是TypeScript接口？

接口是TypeScript中定义自定义类型的一种方式，它描述了一个对象应该拥有的属性和方法。接口只关注对象的结构，而不关心对象的具体实现。这使得接口成为实现“鸭子类型”（Duck Typing）的关键工具——“如果它走起来像鸭子，叫起来像鸭子，那么它就是鸭子”。

**接口的主要作用**：

*   **类型检查**：在编译时对对象的结构进行检查，确保其符合接口定义。
*   **代码约定**：为代码提供清晰的约定，方便团队协作和代码维护。
*   **抽象**：定义抽象的类型，而不涉及具体的实现细节。

## 1. 对象类型接口

最常见的接口用法是定义普通JavaScript对象的形状。

**示例**：
```typescript
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

function greet(person: Person) {
    console.log(`Hello, ${person.firstName} ${person.lastName}! You are ${person.age} years old.`);
}

let user = { firstName: 'Jane', lastName: 'Doe', age: 30 };
greet(user); // OK

// greet({ firstName: 'John', age: 25 }); // Error: Property 'lastName' is missing in type '{ firstName: string; age: number; }'
```

### 可选属性

接口中的属性可以标记为可选属性，使用 `?` 符号。这意味着该属性可以存在，也可以不存在。

**示例**：
```typescript
interface Config {
    width?: number;
    height?: number;
    color: string;
}

function createConfig(config: Config): { color: string; width: number; height: number } {
    let newConfig = { color: 'white', width: 100, height: 100 };
    if (config.width) {
        newConfig.width = config.width;
    }
    if (config.height) {
        newConfig.height = config.height;
    }
    newConfig.color = config.color; // color是必选属性
    return newConfig;
}

let myConfig = createConfig({ color: 'black', width: 200 }); // OK
// let invalidConfig = createConfig({ width: 100 }); // Error: Property 'color' is missing
```

### 只读属性

接口中的属性可以标记为只读属性，使用 `readonly` 关键字。一旦赋值，就不能再修改。

**示例**：
```typescript
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // Error: Cannot assign to 'x' because it is a read-only property.
```
TypeScript还提供了 `ReadonlyArray<T>` 类型，确保数组创建之后不能被修改。
```typescript
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // Error
// ro.push(5); // Error
// ro.length = 100; // Error
// a = ro; // Error: ReadonlyArray不能赋值给普通Array
a = ro as number[]; // 可以通过类型断言覆盖
```

## 2. 函数类型接口

接口不仅可以描述对象的属性，还可以描述函数的类型。

**示例**：
```typescript
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
};

// mySearch = function(src: string, sub: number): boolean { // Error: Type 'number' is not assignable to type 'string'.
//     let result = src.search(sub.toString());
//     return result > -1;
// };
```

## 3. 可索引接口

可索引接口用于描述那些可以通过索引访问的类型，例如数组或字典（对象）。

**示例**：
```typescript
interface StringArray {
    [index: number]: string; // 数字索引，返回字符串
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0]; // "Bob"

interface Dictionary {
    [key: string]: string; // 字符串索引，返回字符串
}

let myDict: Dictionary = { "name": "Alice", "city": "New York" };
let cityName: string = myDict["city"]; // "New York"

// 注意：数字索引的返回值必须是字符串索引返回值的子类型
interface MixedArray {
    [index: number]: string;
    length: number; // OK
    // name: number; // Error: 数字索引的返回值类型是string，而name属性的返回值类型是number，不兼容
}
```

## 4. 类类型接口

接口可以对类的一部分行为进行抽象。它描述了类的公共部分，而不是私有部分。

**示例**：
```typescript
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
```
**注意**：类类型接口只检查类的实例部分，不检查类的静态部分。如果需要检查静态部分，需要单独定义。

## 5. 接口的继承

接口可以像类一样相互继承，从而扩展已有的接口。

**示例**：
```typescript
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square: Square = { color: "blue", sideLength: 10 };

interface PenStroke {
    penWidth: number;
}

interface Drawing extends Shape, PenStroke {
    // Drawing 继承了 color 和 penWidth
    // 并且可以有自己的属性
    scale: number;
}

let drawing: Drawing = { color: "red", penWidth: 2, scale: 0.5 };
```

## 总结

TypeScript接口是定义对象形状、函数类型、可索引类型和类行为的强大工具。通过合理使用接口，开发者可以为代码提供清晰的类型约定，在编译阶段捕获潜在错误，从而显著提高代码的质量、可读性和可维护性。掌握接口是深入理解TypeScript和构建大型、复杂前端应用的关键一步。
