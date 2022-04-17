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
|length.equalTo|array:number| possible length values | false |
|length.max|number|max length of array | false |
|length.min|number|min length of array | false |
|length.notEqualTo|array:number| impossible length values | false |
|items|schema| schema for each element of the array | false |
|tuple|array:schema| validates each corresponding index with given schema at the same index | false |

### Boolean Schema
Use this schema to validate a boolean. You can also add additional validation criterias
```ts
import { SchemaType } from "@tanayhub/validators";
const schema: SchemaType = { type: "boolean" };
```

| criteria | value data type | description | required |
| -- | -- | -- | -- |
|value.equalTo|array:boolean| possible values | false |
|value.notEqualTo|array:boolean| impossible values | false |

### Function Schema
Use this schema to validate a function
```ts
import { SchemaType } from "@tanayhub/validators";
const schema: SchemaType = { type: "function" };
```

### Hybrid Schema
Use this schema to validate using multiple schemas. Even if one schema satisfies, it'll return `null` as output. You can also add additional validation criterias
```ts
import { SchemaType } from "@tanayhub/validators";
const schema: SchemaType = { type: "hybrid", possible: [/* comma separated schemas */] };
```
| criteria | value data type | description | required |
| -- | -- | -- | -- |
|possible|array:schema| either schema should satisfy | true |

### Null Schema
Use this schema to validate null
```ts
import { SchemaType } from "@tanayhub/validators";
const schema: SchemaType = { type: "null" };
```
### Number Schema
Use this schema to validate a number. You can also add additional validation criterias
```ts
import { SchemaType } from "@tanayhub/validators";
const schema: SchemaType = { type: "number" };
```
| criteria | value data type | description | required |
| -- | -- | -- | -- |
|value.equalTo|array:number| possible values | false |
|value.max|number|max value | false |
|value.min|number|min value | false |
|value.notEqualTo|array:number| impossible values | false |
|integer|boolean| whether the payload should be an integer | false |

### Object Schema
Use this schema to validate an object. You can also add additional validation criterias
```ts
import { SchemaType } from "@tanayhub/validators";
const schema: SchemaType = { type: "object" };
```
| criteria | value data type | description | required |
| -- | -- | -- | -- |
|instance|class| check if the payload is instance for class | false |
|properties| object:string-schema | validate each property of the object | false |

### String Schema
Use this schema to validate a string. You can also add additional validation criterias
```ts
import { SchemaType } from "@tanayhub/validators";
const schema: SchemaType = { type: "string" };
```
| criteria | value data type | description | required |
| -- | -- | -- | -- |
|length.equalTo|array:number| possible length values | false |
|length.max|number|max length of array | false |
|length.min|number|min length of array | false |
|length.notEqualTo|array:number| impossible length values | false |
|value.equalTo|array:string| possible values | false |
|value.notEqualTo|array:string| impossible values | false |
|pattern|string or regex | should match given pattern | false |
### Undefined Schema
Use this schema to validate undefined
```ts
import { SchemaType } from "@tanayhub/validators";
const schema: SchemaType = { type: "undefined" };
```
