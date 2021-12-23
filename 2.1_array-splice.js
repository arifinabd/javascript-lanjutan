function panggilSplice() {
  var kota = ["jakarta", "bandung", "malang", "surabaya", "makasar"];
  console.log(kota);
  console.log(kota[2]);

  kota.splice(2, 0, "palembang");
  return kota;
}

console.log(panggilSplice());
