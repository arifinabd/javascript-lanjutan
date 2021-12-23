function panggilUnshift() {
    var kota = ['jakarta', 'bandung', 'malang', 'surabaya', 'makasar'];
    console.log(kota);

    kota.unshift('depok', 'bogor');

    return kota
}

console.log(panggilUnshift())