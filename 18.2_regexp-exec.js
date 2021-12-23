function panggilregexp() {
    let data = 'belajar satu tahun bersama niomic'
    let str = new RegExp(/niomic/)

    console.log(str.exec(data));
}

panggilregexp()