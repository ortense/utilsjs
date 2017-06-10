'use strict';

const string = {
    
    isValidEmail: (email) => {
        
        const regexp = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
        return regexp.test(email);
    },
    
    isEmpty: (string) => {
        
        const regexp = /./;
        return !regexp.test(string);
    }
};

module.exports = Object.assign({}, {string});