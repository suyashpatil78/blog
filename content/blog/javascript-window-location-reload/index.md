---
title: 'Different ways to reload page in javascript'
description: 'In this blog, I have explained about different ways to reload the page in javascript'
date: 2024-06-08
categories: ['javascript', 'angular', 'window']
ogImage: ./og-image.png
external: ''
time: 10
---

### Introduction

Reloading a web page is a common task in web development. Whether you want to refresh the page after a certain event or clear the cache, there are multiple ways to achieve this using JavaScript. In this blog, we'll explore different methods to reload a page in JavaScript.

### Using `location.reload()`

The simplest way to reload a page in JavaScript is by using the `location.reload()` method. This method reloads the current page, including all resources like images, stylesheets, and scripts. Here's an example of how you can use `location.reload()`:

```js
location.reload();
```

This code snippet will reload the current page, effectively refreshing the content.

### Using `location.href`

Another way to reload a page is by setting the `location.href` property to the current URL. This method is similar to clicking on a link that navigates to the same page. Here's how you can achieve this:

```js
location.href = 'example.com';
```

By setting `location.href` to the current URL, the page will reload, fetching all resources again.

### Using `location.replace()`

The `location.replace()` method is another way to reload a page in JavaScript. This method replaces the current page with a new one, effectively reloading the content. Here's an example of how you can use `location.replace()`:

```js
location.replace('example.com');
```

This code snippet will replace the current page with a new one, effectively reloading the content.

### Differences between `location.reload()`, `location.href`, and `location.replace()`

- `location.reload()`: Reloads the current page, including all resources.

- `location.href`: Navigates to a new URL, effectively reloading the page.

- `location.replace()`: Replaces the current page with a new one, effectively reloading the content.

### Conclusion

Reloading a page in JavaScript is a common task that can be achieved using various methods. Whether you prefer using `location.reload()`, `location.href`, `location.replace()`, `window.location.reload()`, or `window.location.href`, you have multiple options to choose from based on your requirements. Experiment with these methods to find the one that best suits your needs.

I hope this blog has helped you understand different ways to reload a page in JavaScript. If you have any questions or feedback, feel free to reach out in the comments below. Happy coding!

### References

- [MDN Web Docs - location.reload()](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload)
- [MDN Web Docs - location.href](https://developer.mozilla.org/en-US/docs/Web/API/Location/href)
- [MDN Web Docs - location.replace()](https://developer.mozilla.org/en-US/docs/Web/API/Location/replace)

