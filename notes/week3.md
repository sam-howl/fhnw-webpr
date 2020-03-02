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

## Mockingbird

* Takes a function and applies that function to the function

```javascript
const M = f => f(f);
```

## Y Combinator

* Y Combinator = M(M)
* (f => f(f)) (g => g(g))
* f on right side (g => g(g)) inner f (g => g(g))
* (f => f(f)) (g => g(g)) which matches the first row -> endless recursion

## Lambda Boolean Logic

* AND of two booleans

```javascript
// first is true and second is true, first is true and second is false, ...
const and = first => second => first ( second (T) (F) ) ( second (F) (F) )
// shorter version
const and1 = first => second => first ( second (T) (F) ) ( second (F) (F) )
// even shorter
const and2 = first => second => first ( second ) ( F );
// can also be written like this
const and = first => second => first ( second ) ( first );
```

* OR of two booleans

```javascript
// first version
const or = first => second => first ( second (T) (T) ) ( second (T) (F) );
// shorter
const or1 = first => second => first ( T ) ( second (T) (F) );
// better use first instead of T
const or2 = first => second => first ( first ) ( second (T) (F) );
// use second in the last part
const or3 = first => second => first ( first ) ( second );
// "simplify"
const or = first => first ( first );
// Mockingbird
const M = f => f(f);
const or = first => M ( first );
// "simplify" - nobody will understand this anymore :) 
const or = M;
```

## Lambda Algebraic Datatypes

* Pair - are the only rocksolid data structure in JavaScript

```javascript
const Pair = first => second => f => f (first) (second);
const firstname = fst;
const lastname = snd;
```

## Either (Sumtype)

* Error handling is required otherwise nothing happens with function either

```javascript
const Left = msg => f => g => f(msg);
const Right = res => f => g => g(res);
// e is either, f is error and g is result
const either = e => f => g => e (f) (g);
// "simplify"
const either1 = e => f => e (f);
const either2 = e => e;
const either = id;
```
