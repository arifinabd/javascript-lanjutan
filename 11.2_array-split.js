function panggilSplit() {
  var kalimat = "saya jago programing javascript";
  console.log(kalimat);

  var result = kalimat.split(" ");
  console.log(result);

  var index = result[2];
  return index;
}

console.log(panggilSplit());
