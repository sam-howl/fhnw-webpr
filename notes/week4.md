# Week 4

## JavaScript Goodie

* initialize an array with brackets '[]' like this:

```javascript
let a = [1,2,3,4]
```

* left hand side work as a de-constructor:

```javascript
let [x,y,z] = [1,2,3,4] //does not create a new array, it deconstruct it
//x = 1, y = 2, z = 3
```

* to return multiple values from a function use deconstruction:

```javascript
let today = () => [9, "March", 2020]
let [day, month, year] = today()
```

* another way to use the array de-constructor:

```javascript
const head = a => a[0]
const head = ( [a,b,c] ) => a[0]
head([1,2,3])       //returns 1
head([])            //undefined
head([1,2,3,4,5,6]) //ignoring the rest and returns 1
```

## Immutable

* simple swap of values - but read the values at the wrong time and the data is inconsistent:

```javascript
a = 1   //a=1
b = 2   //a=1 b=2
c = b   //a=1 b=2 c=2
b = a   //a=1 b=1 c=2 - inconsistent!
a = c   //a=2 b=1 c=2
// can also be inconsistent when a is read in line 2 and b in line 4 of the program
```

* use this function using pairs - this is safe for inconsistent:

```javascript
const swap = ([a,b]) => [b,a]
```

## Applied Map/Filter/Reduce

```javascript
// multiple arguments
const times = (a, b) => a * b;
times(2) // ??? --> error message
// argument chain
const times = a => b => a * b;
times(2) // ??? --> function that takes another argument
```

* map: apply something on every element
* map with id function returns the same array but as a new array

```javascript
const times = a => b => a * b;
const twoTimes = times(2);
// more how we are doing
[1, 2, 3].map(x => times(2)(x));
// shorter
[1, 2, 3].map(times(2));
// using a function / what we are doing
[1, 2, 3].map(twoTimes);
```

* filter: go through array and check if condition is met it is returned
* filter with id returns the same but as a new array

```javascript
const odd = x => x % 2 === 1;
[1, 2, 3].filter(x => x % 2 === 1);
[1, 2, 3].filter(x => odd(x));
// eta reduction
[1, 2, 3].filter(odd);
```

* reduce: two arguments, the value before and the current value, this can be used to sum up an array

```javascript
const plus = (accu, cur) => accu + cur;
[1, 2, 3].reduce((accu, cur) => accu + cur);
[1, 2, 3].reduce(plus);
// variant with initial accu value as 2nd argument
// then cur starts at first element
[1, 2, 3].reduce(plus, 0);
```

## New Snake

* south, north, east and west do never change, therefore const is used
* south, north, east and west are now Pairs
