---
title: 'The Magic of Arrow Functions'
description: 'In this blog, I have explained about how arrow functions works in javascript'
date: 2024-03-29
categories: ['javascript']
ogImage: ./og-image.png
external: ''
time: 7
---

### Introduction

In JavaScript, there are two types of functions. You have normal functions and arrow functions. Let's explore the difference between them in this article.

Arrow functions were introduced in ES6. And it introduced a simple and shorter way to create functions. Here's how to create a normal function, with arguments, which returns something:

```js
function add(num1, num2) {
	const result = num1 + num2;
	return result;
}
```

If you want to transform this into an arrow function, here's what you'll have to do:

```js
const add = (num1, num2) => {
	const result = num1 + num2;
	return result;
};
```

There are some differences in how these two work in JavaScript.

### No `arguments` Object

The traditional function has an arguments object which you can access in the function:

```js
function add(num1, num2) {
	console.log(arguments.length);
}

add(1, 2); // 2 will be printed
```

On the other hand, arrow function doesn't have arguments object. It will throw a ReferenceError if we try to access it:

```js
let add = (num1, num2) => {
	console.log(arguments.length);
};

add(1, 2); // ReferenceError: arguments is not defined
```

### No `this` binding

This is the most critical difference between an arrow and a normal function. Let's understand it deeply.

In normal functions, this variable is created which references the objects that call them. Let's look at the code below:

```js
const obj = {
	name: 'john',
	age: 21,
	print: function () {
		console.log(this.name);
	},
};

obj.print(); // john
```

this keyword points to `obj`, which is the object that calls the method. Let's look at another code

```js
var name = 'alex';
const obj = {
	name: 'john',
	age: 21,
	print: function () {
		function foo() {
			console.log(this.name);
		}
		foo();
	},
};

obj.print(); // alex
```

It prints `undefined` because `print` is called by `obj` object but there is no object calling `foo` and that is why it points to `Window` object.

In the case of arrow functions, this function does not automatically create this variable.

```js
var z = 56;
const obj = {
	name: 'john',
	age: 21,
	print: () => {
		console.log(this.name);
	},
};

obj.print(); // undefined
```

As a result, any reference to this would point to what this was before the function was created. this will be pointed to `Window` object, therefore. Since the window object does not contain a `name` variable it prints `undefined`. If you try `console.log(this.z)` instead you will get `56` as a result. Let's try another example:

```js
const obj = {
	name: 'john',
	age: 21,
	print: function () {
		var name = 'alex';
		let foo = () => {
			console.log(this.name);
		};
		foo();
	},
};

obj.print(); // john
```

The reason why it prints `john` is that this will point to what this was before the function was created. Before `foo` this was pointing to `obj` object which has a reference to `name` variable and therefore `john` is printed. Now, if we convert the `print` function to an arrow function, it will print undefined.

### Implicit `return`

Arrow function with a single expression automatically returns the result of that expression without needing the return keyword.

```js
const add = (num1, num2) => num1 + num2;

console.log(add(2, 3)); // prints 5
```

Arrow functions have become a staple in modern JavaScript development, thanks to their simplicity and clarity. They offer concise syntax, eliminate this context issues, and make your code easier to read and maintain. While they're not suitable for all situations (such as methods in classes that need their own this context), arrow functions are a valuable addition to your JavaScript toolkit.

As you continue your journey in web development, embrace arrow functions and use them wisely to write cleaner, more efficient, and more maintainable code. Please subscribe to my newsletter for more amazing content.
