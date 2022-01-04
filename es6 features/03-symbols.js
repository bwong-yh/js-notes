// symbols are a primitive type object and are completely unique
const symbolOne = Symbol("a name");
const symbolTwo = Symbol("a name");
console.log(symbolOne, typeof symbolOne);
console.log(symbolTwo, typeof symbolTwo);
console.log(symbolOne === symbolTwo);

// symbols can be used to create objects' keys / properties
const member = {};

const titleOne = Symbol("title");
const titleTwo = Symbol("title");

member["name"] = "luffy";
member.age = 19;
/*
member.title = "pirate";
member.title = "captain";
*/
member[titleOne] = "pirate";
member[titleTwo] = "captain";
console.log(member);
