# Week 12

```javascript
```

## JavaScript Goodie

```javascript
const Studierender = () => {
        let grade = 0;
        const setGrade = x => grade = x;
        const getGrade = () => grade;

        return {
            setGrade: setGrade,
            getGrade: getGrade,
            foo:      () => 42
        }
    };
    const studi = Studierender();
    studi.setGrade(6.0);
    document.writeln(studi.getGrade());
    document.writeln(studi.foo());
    //return 6 42
```

* replace key value pair to remove duplication

```javascript
const Studierender = () => {
        let grade = 0;
        const setGrade = x => grade = x;
        const getGrade = () => grade;

        return {
            setGrade,
            getGrade,
            foo:      () => 42
        }
    };
    const studi = Studierender();
    studi.setGrade(6.0);
    document.writeln(studi.getGrade());
    document.writeln(studi.foo());
    //return 6 42
```

## Coordination

* Sequence achieved with delegated coordination (scheduler) for example .then().then()...
* Result dependency achieved with implicit coordination (DataFlowVariable)

```javascript
const processEven = i => new Promise( (resolve, reject) => {
        if (i % 2 === 0) {
            resolve(i); //success callback
        } else {
            reject(i); //failure callback
        }
    }
);
processEven(4).then( num => console.log(num));
```

* When sequence is randomly .then() cannot be used
* Scheduler is a queue and doing these actions after one another, used with locks
* DataFlow

```javascript
const DataFlowVariable = howto => {
    let value = undefined;
    return () => undefined === value
                 ? value = howto() //howto() only called once
                 : value;
};
```

* DataFlow makes it possible to work with values that are not yet defined:

```javascript
const z = DataFlowVariable(() => x() + y());   // z depends on x and y, which are set later
const x = DataFlowVariable(() => y());         // x depends on y, which is set later
const y = DataFlowVariable(() => 1);
```
