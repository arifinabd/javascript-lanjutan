let peoples = [
    {
        name : 'andy',
        gender : 'male',
    },
    {
        name : 'siti',
        gender: 'female',
    },
    {
        name : 'maemunah',
        gender : 'female',
    },
]

let female = peoples.filter((people) => {
    return people.gender === 'female';
})

console.log(female)