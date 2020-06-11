# Week 15

```javascript
```

## JavaScript Goodie

* Equivalence and Transitivity:

```javascript
a == b == c => a ==c
const a = "0";
const b =  0;
const c = [];

assert.is( a == b, true ); //comparison might cause unwanted type convertion
assert.is( b == c, true );
assert.is( a == c, false );
```

* 0 == with [], "0" and "\t" / but [] != "0" and so on!
* JavaScript has six values that are false: false, null, undefined, "", 0, NaN
* falsy = what coerces to false / true = everything that isn't false / truthy = what coerces to true

```javascript
assert.true( "1"   == 1     ); // attention: only because of the coercion !!!
assert.true( "0"   == 0     );
assert.true( +"2"  == 2     ); // + coerces into a number
assert.true( !"0"  == false ); // ! coerces into a boolean
assert.true( !0  == true    ); // !!!
assert.true( !!"0" == true  );
assert.is  ( Number("0"), 0 );
```
