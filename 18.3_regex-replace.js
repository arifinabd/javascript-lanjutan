function panggilregex() {
  let data = "belajar satu tahun bersama niomic";

  console.log(data.replace(/satu/, "2"));
}

panggilregex();

function panggilRegexp() {
  let data = "Belajar-Satu-Tahun-Bersama-Niomic";

  console.log(
    data.replace(
      /Belajar-Satu-Tahun-Bersama-Niomic/,
      "Belajar Satu Tahun Bersama Niomic"
    )
  );

  //Tulis Code Jawaban Kamu Di Bawah ini
}

panggilRegexp();
