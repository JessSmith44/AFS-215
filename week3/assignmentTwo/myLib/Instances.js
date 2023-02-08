module.exports = class Instances{
    constructor(num){
        this.num = num
    }
    // Return "Good Morning" when passed a 3 or a multiple thereof
    goodMorning(num){
        if(typeof this.num === 'number'){
            if(this.num % 3 === 0){
                return "Good Morning"
            }
        }
    }
    // Return "Good Afternoon" when passed a 7 or a multiple thereof
    goodAfternoon(num){
        if(typeof this.num === 'number'){
            if(this.num % 7 === 0){
                return "Good Afternoon!"
            }
        }
    }
    // Return "Good Evening" when passed a multiple of 3 and 7
    goodEvening(num){
        if(typeof this.num === 'number'){
            if(this.num % 7 === 0 && this.num % 3 === 0){
                return "Good Evening!"
            }
        }
    }
    // If the number is neither a multiple of 3 or 7 return that number as a string
    unacceptableNum(num){
        if(typeof this.num != 'number'){
            if(num % 3 != 0 && num % 7 != 0){
                return String(num)
            }
        }       
    }
    // If any data type other than a number is passed return an error message.
    notANum(num){
        if(typeof this.num === isNaN(num)){
           return "Error, that is not a number! Please try again!"
        }
    }
}