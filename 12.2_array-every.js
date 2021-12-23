let products = [
    {name : 'apple', type: 'fruit'},
    {name : 'grape', type: 'fruit'},
    {name : 'table', type: 'furniture'},
    {name : 'door', type: 'furniture'},
];

console.log(
    products.every((product) => product.type === 'fruit')
)