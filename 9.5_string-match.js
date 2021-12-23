function mat() {
    var isi = 'saya pintar masak nasi goreng'

    console.log(isi.match('pintar'))
    console.log(isi.match('goreng'))
    console.log(isi.match(/pintar/))
}

mat()