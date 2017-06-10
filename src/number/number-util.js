'use strict';

const number = {

    isNumber: (number) => {

        const regexp = /^[-]?\d*\.?\d*$/;
        return regexp.test(number);
    }
};

module.exports = Object.assign({}, number);