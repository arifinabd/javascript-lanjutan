var nestedArray = [
   [1,2,3,4],
   ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
   ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]
function panggilNestedArray(value){
    var result = []
    var val1 = []
    var val2 = []
    var val3 = []
    var val4 = []
    for (var q = 0; q < value.length; q++) {
        val1.push(value[q][0]) 	
        val2.push(value[q][1])
        val3.push(value[q][2])
        val4.push(value[q][3])
    }   
    result.push(val1,val2,val3,val4)
    
    return result
   }
    
  console.log(panggilNestedArray(nestedArray)) 

// var nestedArray = [
//     [1,2,3,4],
//     ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
//     ['Facebook', 'Tesla', 'Microsoft', 'Apple']
//  ]
//  function panggilNestedArray(value){
    
//      var val1 = []
//         for (var q = 0; q < nestedArray.length; q++) {
    
//             val1.push(nestedArray[q][0]) 	
//         }
//      var val2 = []
//         for (var q = 0; q < nestedArray.length; q++) {
    
//             val2.push(nestedArray[q][1]) 	
//         }
//      var val3 = []
//         for (var q = 0; q < nestedArray.length; q++) {
    
//             val3.push(nestedArray[q][2]) 	
//         }
//      var val4 = []
//         for (var q = 0; q < nestedArray.length; q++) {
    
//             val4.push(nestedArray[q][3]) 	
//         }
//      var hasil = []
//      hasil.push(val1, val2, val3, val4)
    
//      console.log(hasil)
//    }

//    panggilNestedArray(nestedArray)
