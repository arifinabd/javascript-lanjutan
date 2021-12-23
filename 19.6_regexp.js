function panggilRegexp(value) {
    var ambilData = value.match(/\w/g)
    console.log(ambilData, 'Semua karakter berupa angka dan huruf akan terambil semua, kecuali spasi')

    var ambilData2 = value.match(/\d/g)
    console.log(ambilData2, 'menggambil karakter angka')

    var ambilData3 = value.match(/\s/g)
    console.log(ambilData3)
    console.log("Banyaknya Spasi : ",ambilData3.length)

    var ambilData4 = value.match(/\W/g)
    console.log(ambilData4, 'Untuk mengambil semua karakter KECUALI huruf dan angka')

    var ambilData5 = value.match(/\D/g)
    console.log(ambilData5, 'untuk mengambil semua karakter dan spasi KECUALI angka')

    var ambilData6 = value.match(/\S/g)
    console.log(ambilData6, 'mengambil karakter KECUALI SPASI.')

}

panggilRegexp('Bulan ke 1 sd ke 4 !@#$%^&_')