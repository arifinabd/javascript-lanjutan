function tugas25() {
    let angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]
    console.log('sebelumnya : ',angka.toString())

    let sorting = angka.sort()
    console.log('ascending : ',sorting.toString())

    let reverse = sorting.reverse()
    console.log('descending : ',reverse.toString())

    let filter = reverse.filter((x) => {
        return x > 10
    })

    return  `filter > 10 : ${filter}`
}
console.log(tugas25())