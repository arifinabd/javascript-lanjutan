function startend() {
  var text = "saya pintar ngoding javascript";

  console.log(text.startsWith("saya"));
  //mencari kata awal "saya" hasilnya true
  console.log(text.startsWith("pintar", 5));
  //mencari kata awal "pintar" dimulai dari index ke-5 hasilnya true
  console.log(text.endsWith("javascript"));
  //mencari kata akhir 'javascript' hasilnya true
  console.log(text.endsWith("javas", 25));
  //mencari kata akhir 'javas' dimulai dari index ke-25
  console.log(text.endsWith("javasc", 26));
  //mencari kata akhir 'javas' dimulai dari index ke-26
}
startend();
