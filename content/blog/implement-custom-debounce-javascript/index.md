---
title: 'How to implement custom debounce function in javascript'
description: 'In this blog, I have explained how you can create your own debounce function in javascript'
date: 2024-06-06
categories: ['javascript']
ogImage: ./og-image.png
external: ''
time: 10
---

### Introduction

Debounce is a programming technique used to limit the rate at which a function is executed. It ensures that a function is not called repeatedly in quick succession, but rather waits for a certain period of inactivity before executing. This is particularly useful in scenarios where frequent user actions could lead to performance issues or unintended consequences, such as making multiple API calls in rapid succession.

### Implementing Debounce in JavaScript

Let's dive into the implementation of a debounce function in JavaScript. Here's a simple yet effective debounce function:

```js
export default function debounce(func, wait) {
  let timeoutId = null;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
```

### How It Works

- <strong>Closure</strong>: The debounce function returns a new function that retains access to the timeoutId variable, even after the debounce function has finished executing. This is achieved through closures.

- <strong>Clearing the Timeout<strong>: Every time the returned function is invoked, it first clears any existing timeout using clearTimeout(timeoutId). This ensures that the previous function execution is canceled.

- <strong>Setting a New Timeout</strong>: A new timeout is set using setTimeout(func, wait). The function passed to setTimeout is the original function that we want to debounce, and the wait parameter specifies the delay in milliseconds.

- <strong>Applying the Function</strong>: When the timeout expires, the original function is invoked with the provided arguments using func.apply(this, args). This ensures that the function is executed in the correct context with the correct arguments.

### Using the Debounce Function

Now that we have our debounce function, let's see how we can use it in practice. Here's an example of debouncing a scroll event listener:

```js
window.addEventListener('scroll', debounce(function () {
  console.log('Scrolled!');
}, 250));
```

In this example, the scroll event listener is debounced with a delay of 250 milliseconds. This means that the console.log statement will only be executed once every 250 milliseconds, even if the user scrolls more frequently.