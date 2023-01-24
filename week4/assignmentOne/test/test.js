const { expect, assert } = require("chai");
const { it } = require("mocha");
// const calculator = require('../myLib/calculator')

describe('calculator', function(){
    it('adds two numbers', function(){
        assert.typeOf(1, 'number')
        assert.typeOf(3, 'number')
        expect(1 + 3).to.equal(4)
    })
    
    it('subtract two numbers', function(){
        assert.typeOf(1, 'number')
        assert.typeOf(5, 'number')
        expect(5 - 1).to.equal(4)
    })
    
    it('multiply two numbers', function(){
        assert.typeOf(3, 'number')
        assert.typeOf(2, 'number')
        expect(3 * 2).to.equal(6)
    })
    
    it('divide two numbers', function(){
        assert.typeOf(6, 'number')
        assert.typeOf(3, 'number')
        expect(6 / 3).to.equal(2)
    })

})
