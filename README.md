# gopher-fetch

Load data from the gopher protocol the way you would fetch from HTTP in JavaScript

## Usage

```
npm i --save gopher-fetch
```

```js
const fetch = require("gopher-fetch")();

const response = await fetch("gopher://gopher.floodgap.com/");

console.log(await response.text());
```

## CLI

```
npm i -g gopher-fetch

gopher-fetch gopher://gopher.floodgap.com/

# Or use npx

npx gopher-fetch gopher://gopher.floodgap.com/
```
