const expect = require('chai').expect
const { it } = require('mocha')
const Project = require('../myLib/javascriptClass')

beforeEach(function(){
    itemList = new Project()
    itemList.addToArray('bean')
    itemList.addToArray('coffee')
    itemList.addToArray('paper')
})

it('return item', function(){
    // var items = new Project()
})

it('returns array with deep', function(){
    // var item = new Project()
    expect(itemList.addToArray('book')).to.deep.equal(['bean', 'coffee', 'paper', 'book'])
})

it('returns the array', function(){
    expect(itemList.calling())
})

it('Should remove item from array', function(){
    // item.addToArray('bean')
    // item.addToArray('coffee')
    // item.addToArray('paper')
    expect(itemList.removal('bean')).to.eql(['coffee', 'paper'])
})

it('should search for an item and return true if found', function(){
    // itemList.addToArray('bean')
    // itemList.addToArray('coffee')
    // itemList.addToArray('paper')
    expect(itemList.searchItem('bean')).to.eql(true)
})





before(function(){
    console.log('*****Testing Started******')
})

afterEach(function(){
    console.log('*****Test complete******')
})

after(function(){
    console.log('*****Testing Finished******')
})
// Refactor your code to implement beforeEach to make your code DRY. Also implement at least one case of before, after and afterEach to show its functionality. This could be as simple as a console message, or something more complex if you prefer.
// Note: Make sure to comment out your original code as you refactor in order to show your development process.
