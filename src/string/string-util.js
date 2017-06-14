'use strict';

const string = {
    
    isEmpty: (string) => {
        
        const regexp = /./;
        return !regexp.test(string);
    },
    
    isNotEmpty: function (string) {
        
        return !this.isEmpty(string);
    },
    
    isValidEmail: (email) => {
        
        const regexp = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
        return regexp.test(email);
    },
    
    isValidUserName: (userName, userNameMinSize = 6) => {

        const regexp = new RegExp(`^[.0-9a-zA-Z_-]{${Number(userNameMinSize)},}$`);
        return regexp.test(userName);
    },
    
    isValidPassword(password, passwordMinSize = 6) {

        const regexp = new RegExp(`^[0-9a-zA-Z]{${passwordMinSize},}$`);
        return regexp.test(password);
    }
    
};

module.exports = Object.assign({}, string);