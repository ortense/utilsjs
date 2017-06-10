'use strict';

const expect = require('chai').expect;
const utils = require('../index');

describe('string', () => {
    
    describe('isValidEmail', () => {

        it('should return a boolean false for a string empty', () => {

            expect(utils.string.isValidEmail('')).to.be.false;
        });

        it('should return a boolean false for a string with one or more space empty', () => {

            expect(utils.string.isValidEmail(' ')).to.be.false;
            expect(utils.string.isValidEmail('  ')).to.be.false;
        });

        it('should return a boolean false for a number', () => {

            expect(utils.string.isValidEmail(10)).to.be.false;
        });

        it('should return a boolean false for a NaN', () => {

            expect(utils.string.isValidEmail(NaN)).to.be.false;
        });

        it('should return a boolean false for an undefined', () => {

            expect(utils.string.isValidEmail(undefined)).to.be.false;
        });

        it('should return a boolean false for an email invalid', () => {

            expect(utils.string.isValidEmail('astesiojosegmail.com')).to.be.false;
        });

        it('should return a boolean true for an email valid', () => {

            expect(utils.string.isValidEmail('astesiojose@gmail.com')).to.be.true;
        });

    });
    
    describe('isEmpty', () => {

        it('should return a boolean true for a string empty', () => {

            expect(utils.string.isEmpty('')).to.be.true;
        });

        it('should return a boolean false for a string with one or more space empty', () => {

            expect(utils.string.isEmpty(' ')).to.be.false;
            expect(utils.string.isEmpty('  ')).to.be.false;
        });

        it('should return a boolean false for an undefined', () => {

            expect(utils.string.isEmpty()).to.be.false;
        });

        it('should return a boolean false for an NaN', () => {

            expect(utils.string.isEmpty(NaN)).to.be.false;
        });

    });
    
    describe('isNotEmpty', () => {

        it('should return a boolean true for a some value string', () => {

            expect(utils.string.isNotEmpty('some text')).to.be.true;
        });

        it('should return a boolean true for a string with one or more space empty', () => {

            expect(utils.string.isNotEmpty(' ')).to.be.true;
            expect(utils.string.isNotEmpty('  ')).to.be.true;
        });

        it('should return a boolean true for an undefined', () => {

            expect(utils.string.isNotEmpty(undefined)).to.be.true;
        });

        it('should return a boolean true for an NaN', () => {

            expect(utils.string.isNotEmpty(NaN)).to.be.true;
        });
    
        it('should return a boolean true for an number', () => {
        
            expect(utils.string.isNotEmpty(0)).to.be.true;
        });
    
        it('should return a boolean true for an any boolean', () => {
        
            expect(utils.string.isNotEmpty(true)).to.be.true;
            expect(utils.string.isNotEmpty(false)).to.be.true;
        });
    });

});