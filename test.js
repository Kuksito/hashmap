import { HashMap } from "./index.js";

const test = new HashMap();

test.set("apple", "red"); //10
test.set("banana", "yellow"); //5
test.set("carrot", "orange"); //3
test.set("dog", "brown"); //12
test.set("elephant", "gray"); //1
test.set("frog", "green"); //4
test.set("grape", "purple"); //11
test.set("hat", "black"); //11!
test.set("ice cream", "white"); //13
test.set("jacket", "blue"); //14
test.set("kite", "pink"); //15
test.set("lion", "gold"); //12!

test.length();

test.keys();
test.values();

test.entries();

test.get("banana");

test.has("kite");

test.remove("frog");
test.remove("cherry");
