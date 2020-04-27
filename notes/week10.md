# Week 9

```javascript
```

## Javascript Goodie

* spread operator

```javascript
const array1 = [1,2,3]
const array2 = [array1,4,5] // the first element in the array is an array
const array3 = [...array1,4,5] // deconstruct the array and add it to the new array
```

```javascript
const obj1 = {a:1, b:2}
const obj2 = {c:3, ...obj1} // deconstruct the object and add it to the new object
const obj3 = {...obj1}
obj3 === obj1 //FALSE
```

## Async

* promise, some people call it "Thenable"

```javascript
fetch ('http://fhnw.ch/json/students/list') //returns a promise
    .then(response => response.json()) //converts response to json object - is still promise
    .then(students => console.log(students.length)) // is still promise so then can be called again
    .catch (err => console.log(err) // catches every error anywhere above
```

* resolve and reject are functions
* returning something that is not a promise, will be encapsulated automatically in a promise (in the function call first then)

```javascript
const processEven = i => new Promise( (resolve, reject) => {
        if (i % 2 === 0) {
            resolve(i);
        } else {
            reject(i);
        }
    }
);

processEven(4)
    .then ( it => {console.log(it); return it} ) // 4, returns a promise of 4
    .then ( it => processEven(it+1)) // gets 4 and call function with 5 which results in reject function which will be go to the catch
    .catch( err => console.log( "Error: " + err))
```

* there is no wait!
* everything in the brackets can be read as if it is a then block

```javascript
const foo = async i => { // declare async otherwise error!
    // because this is not synchronous it must be declared above
    const x = await processEven(i).catch( err => err);
    console.log("foo: " + x);
};
foo(4);
```
