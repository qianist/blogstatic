---
title: Tips of JavaScript
date: "2019-07-31T00:10:31.495Z"
description: "Collection of tips for JavaScript. Some knowledge is just too short to be a blog, so they stay together."
---

#### 1. Swap values

```javascript
let x = 1, y = 2;
[y, x] = [x, y];
```
This can be used for more than two variables.

#### 2. Array flat trick

```javascript
let arr = [1, [2, 3, [4, 5]], [6, 7]];
String(arr).split(','); // [ '1', '2', '3', '4', '5', '6', '7' ]
```

May be useless, but interesting. Elements in the result are changed into string.


#### 3. What is closure

It's hard for me to describe what is closure, and thus I'm not sure my understanding is correct. The best I can do is "A function can access variables in the outer scope even after the outer function has returned".

I found this one online which I think is pretty accurate:

> Closure is when a function is able to remember and access its lexical scope even when that function executes in a different scope.

Now I have to understand what is lexical scope. Basically it's the scope where the function is declared.

#### 4. `onclick` attribute on HTML tags

```html
<button onclick="console.log(event); console.log(this); console.log(this.onclick)">Click Me</button>
```
Click this button and check the console:
```shell
# The value of onclick will be executed as some function's body.
# The function receives an argument called "event". It's the event object.
> MouseEvent {isTrusted: true, screenX: 218, screenY: 415, clientX: 56, clientY: 139, …}

# "this" is bond to the clicked element
> <button onclick="console.log(event); console.log(this); console.log(this.onclick)">Click Me</button>

# This is the function
> ƒ onclick(event) {
  console.log(event); console.log(this); console.log(this.onclick)
}
```
