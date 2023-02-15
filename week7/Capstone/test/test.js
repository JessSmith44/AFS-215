const expect = require('chai').expect
const { it } = require('mocha')
const TodoList = require('/Users/jesss/school/AFS-215/week7/Capstone/mylib/TodoList')

// You will want to use at least one of each of the following data types to your list: 
// String, Number, Object / Dictionary, and Boolean

beforeEach(function(){
    todo = new TodoList()
    todo.addToArray(423)
    todo.addToArray('Make Coffee')
    todo.addToArray('Dishes')
    todo.addToArray({'todolist':'project'})
    todo.addToArray(true)
    todo.addToArray('Drink')
})

// Call the list

it('should call the list', function(){
    expect(todo.calling())
})

// Add an item to the list

it('Adds single item to list', function(){
    expect(todo.addToArray('Groceries')).to.deep.eql([423, 'Make Coffee', 'Dishes', {'todolist':'project'}, true, 'Drink', 'Groceries'])
})

// Add multiple items to the list

it('Adds multiple items to list', function(){
    expect(todo.addsMulti('A')).to.deep.eql([423, 'Make Coffee', 'Dishes', {'todolist':'project'}, true, 'Drink', 'A'])
    expect(todo.addsMulti('B')).to.deep.eql([423, 'Make Coffee', 'Dishes', {'todolist':'project'}, true, 'Drink', 'A', 'B'])
})

// Remove a specific item from the list

it('Removes item from list', function(){
    expect(todo.removal('Dishes')).to.eql([423, 'Make Coffee', {'todolist':'project'}, true, 'Drink'])
})

// Remove the first item from the list

it('Removes first item from list', function(){
    expect(todo.removal(423)).to.eql([ 'Make Coffee', 'Dishes', {'todolist':'project'}, true, 'Drink',])
})

// Remove the last item from the list

it('Removes last item from list', function(){
    expect(todo.removal('Drink')).to.deep.eql([423, 'Make Coffee', 'Dishes', {'todolist':'project'}, true])
})

// If attempting the JavaScript version of this project use beforeEach.

before(function(){
    console.log('*****Testing Started******')
})

afterEach(function(){
    console.log('*****Test complete******')
})

after(function(){
    console.log('*****Testing Finished******')
})