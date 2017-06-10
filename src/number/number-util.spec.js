'use strict';

const expect = require('chai').expect;
const utilsjs = require('../index');

describe('Number', () => {

    describe('isNumber', () => {

        it('should return a boolean true when you pass a number', () => {

            expect(utilsjs.number.isNumber(10)).to.be.true;
        });

        it('should return a boolean true when you pass a string number', () => {

            expect(utilsjs.number.isNumber('10')).to.be.true;
        });
        
        it('should return a boolean true when you pass a string empty, because Number("") return value 0', () => {

            expect(utilsjs.number.isNumber('')).to.be.true;
        });

        it('should return a boolean false when you don\'t pass anything', () => {

            expect(utilsjs.number.isNumber()).to.be.false;
        });

        it('should return a boolean false when you pass any string', () => {

            expect(utilsjs.number.isNumber()).to.be.false;
            expect(utilsjs.number.isNumber(' ')).to.be.false;
            expect(utilsjs.number.isNumber('undefined')).to.be.false;
        });

        it('should return a boolean false when you pass that is not string', () => {

            expect(utilsjs.number.isNumber(undefined)).to.be.false;
            expect(utilsjs.number.isNumber(NaN)).to.be.false;
        });
    });
});