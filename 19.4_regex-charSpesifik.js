function panggilSpesifik(value) {
  var data = value.match(/ke/g);
  console.log(data);
  var data2 = value.match(/Bulan/g);
  console.log(data2);
  var data = value.match(/[ke]/g);
  console.log(data);
}

panggilSpesifik("Bulan ke 1 sd ke 4");
