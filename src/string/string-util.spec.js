'use strict';

const expect = require('chai').expect;
const utilsjs = require('../index');

describe('string', () => {

    describe('isEmpty, isNotEmpty, isValidEmail', () => {

        it('should return a boolean true for a string empty', () => {

            expect(utilsjs.string.isEmpty('')).to.be.true;
        });
    
        it('should return a boolean false when don\'t pass parameters', () => {
        
            expect(utilsjs.string.isEmpty()).to.be.false;
            // expect(utilsjs.string.isNotEmpty()).to.be.false;
            expect(utilsjs.string.isValidEmail()).to.be.false;
            // expect(utilsjs.string.isValidUserName()).to.be.false;
        });
        
        it('should return a boolean false when pass any characters', () => {
            
            expect(utilsjs.string.isEmpty('should return false')).to.be.false;
            expect(utilsjs.string.isEmpty(' ')).to.be.false;
            expect(utilsjs.string.isEmpty('  ')).to.be.false;
            expect(utilsjs.string.isEmpty(10)).to.be.false;
            expect(utilsjs.string.isEmpty(true)).to.be.false;
            expect(utilsjs.string.isEmpty(false)).to.be.false;
            expect(utilsjs.string.isEmpty(null)).to.be.false;
            expect(utilsjs.string.isEmpty(NaN)).to.be.false;
            expect(utilsjs.string.isEmpty(undefined)).to.be.false;
            expect(utilsjs.string.isEmpty({})).to.be.false;
            // expect(utilsjs.string.isNotEmpty([])).to.be.false;
            expect(utilsjs.string.isEmpty(Number)).to.be.false;
            expect(utilsjs.string.isEmpty(Float32Array)).to.be.false;
            expect(utilsjs.string.isEmpty(Float64Array)).to.be.false;
        });
        
        it('should return a boolean true when pass any characters', () => {
            
            expect(utilsjs.string.isNotEmpty('should return true')).to.be.true;
            expect(utilsjs.string.isNotEmpty(' ')).to.be.true;
            expect(utilsjs.string.isNotEmpty('  ')).to.be.true;
            expect(utilsjs.string.isNotEmpty(10)).to.be.true;
            expect(utilsjs.string.isNotEmpty(true)).to.be.true;
            expect(utilsjs.string.isNotEmpty(false)).to.be.true;
            expect(utilsjs.string.isNotEmpty(null)).to.be.true;
            expect(utilsjs.string.isNotEmpty(NaN)).to.be.true;
            expect(utilsjs.string.isNotEmpty(undefined)).to.be.true;
            expect(utilsjs.string.isNotEmpty({})).to.be.true;
            // expect(utilsjs.string.isNotEmpty([])).to.be.true;
            expect(utilsjs.string.isNotEmpty(Number)).to.be.true;
            expect(utilsjs.string.isNotEmpty(Float32Array)).to.be.true;
            expect(utilsjs.string.isNotEmpty(Float64Array)).to.be.true;
        });
        
    });
    
    describe('isValidEmail', () => {

        it('should return a boolean false for an email invalid', () => {

            expect(utilsjs.string.isValidEmail('astesiojosegmail.com')).to.be.false;
            expect(utilsjs.string.isValidEmail('astesiojose@gmail')).to.be.false;
            expect(utilsjs.string.isValidEmail('astesiojose@gmail.')).to.be.false;
            expect(utilsjs.string.isValidEmail('@gmail.com')).to.be.false;
            expect(utilsjs.string.isValidEmail('gmail.com')).to.be.false;
        });

        it('should return a boolean true for an email valid', () => {
    
            expect(utilsjs.string.isValidEmail('astesiojose@gmail.com')).to.be.true;
        });

    });
    
    describe('isValidUserName', () => {

        it('should accepts only aphanumercis [.0-9a-zA-Z_-]', () => {

            expect(utilsjs.string.isValidUserName('000000')).to.be.true;
            expect(utilsjs.string.isValidUserName('......')).to.be.true;
            expect(utilsjs.string.isValidUserName('______')).to.be.true;
            expect(utilsjs.string.isValidUserName('------')).to.be.true;
        });
    });
    
    describe('isValidPassword', () => {
        
        it('should accepts only aphanumercis [0-9a-zA-Z_-]', () => {
    
            expect(utilsjs.string.isValidPassword('04ae658')).to.be.true;
            expect(utilsjs.string.isValidPassword('4a3dy8')).to.be.true;
        });
    });

});