---
title: 知识篇 -- TypeScript基本类型：构建强类型代码的基础
description: 深入探讨TypeScript中的各种基本数据类型，包括布尔值、数字、字符串、数组、元组、枚举、Any、Void、Null和Undefined、Never以及Object，理解它们的作用和用法。
date: 2024-05-15
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
sidebarSeq: 2
meta:
  - name: description
    content: TypeScript基本类型深度解析
  - name: keywords
    content: TypeScript 基本类型 布尔 数字 字符串 数组 元组 枚举 Any Void Null Undefined Never Object
tags:
 - TypeScript
 - 基础知识
 - 类型
categories:
 - 前端
---

TypeScript的核心优势在于其强大的类型系统。通过为变量、函数参数和返回值等添加类型注解，TypeScript能够在代码编译阶段就捕获潜在的类型错误，从而提高代码的健壮性和可维护性。本文将详细介绍TypeScript中的各种基本数据类型及其用法。

<!-- more -->

## 1. 布尔类型 (Boolean)

布尔类型是最基本的数据类型，只有 `true` 和 `false` 两个值。

**示例**：
```typescript
let isDone: boolean = false;
isDone = true;
// isDone = 1; // Type 'number' is not assignable to type 'boolean'.
```

## 2. 数字类型 (Number)

TypeScript中的数字类型支持JavaScript中的所有数字格式，包括十进制、二进制、八进制和十六进制字面量。

**示例**：
```typescript
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: number = 100;
```

## 3. 字符串类型 (String)

字符串类型用于表示文本数据。可以使用单引号 (`'`)、双引号 (`"`) 或模板字符串 (`` ` ``) 来定义字符串。

**示例**：
```typescript
let fullName: string = `Bob Smith`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 1 } years old next month.`;
console.log(sentence);
```

## 4. 数组类型 (Array)

数组类型有两种定义方式：

*   **元素类型后接 `[]`**：表示由特定类型元素组成的一个数组。
*   **使用泛型 `Array<元素类型>`**。

**示例**：
```typescript
let list: number[] = [1, 2, 3];
let names: Array<string> = ['Alice', 'Bob'];

// list.push('4'); // Argument of type 'string' is not assignable to parameter of type 'number'.
```

## 5. 元组类型 (Tuple)

元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。

**示例**：
```typescript
// 定义一个元组类型
let x: [string, number];
// 初始化
x = ['hello', 10]; // OK
// x = [10, 'hello']; // Error: Type 'number' is not assignable to type 'string'.
// x[0] = 10; // Error: Type 'number' is not assignable to type 'string'.

console.log(x[0].substring(1)); // 'ello'
// console.log(x[1].substring(1)); // Error: Property 'substring' does not exist on type 'number'.
```

## 6. 枚举类型 (Enum)

枚举类型为一组数值赋予友好的名字。默认情况下，枚举成员从 `0` 开始递增。

**示例**：
```typescript
enum Color {Red, Green, Blue}
let c: Color = Color.Green; // c 的值为 1

enum Direction {Up = 1, Down, Left, Right}
let d: Direction = Direction.Down; // d 的值为 2

enum StatusCode {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
let status: StatusCode = StatusCode.Success; // status 的值为 200
```
枚举还支持反向映射，可以通过值获取其名称。
```typescript
let colorName: string = Color[1];
console.log(colorName); // Green
```

## 7. Any 类型

`any` 类型表示可以是任何类型。当不确定变量类型时，可以使用 `any`。它允许你在编译时跳过类型检查，这在处理来自第三方库或用户输入的数据时很有用。

**示例**：
```typescript
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // OK, can be a boolean

let listAny: any[] = [1, true, "free"];
listAny[1] = 100;
```
**注意**：`any` 类型会削弱TypeScript的类型检查优势，应谨慎使用。

## 8. Void 类型

`void` 类型表示没有任何类型。它通常用于函数，表示函数没有返回值。

**示例**：
```typescript
function warnUser(): void {
    console.log("This is my warning message");
}

let unusable: void = undefined;
// unusable = null; // 在严格模式下会报错
```

## 9. Null 和 Undefined 类型

TypeScript中，`null` 和 `undefined` 也有它们各自的类型，分别是 `Null` 和 `Undefined`。默认情况下，`null` 和 `undefined` 是所有类型的子类型，这意味着你可以将 `null` 和 `undefined` 赋值给其他类型的变量。

然而，当你在 `tsconfig.json` 中启用 `--strictNullChecks` 选项时，`null` 和 `undefined` 只能赋值给它们各自的类型或 `any` 类型（以及 `void`）。这有助于避免常见的 `null` 或 `undefined` 引用错误。

**示例** (在 `--strictNullChecks` 模式下)：
```typescript
let u: undefined = undefined;
let n: null = null;

// let s: string = null; // Error: Type 'null' is not assignable to type 'string'.
// let num: number = undefined; // Error: Type 'undefined' is not assignable to type 'number'.
```

## 10. Never 类型

`never` 类型表示那些永不存在的值的类型。例如，`never` 是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。

**示例**：
```typescript
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function infiniteLoop(): never {
    while (true) {}
}
```

## 11. Object 类型

`object` 表示非原始类型，即除 `number`, `string`, `boolean`, `symbol`, `null` 或 `undefined` 之外的类型。

**示例**：
```typescript
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
```

## 总结

TypeScript的基本类型是构建强类型代码的基础。通过明确地为变量和函数指定类型，开发者可以利用TypeScript的静态类型检查功能，在开发早期发现并修复错误，从而提高代码质量、可读性和可维护性。熟练掌握这些基本类型，是深入学习TypeScript和构建可靠前端应用的第一步。
