import { sayHelloWorld } from "./utils/util.js";

console.log("before hello world");
sayHelloWorld();
console.log(sum(1, 2));

function sum(a, b) {
  return a + b;
}
