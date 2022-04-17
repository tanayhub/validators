# @tanayhub/validators

> A set of intuitive validations for typescript and javascript
---
## Installation

```
npm i @tanayhub/validators -s
```
or
```
yarn add @tanayhub/validators
```
---
## Usage
```js
import { Validator } from "@tanayhub/validators";
/* const { Validator } = require("@tanayhub/validators"); */

const validator = new Validator(/* comma separated schemas */);
/* later somewhere in the code */
validator.validate(/* payload */);
```
### Examples
```js
import { Validator } from "@tanayhub/validators";
const validator = new Validator({ type: "string" });
/* later on in code */
validator.validate("john doe");
/* returns `null` indicating no errors */
validator.validate(true);
/* returns `["datatype:string"]` indicating payload should be string */
```
```js
import { Validator } from "@tanayhub/validators";
const validator = new Validator({ type: "string", length: { min: 6 } });
/* later on in code */
validator.validate("length");
/* returns `null` indicating no errors */
validator.validate("invalid length");
/* returns `["length.equality"]` indicating payload length is not equal to given value */
```
## Schemas

### Any Schema
Use this schema when actual type of the schema doesn't matter
```ts
import { SchemaType } from "@tanayhub/validators";
const schema: SchemaType = { type: "any" };
```

### Array Schema
Use this schema to validate an array. You can also add additional validation criterias
```ts
import { SchemaType } from "@tanayhub/validators";
const schema: SchemaType = { type: "array" };
```
```ts
import { SchemaType } from "@tanayhub/validators";
const schema: SchemaType = { type: "array", length: { max: 5, min: 0 } };
```
> In the above example `length.max` and `length.min` are 2 different criterias. An extensive list is given below

| criteria | value data type | description | required |
| -- | -- | -- | -- |
|length.max|number|max length of array | false |
