# Week 3

## JavaScript Goodie

* How and why does console.log(1,2,3,4,5) work with multiple arguments?
* Don't do it like this:

```javascript
function foo(x){
    console.log(x, arguments)
}
foo(1,2,3,4,5) //prints 1 and arguments containing 2 to 5
```

* As a lambda function it does not work, instead throws an error:

```javascript
const bar = x => {
    console.log(x, arguments)
}
bar(1,2,3,4,5) //gives an error, because he does not find arguments
```

* Use the ...rest instead of arguments:

```javascript
function foo1(x, ...rest){
    console.log(x, rest)
}
foo(1,2,3,4,5) //prints 1 - [2, 3, 4]
```

```javascript
const bar1 = (x, ...rest) => {
    console.log(x, rest)
}
bar1(1,2,3,4,5) //prints 1 - [2, 3, 4]
bar1(1) // prints 1 - []
bar1() // prints undefined - []
```
