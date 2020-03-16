# Week 4

## JavaScript Goodie

How to use quotes and double quotes...

```javascript
const name = "Kevin Schäfer";
const quote = 'Mr. Näf said: "JS is best!"' //contains double quotes
const motivation = "Let's go!" //quote does not have to be escaped
const motivation2 = 'Let\'s go!' //escape the quotes
<div onclick="alert('hi')"></div>
const template = `my static part ${motivation}. done.` //backtick is the third way to create a string
String(Date.now()) //transferred to String
String( /abc/ ) //regular expression with String representation "/abc/"
String( / \ /) //work with backslashes, as String representation "/ \\ /"
const newLine = " \\n " //requires an additional backslash to escape the new line
```

## Snake

* pairEq more general that can be exported into a library because it can be used for all Pair structures, because it does not rely on x and y like snakeEquals

```javascript
// function snakeEquals(a, b) { return a.x === b.x && a.y === b.y }
const pairEq = a => b =>  fst(a) === fst(b) && snd(a) === snd(b);
```

* make a safe getElementById function -> will never return undefined or null

```javascript
function safeGetElementById(id) {
    let result = document.getElementById(id);
    return result === undefined || result === null
           ? Left  ("cannot find element with id "+id)
           : Right (result)
}
```

* Eta-Reduction of either function

```javascript
const either1 = e => f => g => e (f) (g);
const either2 = e => f => e(f);
const either3 = e => e;
const either = id;
```

* rework either in snake after conclusion from eta-reduction of either

```javascript
// either (safeGetElementById("canvas"))
//        (log)
//        (startWithCanvas);
// can be write like:
// id (safeGetElementById("canvas"))
//        (log)
//        (startWithCanvas);
// can be write like:
safeGetElementById("canvas")
    (log)
    (startWithCanvas);
```

## Maybe

```javascript
const Nothing = Left ();
const Just = Right ;
const maybe = either ;
maybe (expressionThatMightGoWrong)
      (handleBad)
      (handleGood);
```

## Refactor tests

```javascript
<body>

    <script src="function/function.js"></script>
    <script src="function/functionTest.js"></script>

    <script src="lambda/lambda.js"></script>
    <script src="lambda/lambdaTest.js"></script>

    <script src="snake/snake.js"></script>
    <script src="snake/snakeTest.js"></script>

</body>
```

changed to:

```javascript
<body>
    <script>
      const tests = ["function", "lambda", "snake"];
      //"hack" to undermine browser security
      //   document.writeln('<script src="function/function.js"></' + 'script>');

      tests.forEach(testName => {
        document.writeln(
          `<script src="${testName}/${testName}.js"></` + "script>"
        );
        document.writeln(
          `<script src="${testName}/${testName}Test.js"></` + "script>"
        );
      });
    </script>
</body>
```

## Eval

* code in eval is literally there were the eval sits

```javascript
eval("console.log(1)")
const a = 1;
const code = "1 + a"
eval(code) //gives back 2
let b = 1;
eval("b=2;") //gives back 2 and b is now 2
```

* be aware that eval can be misused (eval is executed in global scope)

```javascript
display(context, x => eval(userFunction.value, x)) //user can give in alert("you got hacked");
```

* to prevent side effects (Function will not be executed in global scope)

```javascript
const f = Function('x', 'return ' + userFunction.value);
//initial rendering
display(context, f)
userFunction.onchange = text => display(context, f);
```

* to prevent side effects and make it possible to update on change

```javascript
//better with update function
const update = () => {
    const f = Function('x', 'return ' + userFunction.value);
    display(context, f)
}
//initial rendering
update();
userFunction.onchange = text => update();
```
