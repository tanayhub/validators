# @tanayhub/validators

A set of intuitive validations for typescript and javascript

# Table Of Contents

- [Installation](#installation)
- [Information](#information)
- [Definitions](#definitions)

# Installation

Using NPM

```
npm install @tanayhub/validators --save
```

Using YARN

```
yarn add @tanayhub/validators
```

# Information

## Require/Import

Using CommonJS

```js
const {
  SchemaValidator,
  ValidationError,
  Violation,
} = require("@tanayhub/validators");
```

Using ES6

```js
import {
  SchemaValidator,
  ValidationError,
  Violation,
} from "@tanayhub/validators";
```

## Usage

```js
/* compile desired schemas */
const validator = new SchemaValidator(/* comma separated schemas */);

/* use compiled validator anywhere */
validator.validate(/* payload to be validated */);
```

> `validator.validate()` return nothing on successful validation, whereas on failure it throws an error called `ValidationError` which can be imported as specified in [Installation](#installation)

> Each `ValidationError` contains a list of violations as follows `ValidationError { name: "ValidationError", violations: Violation[] }`, and type of each violation can be import as specified in [Installation](#installation)

## Examples

```js
/**
 * following example verifies whether the given payload
 * is either an integer between 0 to 999 or the same number
 * but with datatype string
 */
const validator = new SchemaValidator(
  { type: "string", pattern: /[0-9]+/, length: { min: 1, max: 3 } },
  { type: "number", isInteger: true, value: { min: 0, max: 999 } }
);
/* therefore */

/* does not throw Error as valid */
validator.validate("235");

/* does not throw Error as valid */
validator.validate(235);

/* throws Error as invalid */
validator.validate(true);
/*
ValidationError {
  name: "ValidationError";
  violations: [
    Violation {
      message: "expected datatype did not satisfy",
      expected: "string",
      received: "boolean"
    },
    Violation {
      message: "expected datatype did not satisfy",
      expected: "number",
      received: "boolean"
    }
  ]
}

/* throws Error as invalid */
validator.validate("12bm12");
/*
ValidationError {
  name: "ValidationError";
  violations: [
    Violation {
      message: "expected pattern did not satisfy",
      expected: "[0-9]+",
      received: "12bm12"
    },
    Violation {
      message: "length/expected value should be the maximum",
      expected: 3,
      received: 6
    }
  ]
}
*/
```

# Definitions

> You can import `TypeSchema` in typescript

```ts
import { TypeSchema } from "@tanayhub/validators";

const schema: TypeSchema = /* definition */;
```
