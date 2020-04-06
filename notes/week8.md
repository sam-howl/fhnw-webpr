# Week 8

```javascript
```

```javascript
const plusOne = x => x + 1;
const timesTwo = x => x * 2;
timesTwo(plusOne(0)) // 2

const plusOneTimesTwo = x => timesTwo(plusOne(x))
plusOneTimesTwo(0) // 2

const compose = f => g => x => g(f(x))
compose(plusOne)(timesTwo)(0) // 2
const myFunc = x => compose(plusOne)(timesTwo)(x) // store the function in a variable
//make eta reduction
const myFunc2 = compose(plusOne)(timesTwo)
myFunc(0) // 2

// make sure g does not receive undefined
const safeCompose = f => g => x => {
    const result = f(x);
    return f(x) === undefined ? undefined : g(result);
    }
safeCompose(plusOne)(timesTwo)(0) // 2
compose(x => undefined)(timesTwo)(0) // NaN
safeCompose(x => undefined)(timesTwo)(0) // undefined
```

## Improve our tests

```javascript
// brackets only for lexical block
( () => {
    let ok = [];

    const collect = (10).times( n => n+1 );

    ok.push(collect.length === 10);
    ok.push(collect[0] === 1);
    ok.push(collect[9] === 10);

    report("util-times2", ok);
}) ();
```

* the report function is rather short if everything is okay

```javascript
/**
 * report :: String, [Bool] -> DOM ()
 * Report reports the list of boolean checks
 * @param {string}      origin: where the reported tests come from
 * @param { [boolean] } ok:     list of applied checks
 */
function report(origin, ok) {
    const extend = 20;
    if ( ok.every( elem => elem) ) {
        document.writeln(" "+ padLeft(ok.length, 3) +" tests in " + padRight(origin, extend) + " ok.");
        return;
    }
    let reportLine = "    Failing tests in " + padRight(origin, extend);
    bar(reportLine.length);
    document.writeln("|" + reportLine+ "|");
    for (let i = 0; i < ok.length; i++) {
        if( ! ok[i]) {
            document.writeln("|    Test #"+ padLeft(i, 3) +" failed                     |");
        }
    }
    bar(reportLine.length);
}
```

## Moves

* Abstraction: Ignore details.
