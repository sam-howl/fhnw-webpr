# Week 4

## JavaScript Goodie

* live "stream" in original tempo

## Objects

* this is different from JavaScript than this is in Java
* Open, dynamic: no safety but dynamic, unobvious how to share structure
* Open and dynamic because 'this' is used

```javascript
const good = {
    firstname : "Good",
    lastname : "Boy",
    getName : function() {
        return this.firstname + " " +   this.lastname
    }
};
```

* Closed, explicit: best safety, easy to share structure, but no class:
* Closed because no 'this'

```javascript
function Person(first, last) {
    let firstname = first; // optional
    let lastname = last;
    return {
        getName: function() {
            return firstname + " " + lastname }
    }
    }
}
```

* Mixed, classified: lexical scope is created

```javascript
const Person = ( () => { // lexical scope
    function Person(first, last) { // ctor, binding
        this.firstname = first;
        this.lastname = last;
    }
    Person.prototype.getName = function() {
        return this.firstname + " " + this.lastname;
    };
    return Person;
}) (); // IIFE
// new Person("Good", "Boy") instanceof Person
```

* classification example: rectangles with different sizes and different rotation
* classes can intersect(?)
* class

```javascript
class Person {
  #firstname
  #lastname

  constructor(first, last) {
    this.#firstname = first
    this.#lastname = last
  }

  getName() {
    return this.#firstname + " " + this.#lastname
  }
}
```

## Prototype

* Classifies objects similar to a "type"
* manages shared properties
* is itself an object
* can be checked with "instanceOf" - this is a totally different thing than the instanceOf in Java
* can kinda simulate inheritance

```javascript
const mystring = "aksdfjöalskdfjöl"
console.dir(mystring)
Object.getPrototypeOf(mystring)
```

## New

* new creates a new runtime scope

```javascript
const Person = ( () => { // lexical scope
    function Person(first, last) { // ctor, binding //this would not create a new object, when it is called without new
    // also makes the prototype... (?)
        this.firstname = first;
        this.lastname = last;
    }
    Person.prototype.getName = function() {
        return this.firstname + " " + this.lastname;
    };
    return Person;
}) (); // IIFE
// new Person("Good", "Boy") instanceof Person // new required that a new empty object is created
```

```javascript
function Person(first, last) {
        this.firstname = first;
        this.lastname = last;
        this.getName = function() { return this.firstname + " "  + this.lastname };
        return this;
    }

    // remember: calling a function retains the scope

    const good = Person("Good", "Boy");      // "accidentally" forgot the "new"
    ok.push( good.getName() === "Good Boy"); // function is this

    const other = Person("Other", "Boy"); //only one instance (the function itself), therefore good boy is overwritten
    ok.push(other.getName() === "Other Boy");
    ok.push(good.getName()  === "Other Boy"); // OOPS! We have accidentally overwritten the good boy.

    ok.push(false === good instanceof Person); // they do not share the prototype

    const good2 = new Person("Good", "Boy"); // one way or the other we have to create a "new" object!
    ok.push( good2.getName() === "Good Boy");

    const other2 = new Person("Other", "Boy");
    ok.push(other2.getName() === "Other Boy");
    ok.push(good2.getName()  === "Good Boy"); // retained

    ok.push(good2 instanceof Person);   // now they do
```

```javascript
const good = {
        firstname : "Good",
        lastname  : "Boy",
        // must use "this" or type error
        getName   : function() { return this.firstname + " "  + this.lastname }
    };

    ok.push(good.getName() === "Good Boy");

    // share object instance
    const other = good;
    ok.push(good.getName() === "Good Boy");

    // change value
    other.firstname = "Other"; //again good is overwritten
    ok.push(other.getName() === "Other Boy");
    ok.push(good.getName()  === "Other Boy");

    const store = {
        accessor : good.getName  // when we store a reference elsewhere
        //this is dynamic, it refers to the object before the point
    };
    //because this is not referring to the good anymore, it refers to the store because this is kinda on the left side of the point
    ok.push(store.accessor()  === "undefined undefined"); // OOPS!
```

* when using "this" then you need to be aware that this refers to the receiver, in the example above it is for example good
* window is the default when nothing else is declared as referrer.

```javascript
function OpenPerson(first, last) {
        return {
            firstname : first,
            lastname  : last,
            // must use "this" or type error
            getName   : function() { return this.firstname + " "  + this.lastname }
        }
    }

    const good = OpenPerson("Good", "Boy");
    ok.push(good.getName() === "Good Boy");

    // share object instance
    const other = good;
    ok.push(good.getName() === "Good Boy");

    // change value
    other.firstname = "Other";
    ok.push(other.getName() === "Other Boy");
    ok.push(good.getName()  === "Other Boy");
```

* safe version

```javascript
function Person(first, last) {
        let firstname = first;
        let lastname  = last;
        return {
            // cannot use "this" as it is undefined
            getName   : function() { return firstname + " "  + lastname }
        }
    }

    const good = Person("Good", "Boy");
    ok.push(good.getName() === "Good Boy");

    // change value (failed attempt)
    good.firstname = "Bad";
    ok.push(good.firstname === "Bad");      // a new value has been set, but it is not used, Object.seal() prevents this
    ok.push(good.getName() === "Good Boy"); // change silently swallowed, expected: "Bad Boy"
```

* other safe:

```javascript
function Person(first, last) {
        let firstname = first;      // optional, see distinct2
        let lastname  = last;
        return {
            getName   : function() { return firstname + " "  + lastname }
        }
    }

    const good = Person("Good", "Boy");
    const bad  = Person("Bad", "Boy");     // distinct new instance

    ok.push(good.getName() === "Good Boy");
    ok.push(bad.getName()  === "Bad Boy" );

    good.getName = () => "changed";
    ok.push(good.getName() === "changed");  // change one instance doesn't change the other
    ok.push(bad.getName()  === "Bad Boy" );

    ok.push(! Person.prototype.isPrototypeOf(good)); // they do not even share the same prototype
    ok.push(! Person.prototype.isPrototypeOf(bad));

    ok.push(false === good instanceof Person); // good is not a Person! //does not classify the person
    ok.push("object" === typeof good );
```
