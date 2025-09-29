"use strict";
class AdvancedUser {
    _firstName = '';
    _lastName = '';
    set firstName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid name.');
        }
        this._firstName = name;
    }
    get firstName() {
        return this._firstName;
    }
    set lastName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid name.');
        }
        this._lastName = name;
    }
    get lastName() {
        return this._lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
const advancedMax = new AdvancedUser();
advancedMax.firstName = 'Max';
advancedMax.lastName = 'Ribbit';
console.log(advancedMax.fullName);
