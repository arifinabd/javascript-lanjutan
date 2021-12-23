function panggilPop() {
  var kota = ["jakarta", "bandung", "malang", "surabaya", "makasar"];

  console.log(kota);
  console.log("========================");

  var kota2 = kota.pop();
  console.log(kota2);
  //   kota.pop();

  return kota;
}

console.log(panggilPop());
