function balikKata(kata) {
  let result = kata.split("").reverse().join("");
  return result;
}

console.log(balikKata("Niomic!"));
console.log(balikKata("JavaScript"));
console.log(balikKata("alohahola"));
console.log(balikKata("Jawa_Barat"));
