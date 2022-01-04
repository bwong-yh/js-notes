// rest parameter - bundles args into a single array arg
const sum = (...nums) => {
  console.log(nums);
  return nums.reduce((acc, curr) => acc + curr);
};

const total = sum(1, 3, 5, 7, 9);
console.log(total);

// spread syntax (arrays) - spreads array items into its individual component
const names = ["luffy", "zoro", "sanji"];
console.log(...names);

const strawHat = ["chopper", "robin", "frankie", ...names];
console.log(strawHat);

// spread syntax (objects) - creates a copy of an object instead of creating a pointer
const person = {
  name: "billy",
  age: 30,
  location: "japan",
};

const personClone = { ...person, married: true };
console.log(personClone);
