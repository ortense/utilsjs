'use strict';

const expect = require('chai').expect;
const utils = require('../index');

describe('string', () => {
    
    describe('isValidEmail', () => {

        it('should return a boolean false for an string empty', () => {

            expect(utils.string.isValidEmail('')).to.be.false;
        });

        it('should return a boolean false for an string with one or more space empty', () => {

            expect(utils.string.isValidEmail(' ')).to.be.false;
            expect(utils.string.isValidEmail('  ')).to.be.false;
        });

        it('should return a boolean false for an number', () => {

            expect(utils.string.isValidEmail(10)).to.be.false;
        });

        it('should return a boolean false for an NaN', () => {

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

});