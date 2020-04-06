# Week 7

## JavaScript Goodie

* simple way to create an Array

```javascript
Array.from("Test"); // Array from object, object requires a length property
Array.from({ length: 10 }); // this is also valid -> creates an Array with length 10 and fills in 'undefined'
Array.from({ length: 10 }).map(item => 0); // Array of ten 0
Array.from({ length: 10 }).map((item, index) => index); // Array from 0 to 9 using the optional parameter index
Array.from({ length: 50 }).map((item, index) => index); // make bigger Arrays
Array.from({ length: 50 }, (item, index) => index)); // there is also a version of Array.from that takes the map function as a second argument
```

## Classes

* allow some kind of object orientation (reminding to Java) on the outside
* it is not inheritance, it is a delegation

```javascript
class Person {
    constructor(first, last) {
        this.firstname = first;
        this.lastname = last
    }
    getName() {
        return this.firstname + " " + this.lastname
    }
}
// new Person("Good", "Boy") instanceof Person
```

* can also be extended
* it is not inheritance, it is a delegation !!

```javascript
class Student extends Person {
    constructor (first, last, grade) {
        super(first, last); // don't forget the super call
        this.grade = grade;
    }
}
const s = new Student("Top","Student", 5.5);
```

## Prototype

* Function has a domain (Definitionsbereich) and a range (Bildbereich)
* Functions are object and they also have a prototype property
* Prototype refers to a object that has a name, a constructor and itself a prototype
* Object are not functions!!! (not in the sense of JavaScript function)
* In the example above, student is a function. Student has a prototype.
* Prototype can checked like:

```javascript
const s = new Student()
// s.__proto__ === Student.prototype;
// Object.getPrototypeOf(s) === Student.prototype;
// => s instanceof Student
```

* Since a prototype is an object, it can be modified and extended
* One can replace the prototype at runtime, essentially changing the "type"
* Object.setPrototypeOf(obj, proto);
* Can we do this?

```javascript
(10).times( n => console.log(n) );
const squares=(10).times(n=> n*n);
```
