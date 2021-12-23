// function foreach() {
//     var data = ['a', 'b', 'c']

//     data.forEach(function (item, index, array) {
//         console.log(item)
//         console.log(index)
//         console.log(array)
//     })
// }

// foreach()

function foreach() {
  var data = ["a", "b", "c"];

  data.forEach((item, index, array) => {
    console.log('"ini item" ', item);
    console.log('"ini index" ', index);
    console.log('"ini array" ', array);
  });
}

foreach();
