function cari() {
  var isi = "belajar di niomic academmy dengan fasih";

  console.log(isi.search("Di"));
  console.log(isi.search("di"));
  console.log(isi.search(/di/));
}

cari();
