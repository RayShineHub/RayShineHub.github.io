---
title: 知识篇 -- TypeScript函数：定义清晰的函数签名
description: 深入探讨TypeScript中函数的定义方式、参数类型（可选参数、默认参数、剩余参数）、函数重载、箭头函数以及函数类型接口，理解如何使用TypeScript为函数提供强大的类型支持。
date: 2024-05-25
showSponsor: true
isShowComment: true
isAbstract: true
autoIgnore: true
sidebarSeq: 4
meta:
  - name: description
    content: TypeScript函数深度解析
  - name: keywords
    content: TypeScript 函数 函数签名 参数类型 函数重载 箭头函数 函数类型接口
tags:
 - TypeScript
 - 基础知识
 - 函数
categories:
 - 前端
---

在JavaScript中，函数是核心的组成部分。TypeScript在JavaScript函数的基础上，引入了强大的类型系统，允许我们为函数的参数和返回值定义明确的类型，从而在编译阶段捕获潜在的错误，提高代码的健壮性和可维护性。本文将深入探讨TypeScript中函数的各种定义方式和特性。

<!-- more -->

## 1. 函数定义

TypeScript支持多种函数定义方式，与JavaScript类似，但增加了类型注解。

### 具名函数

```typescript
function add(x: number, y: number): number {
    return x + y;
}
// add(1, '2'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

### 匿名函数

```typescript
let myAdd = function(x: number, y: number): number {
    return x + y;
};
```

### 箭头函数 (Arrow Functions)

箭头函数是ES6引入的简洁函数语法，在TypeScript中同样支持类型注解。

```typescript
let myMultiply = (x: number, y: number): number => {
    return x * y;
};
```

## 2. 函数参数

TypeScript允许我们为函数参数定义类型，并提供了可选参数、默认参数和剩余参数等特性。

### 可选参数

在参数名后使用 `?` 标记，表示该参数是可选的。可选参数必须放在必选参数之后。

```typescript
function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return firstName + " " + lastName;
    } else {
        return firstName;
    }
}

let result1 = buildName("Bob");             // OK
// let result2 = buildName("Bob", "Adams", "Sr."); // Error: Expected 2 arguments, but got 3.
let result3 = buildName("Bob", "Adams");    // OK
```

### 默认参数

可以为参数设置默认值。带有默认值的参数可以省略，也可以放在必选参数之后。

```typescript
function buildNameWithDefault(firstName: string, lastName: string = "Smith"): string {
    return firstName + " " + lastName;
}

let result4 = buildNameWithDefault("Bob");                  // Bob Smith
let result5 = buildNameWithDefault("Bob", undefined);       // Bob Smith
let result6 = buildNameWithDefault("Bob", "Adams");         // Bob Adams
// let result7 = buildNameWithDefault("Bob", "Adams", "Sr."); // Error
```

### 剩余参数 (Rest Parameters)

当函数需要处理不定数量的参数时，可以使用剩余参数。剩余参数会被当作一个数组。

```typescript
function sumAll(a: number, ...restOfNumbers: number[]): number {
    let total = a;
    for (let i = 0; i < restOfNumbers.length; i++) {
        total += restOfNumbers[i];
    }
    return total;
}

let sum = sumAll(1, 2, 3, 4, 5); // sum is 15
```

## 3. 函数重载 (Function Overloads)

函数重载允许你为同一个函数提供多个函数签名，但只有一个函数实现。这在处理参数类型或数量不同的函数时非常有用。

**注意**：重载签名只用于类型检查，实际的函数实现必须与所有重载签名兼容。实现签名不应该被外部直接调用。

```typescript
function pickCard(x: { suit: string; card: number; }[]): number;
function pickCard(x: number): { suit: string; card: number; };
function pickCard(x: any): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick a card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let suits = ["hearts", "spades", "clubs", "diamonds"];
let deck = [{ suit: "hearts", card: 2 }, { suit: "spades", card: 10 }, { suit: "diamonds", card: 8 }];

let pickedCard1 = pickCard(deck);
console.log("card: " + deck[pickedCard1].card + " of " + deck[pickedCard1].suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
```

## 4. 函数类型接口

接口不仅可以描述对象的形状，也可以描述函数的类型。这在定义回调函数或函数参数时非常有用。

```typescript
interface GreetFunction {
    (name: string, greeting?: string): string;
}

let myGreet: GreetFunction;
myGreet = function(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
};

console.log(myGreet("Alice")); // Hello, Alice!
console.log(myGreet("Bob", "Hi")); // Hi, Bob!
```

## 5. `this` 在函数中的类型

JavaScript中 `this` 的行为是一个常见的痛点。TypeScript提供了 `this` 参数来明确指定函数内部 `this` 的类型。`this` 参数是一个假参数，它在编译时会被擦除，不会影响实际的运行时代码。

```typescript
interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card; // 明确指定this的类型
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
```
在 `createCardPicker` 函数中，我们明确指定了 `this` 的类型为 `Deck`。由于箭头函数没有自己的 `this`，它会捕获外部函数的 `this`，因此内部的 `this.suits` 能够正确地指向 `deck` 对象。

## 总结

TypeScript为JavaScript函数带来了强大的类型支持，使得函数签名更加清晰、参数处理更加灵活、错误捕获更加及时。通过掌握函数的定义方式、参数类型、函数重载以及函数类型接口，开发者可以编写出更具可读性、可维护性和健壮性的函数代码，从而提升整个项目的质量。
