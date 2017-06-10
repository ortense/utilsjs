'use strict';

const expect = require('chai').expect;
const utilsjs = require('../index');

describe('string', () => {

    describe('isValidEmail, isEmpty, isNotEmpty', () => {

        it('should return a boolean false for a string with one or more space empty', () => {

            expect(utilsjs.string.isValidEmail(' ')).to.be.false;
            expect(utilsjs.string.isValidEmail('  ')).to.be.false;
            expect(utilsjs.string.isEmpty(' ')).to.be.false;
            expect(utilsjs.string.isEmpty('  ')).to.be.false;
        });

        it('should return a boolean false for a NaN', () => {

            expect(utilsjs.string.isValidEmail(NaN)).to.be.false;
            expect(utilsjs.string.isEmpty(NaN)).to.be.false;
        });

    });
    
    describe('isValidEmail', () => {

        it('should return a boolean false for a number', () => {

            expect(utilsjs.string.isValidEmail(10)).to.be.false;
        });

        it('should return a boolean false for an undefined', () => {

            expect(utilsjs.string.isValidEmail(undefined)).to.be.false;
        });

        it('should return a boolean false for an email invalid', () => {

            expect(utilsjs.string.isValidEmail('astesiojosegmail.com')).to.be.false;
        });

        it('should return a boolean true for an email valid', () => {

            expect(utilsjs.string.isValidEmail('astesiojose@gmail.com')).to.be.true;
        });

    });
    
    describe('isEmpty', () => {

        it('should return a boolean true for a string empty', () => {
            
            expect(utilsjs.string.isEmpty('')).to.be.true;
        });

        it('should return a boolean false for an undefined', () => {
            
            expect(utilsjs.string.isEmpty()).to.be.false;
        });

    });
    
    describe('isNotEmpty', () => {

        it('should return a boolean true for a some value string', () => {
            
            expect(utilsjs.string.isNotEmpty('some text')).to.be.true;
        });

        it('should return a boolean true for a string with one or more space empty', () => {
            
            expect(utilsjs.string.isNotEmpty(' ')).to.be.true;
            expect(utilsjs.string.isNotEmpty('  ')).to.be.true;
        });

        it('should return a boolean true for an undefined', () => {
            
            expect(utilsjs.string.isNotEmpty(undefined)).to.be.true;
        });

        it('should return a boolean true for an NaN', () => {
            
            expect(utilsjs.string.isNotEmpty(NaN)).to.be.true;
        });
    
        it('should return a boolean true for an number', () => {
            
            expect(utilsjs.string.isNotEmpty(0)).to.be.true;
        });

        it('should return a boolean true for an any boolean', () => {
            
            expect(utilsjs.string.isNotEmpty(true)).to.be.true;
            expect(utilsjs.string.isNotEmpty(false)).to.be.true;
        });

    });

});