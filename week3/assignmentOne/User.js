module.exports = class User {
    constructor(num1 = '', num2 = '', name = 'Jasey Rae', age = 22){
        this.num1 = num1,
        this.num2 = num2,
        this.name = name,
        this.age = age
    }
    addNums(num1, num2) {
        return this.num1 + this.num2
    }
    subNums(num1, num2){
        return this.num1 - this.num2
    }
    multiNum(num1, num2){
        return this.num1 * this.num2
    }
    divNum(num1, num2){
        return this.num1 / this.num2
    }
    // Create a function that acts as a greeting for a user, returning both their name and age.
    userInfo = () => {return `Welcome, ${this.name}! Your selected age is ${this.age}`}
    
    dataType = (arg) => {return `${arg} is a ${typeof(arg)}`}

    turnNumberToString = () => {
        let numToString1 = String(this.num1)
        let numToString2 = String(this.num2)
        return numToString1 + numToString2
    }
}

// Create another function that returns the numbers you choose as a string data type instead of a 
// number data type - meaning that if your numbers are 2 and 5 you should get a return of "25" instead of 7.

// Use a JavaScript method to accomplish this. Require this class into a separate js file and create two new 
// instances of this class. Both should use each function at least once.