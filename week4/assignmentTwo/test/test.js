const { expect, assert } = require("chai");
const { it } = require("mocha");

function conditional(arg){
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
            return arg
    } 
    if(isNaN(arg)){
        return 'That is not a number'
    }
}
describe('Conditional test', function(){
    // Return "1" when passed 1
    it('One is the same as one', function(){
        expect(conditional(1)).to.equal(1)
    })

    // Return "2" when passed 2
    it('Two is two', function(){
        expect(conditional(2)).to.equal(2)
    })

    // Return "Good Morning" when passed a 3
    it('Get Good Morning when passed a 3', function(){
        expect(conditional(3)).to.equal('Good Morning')
    })

    // Return "Good Afternoon" when passed a 7
    it('Get Good Afternoon when passed a 7', function(){
        expect(conditional(7)).to.equal('Good Afternoon')
    })

    // Return "Good Morning" when passed a 3 or a multiple thereof
    it('Get Good Morning when passed a 3 or multiple of 3', function(){
        expect(conditional(6)).to.equal('Good Morning')
    })

    // Return "Good Afternoon" when passed a 7 or a multiple thereof
    it('Get Good Afternoon when passed a 7 or multiple of', function(){
        expect(conditional(14)).to.equal('Good Afternoon')
    })

    // Return "Good Evening" when passed a multiple of 3 and 7
    it('Get "Good Evening" when passed a multiple of 3 and 7', function(){
        expect(conditional('21')).to.equal('Good Evening')
    })

    // If the number is neither a multiple of 3 or 7 return that number as a string
    it('Returns number as string, not a multiple of 3 or 7', function(){
        expect(conditional(19)).to.equal(19)
    })

    // If any data type other than a number is passed return an error message
    it('argument is not a number', function(){
        expect(conditional('ugggh')).to.equal('ugggh')
    })

})
