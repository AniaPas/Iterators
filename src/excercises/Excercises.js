import React from "react";

const Excercises = () => {
  /*Exercise 1
  Using filter function pick unique elements from a list [1, 2, 3, 4, 4, 2, 1, 3]*/

  //Solution Excercise 1.

  const list1 = [1, 2, 3, 4, 4, 2, 1, 3];
  const uniqueElements = list1.filter(
    (item, index, arr) => arr.indexOf(item) === index
  );
  console.log("Solution Excercise 1: ", uniqueElements);

  /*Exercise 2
Using reduce, map & filter function transform given data structures
  Tips:
different ways to call object fields  (obj.a, obj['a'])
different ways to assign values to Object fields {[a]: b} (where a is a value)
chaining functions (a.filter().map())
1.
  - input
    [
      {a: 1, b: 2},
      {a: 5, b: 8},
      {a: 'aaaa', c: 'aaaaa'}
    ]
  - output (field 'a' picked from every object)
    [1, 5, 'aaaa]
*/

  // Solution Excercise 2.1, method 1: easy, fast, effective but hardcoded:

  const list2 = [
    { a: 1, b: 2 },
    { a: 5, b: 8 },
    { a: "aaaa", c: "aaaaa" },
  ];
  const pickedValues = list2.map((item) => item.a);
  console.log(
    " Solution Excercise 2.1, method 1: easy, fast, effective but hardcoded:",
    pickedValues
  );

  // Solution Excercise 2.1, method 2 (more dynamic, slower, using map, reduce, filter and a few others...)

  const keyValues = list2.map((item) => {
    return Object.values(item);
  });

  const flatArray = keyValues.reduce((a, b) => {
    return a.concat(b);
  });

  const oddValues = flatArray.filter((item, index) => index % 2 === 0);
  console.log(
    "Solution Excercise 2.1, method 2 (more dynamic, slower, using map, reduce, filter and a few others...)",
    oddValues
  );

  /*
  2.
  - input
    [1, 2, 3, 4]
  - output (multiplying every element by 2)
    [2, 4, 6, 8]
*/

  //Solution Excercise 2.2

  const list3 = [1, 2, 3, 4];
  const multipliedNumbers = list3.map((item) => item * 2);
  console.log("Solution Excercise 2.2", multipliedNumbers);

  /*
3.
  - input
    [1, 2, 3, 4, 5, 6]
  - output (picking even numbers)
    [2, 4, 6]
*/

  //Solution Excercise 2.3

  const list4 = [1, 2, 3, 4, 5, 6];
  const evenNumbers = list4.filter((item) => item % 2 === 0);
  console.log("Solution Excercise 2.3", evenNumbers);

  /*
4.
  - input
    [1, 2, 3, 4]
  - output (sum of the elements)
    10
*/

  //Solution Excercise 2.4

  const list5 = [1, 2, 3, 4];
  const sumOfElements = list5.reduce((prevVal, curVal) => prevVal + curVal, 0);
  console.log("Solution Excercise 2.4: ", sumOfElements);

  /*
  5.
  - input
    [1, 2, 3, 4, 5, 6]
  - wyjście (suma nieparzystych elementów tablicy)
    9
*/

  //Solution Excercise 2.5

  const list6 = [1, 2, 3, 4, 5, 6];
  const sumOFEvenNumbers = list6
    .filter((item) => item % 2 !== 0)
    .reduce((a, b) => a + b, 0);

  console.log("Solution Excercise 2.5: ", sumOFEvenNumbers);
  /*
6.
  - input
    {who: 'Organization', why: 'Harmony', how: 'Human'}
  - wyjście (lista obiektów klucz-wartość)
    (tip: wykorzystanie Object.keys)
    [
      {key: 'who', value: 'Organization'},
      {key: 'why', value: 'Harmony'},
      {key: 'how', value: 'Human}
    ]
*/

  const obj1 = { who: "Organization", why: "Harmony", how: "Human" };
  const getKeys = Object.keys(obj1);
  const getValues = Object.values(obj1);
  const ObjWithKeysAndValues = getKeys.map((item, index) => {
    return { key: item, value: getValues[index] };
  });

  console.log(
    "Solution Excercise 2.6: method 1: easy, fast, effective: ",
    ObjWithKeysAndValues
  );

  //Solution Excercise 2.6: method 2: less effective, more code, but works:

  class MyObject {
    constructor(key, value) {
      this.key = key;
      this.value = value;
    }
  }
  const myObj1 = new MyObject(getKeys[0], getValues[0]);
  const myObj2 = new MyObject(getKeys[1], getValues[1]);
  const myObj3 = new MyObject(getKeys[2], getValues[2]);
  const createObjectArray = new Array(
    { ...myObj1 },
    { ...myObj2 },
    { ...myObj3 }
  );

  console.log(
    "Solution Excercise 2.6: method 2: less effective, more code, but works: ",
    createObjectArray
  );
  /*
  
7.
  - input
    [
      {name: 'animal', age: 3},
      {name: 'human', age: 10} 
    ]
  - output (object {key: value})
    {animal: 3, human: 10}
*/
  //Solution Excercise 2.7, method 1: quick, less code:

  const list7 = [
    { name: "animal", age: 3 },
    { name: "human", age: 10 },
  ];

  const keysNameChange = list7.map((item) => {
    return { [item.name]: item.age };
  });
  const mergeBothObjets = { ...keysNameChange[0], ...keysNameChange[1] };
  console.log(
    "Solution Excercise 2.7: method 1, less code, quick and easy: ",
    mergeBothObjets
  );

  //Solution Excercise 2.7: method 2, more code, seems more complex but works:

  const [extractObjectFromArray1, extractObjectFromArray2] = list7;
  const getValues2 = Object.values(extractObjectFromArray1);
  const getValues3 = Object.values(extractObjectFromArray2);
  const entries = new Map([getValues2, getValues3]);
  const objectFromEntries = Object.fromEntries(entries);

  console.log(
    "Solution Excercise 2.7: method 2, more code, seems more complex but works: ",
    objectFromEntries
  );
  /*
8.
  - input
    {
      key1: 1,
      key2: 'tar',
      key3: [
        {name: 'animal', age: 3},
        {name: 'human', age: 10}
      ]
    }
  - output (array of objects for each key and value)
    [
      {key: 'key1', value: 1},
      {key: 'key2', value: 'tar'},
      {
        key: 'key3',
        value: [
          {name: 'animal', age: 3},
          {name: 'human', age: 10}
        ]
      }
    ]
 */

  //Solution Excercise 2.8
  const givenObject = {
    key1: 1,
    key2: "tar",
    key3: [
      { name: "animal", age: 3 },
      { name: "human", age: 10 },
    ],
  };

  const givenObjectKeys = Object.keys(givenObject);
  const givenObjectValues = Object.values(givenObject);
  const combined = givenObjectKeys.map((item, index) => {
    return { key: item, value: givenObjectValues[index] };
  });
  console.log("Solution Excercise 2.8: ", combined);

  return <div>Excercises 1 and 2 in Excercises.js file</div>;
};

export default Excercises;
