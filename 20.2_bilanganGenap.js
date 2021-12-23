function panggilGenap() {
    let genap = []

    for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            genap.push(i)
        }
    }
    return genap
}
console.log(panggilGenap())

