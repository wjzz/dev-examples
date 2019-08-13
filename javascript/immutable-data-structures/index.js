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

//==============================================
// Object.freeze EXAMPLES
//==============================================

const l = [1, 2, 3, 4, 5];
l.push(6);

console.log(l, Object.isFrozen(l));

Object.freeze(l);
console.log(Object.isFrozen(l));

try {
  l.push(7); // l is frozen, so this throws an error!
} catch (e) {
  if (e instanceof TypeError) {
    console.log("e cannot be changed!");
    console.error(e);
  }
}

// this is OK, concat doesn't modify the object
const l2 = l.concat(7);
console.log(l2);

// reading values is OK as well
console.log(l[3]);

l[3] = 55; // this is silently ignored, to get an error use strict mode
console.log(l);

// freeze is shallow!
const o = { a: { w: 123 }, b: 4 };
Object.freeze(o);
console.log(o);

// nothing happens here
o.a = 44;
o.b = 44;
console.log(o);

// this changes the inner object
o.a.w = 44;
console.log(o);

// to stop this, you have to freeze all the way down
Object.freeze(o.a);
o.a.w = 1244;
console.log(o);
