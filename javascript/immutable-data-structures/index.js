//==============================================
// MAP EXAMPLES
//==============================================

const { Map } = require("immutable");

const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = map1.set("b", 50);

console.log(`${map1.get("b")} vs ${map2.get("b")}`);

const map3 = Map({ a: 1, b: 2, c: 3 });

console.log("=== equality checks ===");
console.log(map1 === map3); // false
console.log(map1.equals(map3)); // true

const map4 = map3.set("b", 2); // no change
console.log(map3 === map4); // true

// Copies are free
const mapCopy = map3;

//==============================================
// LIST EXAMPLES
//==============================================

const { List } = require("immutable");

const list1 = List([1, 2, 3]);
console.log(list1.toString());

list1[2] = 11; // nothing happens!!
console.log(list1.toString());

const list2 = list1.push(4); // the original list is not changed
console.log(list1.toString(), " ==> ", list2.toString());

const list3 = list2.map(number => `element #${number}`);
console.log(list3.toString());
