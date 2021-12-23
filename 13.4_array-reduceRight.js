const array1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];
let result = array1.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue)
);

console.log(array1);
console.log(result);

// const arrayyy = [1, 2, 3, 4, 5];

// let hasil = arrayyy.reduceRight(
//   (accumulator, currentValue) => accumulator + currentValue
// );

// console.log(hasil);
