function panggilFilterParameters(value) {
    var arr = [
        {negara: 'Indonesia', benua: 'Asia'},
        {negara: 'Jerman', benua: 'Eropa'},
        {negara: 'Spanyol', benua: 'Eropa'},
        {negara: 'Korea', benua: 'Asia'},
        {negara: 'Portugal', benua: 'Eropa'},
        {negara: 'Amerika Serikat', benua: 'Amerika'},
    ]

    var benuaAsia = arr.filter((x) => {
        return x.benua === 'Asia'
    })
    console.log(benuaAsia)

    var benuaEropa = arr.filter((x) => {
        return x.benua === 'Eropa'
    }) 
    console.log(benuaEropa)
}

panggilFilterParameters()