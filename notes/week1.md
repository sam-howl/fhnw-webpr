# Week 1
## Functions
* function references (name of the function references to the function, also possible to create a new reference: ```const myfun = fun1; myfun();```, there can also be created a function list like ```const funs = [null, undefined, fun1, fun2]; funs[2]();``` )
* too many, too few arguments (too many: language allows more arguments than parameters, there is no compiler, therefore also no compiler error)
* when to return, missing returns (rule of thumb: when {} and you want to use a value from the function a return must be used!)
* statements vs. expressions (A statement does something. Statements represent an action or command e.g print statements, assignment statements. Expression is a combination of variables, operations and values that yields a result value.)
* ```function noReturn()    { 1; }``` there will be no hint that 'return' is missing, everything in {} must be terminated by ;

* pass functions as argument to a function is possible and works
```javascript
function doit(waszutunist) {
    return function bla(arg) { return waszutunist(arg) }
}
        
document.writeln( doit(fun1)(10) === 1 );
document.writeln( doit(fun2)(10) === 10 );
```
* this can also be written like this (easier to read):
```javascript
const doit2 = callme => arg => callme(arg) ;
        
document.writeln( doit2(fun1)(10) === 1 );
```
* also functions with functions as arguments can be referenced by a variable. Then only the argument can be passed instead of the function with the argument.
```javascript
const doFun2 = doit2(fun1);
        
document.writeln( doFun2(10) === 1 );
document.writeln( doFun2()   === 1 );
```

## Tests
* Keep track on tests: result must be true (then you see much faster if something does not work as expected, because it is false)