function deretAngka(n) {
    var result = ''
    for (let i =1; i <= n; i++){
        if(i % 3 === 0){
            result += 'NIO'
        } else if (i % 5 === 0){
            result += 'MIC'
        } else {
            result += i+' '
        }
    }
    return result
   }
   
   
   console.log(deretAngka(10))
   console.log(deretAngka(20))
   console.log(deretAngka(30))