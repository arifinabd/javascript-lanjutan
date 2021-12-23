function panggilJoin() {
    var kota = ['jakarta', 'bali', 'bandung', 'padang', 'medan']
    console.log(kota)

    var result = kota.join('_*_')
    return result
}
console.log(panggilJoin())
