# Week 2

## JavaScript Goodie

* developer tools in browser to use console.log()
* console.log("test", 1, Date.now(), "some other text") with comma instead of +
* the output separator depends on the browser
* use console.dir(x) to have an interactive output instead of a string representation, for example to see the different elements a bit more clearer:

```javascript
const x = {a: 1, b: 2}
const ary = [x,x,{a: 4, b: 5}]
console.dir(ary)
```

## Snake Game

* The board is redrawn in a given interval. When the snake moves and does not grow the head is moved and the the last element is removed. When the snake moves and does grow the head is moved and the last element stays, the effect is that the snake grows one element.
* const clockwise = [north, east, south, west, north]; prevents to "fall out" the array when increase the index by one and defines the directions in a fix order (there is also a counterclockwise array)
* remove the last element of an array with array.pop()
* add element as first element of an array with array.unshift(element)
* array.shift() takes the first element and the second element is the new first element
* setInterval() is not the proper way to do animations (more in module Web Clients)

## Lambda

* x; mutable, global scope
* var x; mutable, "hoisted" scope, so it is as if this variable will be initialized on top of the function
* let x; mutable, local scope
* const x; immutable reference, local scope
* Conclusion: use const! use let if required. use var and global scope variables only if really required.
* IIFE - immediately invoked function expression:

```javascript
function foo() {…}; foo()
(function foo() {…}) ()
(function() {…}) ()
( () => {…}) ()
```

* Beta reduction - have shorter expressions for the same thing:

```javascript
( f => x => f (x)) (id) (1) // id in the place of f:
( x => id (x)) (1) // argument in place of parameter:
( id (1)) // id replace with the definition of id:
( x => x) (1) //results:
1
```

* Eta reduction:

```javascript
x => y => plus (x) (y) // it is just a plus function:
x => plus (x)
plus
```
