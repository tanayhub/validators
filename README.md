# validator

A node utility that helps validate json objects with the ease of autocomplete

## 1.0.0 Support

### Constraints

<!-- iteration 1 -->

-   instance
-   integer
-   key-value
-   length[equal]
-   length[max]
-   length[min]
-   length[not-equal]
-   ordered
-   pattern
-   unordered
-   value[equal]
-   value[max]
-   value[min]
-   value[not-equal]

<!-- iteration 2 -->

-   instance,key-value
-   instance,value[not-equal]
-   integer,value[max]
-   integer,value[min]
-   integer,value[not-equal]
-   length[equal],pattern
-   length[equal],unordered
-   length[equal],value[not-equal]
-   length[max;min]
-   length[max;not-equal]
-   length[max],pattern
-   length[max],unordered
-   length[max],value[not-equal]
-   length[min;not-equal]
-   length[min],pattern
-   length[min],unordered
-   length[min],value[not-equal]
-   length[not-equal],pattern
-   length[not-equal],unordered
-   length[not-equal],value[not-equal]
-   pattern,value[not-equal]
-   value[max;min]
-   value[max;not-equal]
-   value[min;not-equal]

<!-- iteration 3 -->

-   integer,value[max;min]
-   integer,value[max;not-equal]
-   integer,value[min;not-equal]
-   length[equal],pattern,value[not-equal]
-   length[max;min;not-equal]
-   length[max;min],pattern
-   length[max;min],unordered
-   length[max;min],value[not-equal]
-   length[max;not-equal],pattern
-   length[max;not-equal],unordered
-   length[max;not-equal],value[not-equal]
-   length[max],pattern,value[not-equal]
-   length[min;not-equal],pattern
-   length[min;not-equal],unordered
-   length[min;not-equal],value[not-equal]
-   length[min],pattern,value[not-equal]
-   length[not-equal],pattern,value[not-equal]
-   value[max;min;not-equal]

<!-- iteration 4 -->

-   integer,value[max;min;not-equal]
-   length[max;min;not-equal],pattern
-   length[max;min;not-equal],unordered
-   length[max;min;not-equal],value[not-equal]
-   length[max;min],pattern,value[not-equal]
-   length[max;not-equal],pattern,value[not-equal]
-   length[min;not-equal],pattern,value[not-equal]

<!-- iteration 5 -->

-   length[max;min;not-equal],pattern,value[not-equal]

### Future Support

| constraint | data type     |
| ---------- | ------------- |
| strict     | object        |
| unique     | array         |
| contains   | array, string |
| custom     | any           |
