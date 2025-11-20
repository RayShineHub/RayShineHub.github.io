---
title: 知识篇 -- TypeScript装饰器：增强类和成员的功能
description: 深入探讨TypeScript中装饰器（Decorators）的概念、类型（类装饰器、方法装饰器、访问器装饰器、属性装饰器、参数装饰器）以及它们在增强类和成员功能、实现元编程中的应用。
date: 2024-06-05
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
sidebarSeq: 2
meta:
  - name: description
    content: TypeScript装饰器深度解析
  - name: keywords
    content: TypeScript 装饰器 Decorators 类装饰器 方法装饰器 访问器装饰器 属性装饰器 参数装饰器 元编程
tags:
 - TypeScript
 - 进阶知识
 - 装饰器
categories:
 - 前端
---

**装饰器（Decorators）** 是TypeScript中一个非常强大的特性，它允许我们以一种声明式的方式，在不修改原有代码的情况下，向类、方法、访问器、属性或参数添加额外的行为或元数据。装饰器本质上是函数，它们在运行时被调用，并可以修改被装饰的目标。装饰器是ES提案的一部分，TypeScript对其提供了早期支持。

<!-- more -->

## 什么是装饰器？

装饰器是一种特殊类型的声明，它可以附加到类声明、方法、访问器、属性或参数上。装饰器使用 `@expression` 这种形式，其中 `expression` 必须是一个函数，它会在运行时被调用，并传入被装饰目标的元数据。

**要启用装饰器，你需要在 `tsconfig.json` 中设置以下编译选项**：
```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true // 如果需要反射元数据
  }
}
```

## 装饰器的类型

TypeScript支持五种类型的装饰器：

### 1. 类装饰器 (Class Decorators)

类装饰器应用于类的构造函数，可以用来监视、修改或替换类定义。类装饰器表达式会在运行时作为函数被调用，唯一参数是类的构造函数。

**示例**：
```typescript
function sealed(constructor: Function) {
    console.log("类装饰器被调用");
    Object.seal(constructor); // 密封构造函数
    Object.seal(constructor.prototype); // 密封原型
}

@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

// Greeter.prototype.newMethod = function() {}; // Error: Cannot add property newMethod, object is not extensible
```
类装饰器也可以返回一个新的构造函数，替换掉原来的类定义。

### 2. 方法装饰器 (Method Decorators)

方法装饰器应用于类的方法，可以用来监视、修改或替换方法定义。方法装饰器表达式会在运行时作为函数被调用，传入三个参数：

1.  `target`：对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象。
2.  `propertyKey`：成员的名字。
3.  `descriptor`：成员的属性描述符（`Object.getOwnPropertyDescriptor` 的返回值）。

**示例**：
```typescript
function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(`方法装饰器被调用: ${propertyKey}`);
    const originalMethod = descriptor.value; // 保存原始方法

    descriptor.value = function(...args: any[]) {
        console.log(`调用方法: ${propertyKey}，参数: ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args); // 调用原始方法
        console.log(`方法 ${propertyKey} 返回: ${JSON.stringify(result)}`);
        return result;
    };

    return descriptor; // 返回修改后的属性描述符
}

class Calculator {
    @logMethod
    add(a: number, b: number): number {
        return a + b;
    }

    @logMethod
    subtract(a: number, b: number): number {
        return a - b;
    }
}

const calc = new Calculator();
calc.add(5, 3);
calc.subtract(10, 4);
```

### 3. 访问器装饰器 (Accessor Decorators)

访问器装饰器应用于类的 `get` 或 `set` 访问器。它与方法装饰器类似，传入的参数也相同。

**示例**：
```typescript
function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
}

class Point {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() { return this._x; }

    set x(value: number) { this._x = value; }

    get y() { return this._y; }
    set y(value: number) { this._y = value; }
}

const p = new Point(1, 2);
// Object.defineProperty(p, 'x', { value: 10 }); // Error: Cannot redefine property: x (因为configurable为false)
```

### 4. 属性装饰器 (Property Decorators)

属性装饰器应用于类的属性。属性装饰器表达式会在运行时作为函数被调用，传入两个参数：

1.  `target`：对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象。
2.  `propertyKey`：成员的名字。

**注意**：属性装饰器不能修改属性描述符，因为属性描述符在属性装饰器运行时还未被定义。它主要用于为属性添加元数据。

**示例**：
```typescript
import 'reflect-metadata'; // 需要安装 reflect-metadata

function format(formatString: string) {
    return function (target: any, propertyKey: string) {
        let value = target[propertyKey];

        const getter = function () {
            return `${formatString} ${value}`;
        };

        const setter = function (newVal: string) {
            value = newVal;
        };

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}

class User {
    @format("Mr./Ms.")
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const user = new User("Alice");
console.log(user.name); // Mr./Ms. Alice
```

### 5. 参数装饰器 (Parameter Decorators)

参数装饰器应用于类构造函数参数或方法参数。参数装饰器表达式会在运行时作为函数被调用，传入三个参数：

1.  `target`：对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象。
2.  `propertyKey`：成员的名字（对于构造函数参数，它是 `undefined`）。
3.  `parameterIndex`：参数在函数参数列表中的索引。

**注意**：参数装饰器不能修改参数的类型或行为，它主要用于为参数添加元数据。

**示例**：
```typescript
import 'reflect-metadata';

const requiredMetadataKey = Symbol("required");

function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}

function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    let method = descriptor.value;
    descriptor.value = function (...args: any[]) {
        let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
        if (requiredParameters) {
            for (let parameterIndex of requiredParameters) {
                if (parameterIndex >= args.length || args[parameterIndex] === undefined) {
                    throw new Error("Missing required argument.");
                }
            }
        }
        return method.apply(this, args);
    }
}

class UserService {
    @validate
    greet(@required name: string, message?: string) {
        console.log(`Hello ${name}, ${message || 'welcome!'}`);
    }
}

const userService = new UserService();
userService.greet("Bob"); // Hello Bob, welcome!
// userService.greet(undefined); // Error: Missing required argument.
```

## 装饰器组合

多个装饰器可以应用于同一个目标，它们的执行顺序是从下往上，从右往左。

**示例**：
```typescript
function f() {
    console.log("f(): evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class C {
    @f()
    @g()
    method() {}
}
// 输出：
// f(): evaluated
// g(): evaluated
// g(): called
// f(): called
```

## 总结

TypeScript装饰器提供了一种强大的元编程能力，允许开发者以声明式的方式扩展类和成员的功能。通过类装饰器、方法装饰器、访问器装饰器、属性装饰器和参数装饰器，我们可以在不修改原有代码结构的情况下，实现日志记录、权限控制、数据校验、依赖注入等横切关注点。虽然装饰器目前仍处于ES提案阶段，但它在Angular等框架中已被广泛应用，是TypeScript高级特性中不可或缺的一部分。
