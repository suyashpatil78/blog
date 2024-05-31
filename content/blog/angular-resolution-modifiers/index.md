---
title: 'Resolution Modifiers in Angular'
description: 'In this blog, I have explained about different types of resolution modifiers used in Angular'
date: 2024-05-29
categories: ['angular', 'typescript']
ogImage: ./og-image.png
external: ''
time: 5
---

Resolution modifiers are used in Angular to control the scope and behavior of dependency resolution within the component hierarchy. They fall into 4 categories: `Optional`, `Self`, `SkipSelf` and `Host`.

### Optional()

This means that the injection of service is optional. Angular compiler will not throw an error if the dependency is not present in the hierarchy. This happens by silencing the error thrown at `NullInjector` while resolving the dependency.

```ts
constructor(@Optional() private userService: UserService) {}
```

### Self()

`@Self()` tells Angular to only search dependencies in the current component or directive. It will not go up in the hierarchy to find the injected dependency.

```ts
constructor(@Self() private service: MyService) {}
```

### SkipSelf()

`@SkipSelf()` is the opposite of `Self()`. It starts resolving dependencies from the parent rather than the component itself. This is useful when you want to share a single instance of a dependency across multiple components.

```ts
constructor(@SkipSelf() private service: MyService) {}
```

### Host()

`@Host()` tells Angular as the last stop for searching providers in the tree. Lets understand it with an example. We have a parent directive `appParent` and child directive `appChild`

```html
<!-- app.component.html -->
<div appParent>
	<div appChild>Hello World</div>
</div>
```

If we define `@Host` in `appChild` directive, it will search providers in `appChild` directive. Then, as per the component view, it will search in `appParent` directive. If it is not able to find at any of these places, it will throw an error. It will not go up to the component file `app.component.ts` to search for the dependency.

This is all about resolution modifiers in DI. Thank you for reading until the end.
