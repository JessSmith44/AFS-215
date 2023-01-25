function conditional(arg){
    if(isNaN(arg)){
        // console.log(typeof(arg))
        return 'I am sorry, your input is not valid. Please try again'
    }
    if(arg === 1){
        return 1
    }
    if(arg === 2){
        return 2
    }
    if(arg === 3){
        return 'Good Morning'
    }
    if(arg === 7){
        return 'Good Afternoon'
    }
    if(arg % 7 === 0 && arg % 3 === 0){
        return 'Good Evening'
    }
    if(arg % 3 == 0){
        return 'Good Morning'
    }
    if(arg % 7 === 0){
        return 'Good Afternoon'
    }
    
    if(arg % 3 !== 0 && arg % 7 !== 0){
            return String(arg)
    } 
}
console.log(conditional(1))
console.log(conditional(2))
console.log(conditional(3))
console.log(conditional(7))
console.log(conditional(6))
console.log(conditional(14))
console.log(conditional(21))
console.log(conditional(19))
console.log(conditional('Jeronimo'))