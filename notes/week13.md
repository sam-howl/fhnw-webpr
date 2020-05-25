# Week 13

```javascript
```

## JavaScript Goodie

* RegEx match() gives back match or null
* Different flags can be used, for example to ignore upper and lower case

```javascript
    const myExpr = new RegExp("asdf","i") // regex, flag

    const expr = /webpr/i;
    document.writeln("WebPr".match(expr))

    const expr1 = /love\s+webpr/i;
    //const expr = /^.*webpr.*$/i;
    document.writeln("I love WebPr!".match(expr1))

    const expr2 = /love\s+webpr/i;
    document.writeln("I love WebPr!".replace(expr2, "love love love webpr"))

    const expr3 = /love\s+(webpr)/i;
    document.writeln("I love WebPr!".replace(expr3, "love love love $1"))
```

## Modules

* Modules are not Packages, Dependencies, Libraries, Releases, Units of publication or Objects
* Module will be imported (and exported)
* Modules are async
* Recommendation from Mr. König: use always URI to import modules
* Import Variants

```javascript
import "module-name"; // mostly used
import defaultExport from "module-name";
import * as name from "module-name";
import { export } from "module-name";
import { export as alias } from "module-name";
import { export1 , export2 } from "module-name"; // mostly used
var promise = import("module-name");
```

* Export Variants

```javascript
export { name1, name2, …, nameN }; // mostly used
export function FunctionName(){...}
export const name1, name2, …, nameN; //or let
export class ClassName {...}
export default expression;
export { name1 as default, … };
export * from …;
export { name1, name2, …, nameN } from …;
```
