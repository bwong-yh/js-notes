// sets store a list of unique value; no repeated value
const namesArray = ["luffy", "zoro", "luffy", "sanji"];

/* 
const namesSet = new Set(namesArray);
console.log(namesSet);

const uniqueNames = [...namesSet];
console.log(uniqueNames);
*/

const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

// creating a new set; methods can be chained
const ages = new Set();

ages.add(20);
console.log(ages);

ages.add(25).add(30).add(20);
console.log(ages);

ages.delete(25);
console.log(ages, ages.size, ages.has(25));

ages.clear();
console.log(ages);

// sets allow iteration
const members = new Set([
  { name: "chopper", age: 17 },
  { name: "usopp", age: 19 },
  { name: "nami", age: 20 },
]);

members.forEach(member => console.log(member.name, member.age));
