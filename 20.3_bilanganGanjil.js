function panggilGanjil() {
  let ganjil = [];

  for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
      ganjil.push(i);
    } else {
      ganjil.push("Genap");
    }
  }
  return ganjil;
}
console.log(panggilGanjil());
