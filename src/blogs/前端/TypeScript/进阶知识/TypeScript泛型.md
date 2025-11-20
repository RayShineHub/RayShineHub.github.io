---
title: 知识篇 -- TypeScript泛型：增强代码的灵活性与可重用性
description: 深入探讨TypeScript中泛型（Generics）的概念、作用、如何定义和使用泛型函数、泛型接口、泛型类以及泛型约束，理解泛型在构建可重用、类型安全组件中的重要性。
date: 2024-05-30
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
sidebarSeq: 1
meta:
  - name: description
    content: TypeScript泛型深度解析
  - name: keywords
    content: TypeScript 泛型 Generics 类型参数 泛型函数 泛型接口 泛型类 泛型约束
tags:
 - TypeScript
 - 进阶知识
 - 泛型
categories:
 - 前端
---

在软件工程中，我们不仅要创建能够处理当前数据类型的组件，还要创建能够处理未来数据类型的组件。这要求组件具有高度的**灵活性**和**可重用性**。TypeScript中的**泛型（Generics）** 正是为了解决这一问题而引入的。泛型允许我们在定义函数、接口或类时，不预先指定具体的类型，而是在使用时再指定，从而实现代码的通用性和类型安全性。

<!-- more -->

## 什么是泛型？

泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。它使得代码可以适用于多种数据类型，同时保持类型检查的优势。

**泛型的主要作用**：

*   **代码重用**：编写一次代码，可以用于多种类型。
*   **类型安全**：在编译时捕获类型错误，而不是在运行时。
*   **灵活性**：允许开发者在不牺牲类型安全的前提下，创建更灵活的组件。

## 1. 泛型函数

泛型函数是最常见的泛型使用场景。它允许函数接受任意类型的参数，并根据传入的参数类型推断或指定返回类型。

### 泛型函数的基本语法

```typescript
function identity<T>(arg: T): T {
    return arg;
}
```
这里的 `<T>` 是类型变量，它捕获了用户传入的类型。`arg: T` 表示参数 `arg` 的类型是 `T`，`: T` 表示函数的返回类型也是 `T`。

### 使用泛型函数

你可以通过两种方式使用泛型函数：

1.  **传入所有参数，包括类型参数**：
    ```typescript
    let output = identity<string>("myString"); // type of output will be 'string'
    ```
2.  **利用类型推断**：编译器会根据传入的参数自动推断出 `T` 的类型。
    ```typescript
    let output = identity("myString"); // type of output will be 'string'
    ```

**示例**：
```typescript
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length); // 泛型数组可以访问length属性
    return arg;
}

// 或者
function loggingIdentity2<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}

loggingIdentity([1, 2, 3]);
loggingIdentity2(["a", "b", "c"]);
```

## 2. 泛型接口

泛型接口用于描述那些包含泛型成员的接口。

**示例**：
```typescript
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
console.log(myIdentity(10)); // 10
// console.log(myIdentity("hello")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```
你也可以将泛型参数直接放在接口名称后面，使整个接口都泛型化。

```typescript
interface Box<T> {
    value: T;
}

let stringBox: Box<string> = { value: "hello" };
let numberBox: Box<number> = { value: 123 };
```

## 3. 泛型类

泛型类与泛型接口类似，在类名后使用 `<T>` 来定义类型变量。

**示例**：
```typescript
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
console.log(myGenericNumber.add(10, 20)); // 30

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };
console.log(stringNumeric.add("Hello", "TypeScript")); // HelloTypeScript
```
**注意**：类的静态成员不能使用类的类型参数。

## 4. 泛型约束 (Generic Constraints)

有时我们希望泛型函数能够处理某种特定类型的数据，例如，我们可能希望访问泛型参数的 `length` 属性。但如果 `T` 可以是任意类型，那么 `T` 不一定有 `length` 属性。这时就需要使用泛型约束。

### 约束泛型

我们可以定义一个接口来描述我们希望泛型参数拥有的属性，然后使用 `extends` 关键字来实现约束。

**示例**：
```typescript
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length); // 现在我们知道arg有.length属性了
    return arg;
}

loggingIdentity({ length: 10, value: 3 }); // OK
// loggingIdentity(3); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
// loggingIdentity("hello"); // OK, string has a length property
```

### 在泛型中使用类类型

在创建工厂函数时，泛型约束可以确保我们传入的构造函数类型是正确的。

```typescript
function create<T>(c: { new(): T; }): T {
    return new c();
}

class BeeKeeper {
    hasMask: boolean = true;
}

class ZooKeeper {
    nametag: string = "Mikle";
}

class Animal {
    numLegs: number = 4;
}

class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
}

class Gato extends Animal {
    keeper: BeeKeeper = new BeeKeeper();
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  // OK
createInstance(Gato).keeper.hasMask; // OK
```

## 总结

TypeScript泛型是构建可重用、类型安全组件的强大工具。通过泛型函数、泛型接口和泛型类，我们可以在不牺牲类型安全的前提下，编写出适用于多种数据类型的通用代码。泛型约束进一步增强了泛型的能力，允许我们对泛型参数施加特定的结构要求。掌握泛型，是深入TypeScript高级特性和编写高质量、可维护前端应用的关键。
