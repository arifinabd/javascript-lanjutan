function tugas22() {
    var text = 'Saya ingin belajar bersama'
    var array = text.split(' ')
    console.log(array)

    array.forEach((item, index, array) => {
        console.log('item : ', item, ' Index ke ', index)
    })
}

tugas22()