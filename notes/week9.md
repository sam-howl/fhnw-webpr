# Week 9

```javascript
```

## Javascript Goodie

* array deconstruction:

```javascript
let [first, second] = [1,2,3,4]
```

* object deconstruction is useful when objects are arguments

```javascript
let obj = { a:1, b:2, c:3 }

const foo = (obj) => console.log(obj.a, obj.b)
foo(obj) //output: 1 2

//new version with object deconstruction
const bar = ({a,b}) => console.log(a, b)
bar(obj) //output 1 2

const baz = ({a, b, d="default"}) => console.log(a, b, d)
baz({d:"my value"}) // output: undefined undefined my value

const bazZ = ({a, b, d="default"}) => console.log(arguments)
bazZ({d:"my value"}) // output: undefined undefined my value
```

## Observable

```javascript
const Observable = value => {
    const listeners = []; // many
    return {
        onChange: callback => listeners.push(callback),
        getValue: () => value,
        setValue: val => {
            if (value === val) return; // safety measurement
            value = val; // first set the value
            listeners.forEach(notify => notify(val)); // notify the listeners
        }
    }
};
```

* Observer modifies Observable
* Can end in loops: A -> B -> C -> A
* improved version of observable

```javascript
const Observable = value => {
    const listeners = [];
    return {
        onChange: callback => {
            listeners.push(callback);
            callback(value, value);
        },
        getValue: ()       => value,
        setValue: newValue => {
            if (value === newValue) return;
            const oldValue = value;
            value = newValue;
            listeners.forEach(callback => callback(value, oldValue));
        }
    }
};
```
