'use strict';

const expect = require('chai').expect;
const string = require('../index');

describe('String', () => {
    
    describe('isValidEmail', () => {

        it('should return a boolean false for an string empty', () => {

            expect(string.isValidEmail('')).to.be.false;
        });

        it('should return a boolean false for an string with one space empty or more', () => {

            expect(string.isValidEmail(' ')).to.be.false;
            expect(string.isValidEmail('  ')).to.be.false;
        });

        it('should return a boolean false for an number', () => {

            expect(string.isValidEmail(10)).to.be.false;
        });

        it('should return a boolean false for an NaN', () => {

            expect(string.isValidEmail(NaN)).to.be.false;
        });

        it('should return a boolean false for an undefined', () => {

            expect(string.isValidEmail(undefined)).to.be.false;
        });

        it('should return a boolean false for an email invalid', () => {

            expect(string.isValidEmail('astesiojosegmail.com')).to.be.false;
        });

        it('should return a boolean true for an email valid', () => {

            expect(string.isValidEmail('astesiojose@gmail.com')).to.be.true;
        });

    });

});