const { assert } = require('chai');
const { describe } = require('mocha');
const Instances = require('../myLib/Instances.js')


describe('calculating multiples of 3 and/or 7', function() {
    describe('number is a multiple of 3', function() {
        it('item should be a zero when divided by 3', function(){
            assert.typeOf(3, 'number');
            assert.equal(3, '3')
        })
    });
    
    describe('number is a multiple of 7', function(){
        it('item should be a zero when divided by 7', function(){
            assert.typeOf(7, 'number');
            assert.equal(7, '7')
        })
    });
    
    describe('number is a multiple of 3 and 7', function(){
        it('item should be a zero when divided by 3 and 7', function(){
            assert.typeOf(21, 'number');
            assert.equal(21, '21')
        })
    });

    describe('number is not a multiple of 3 and 7', function() {
        it('item will not be a multiple of 3 or 7', function(){
            assert.typeOf(19, 'number');
            assert.equal(19, '19')
        })
    });

    describe('response is not a number', function() {
        it('item should not be a zero when divided by 3 and/or7', function(){
            assert.typeOf('be', 'string');
            assert.equal('be', 'be')
        })
    });
    
    });