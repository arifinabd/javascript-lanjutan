function panggilIsFinite() {
    var a = isFinite([1,2,3,4,5])
    var b = isFinite(['jakrat', 'bandung', 'aceh'])
    var c = isFinite([1,2,4,'hallo word'])
    var d = isFinite([-99939399])

    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
}

panggilIsFinite()