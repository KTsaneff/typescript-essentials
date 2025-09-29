class AdvancedUser {
    private _firstName: string = '';
    private _lastName: string = '';

    set firstName (name: string) {
        if (name.trim() === ''){
            throw new Error('Invalid name.')
        }
        this._firstName = name;
    }
    get firstName() {
        return this._firstName;
    }

    set lastName (name: string) {
        if (name.trim() === ''){
            throw new Error('Invalid name.')
        }
        this._lastName = name;
    }
    get lastName() {
        return this._lastName;
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    static eid = 'USER';

    static greet() {
        console.log('Hello!');
    }
}

class Employee extends AdvancedUser {
    constructor(public jobTitle: string) {
        super();
        //super.firstName = 'NewName';
    }

    work() {
        // ...
        
    }
}

abstract class UIElement {
    constructor(public identifier: string) {}

    clone() {
        // logic to duplicate the UI element
    }
}

//let uiElement = new UIElement();

class SideDrawer extends UIElement {
    constructor(public identifier: string, public position: 'left' | 'right'){
        super(identifier)
    }
}

console.log(AdvancedUser.eid)
AdvancedUser.greet();

const advancedMax = new AdvancedUser();

advancedMax.firstName = 'Max';
advancedMax.lastName = 'Ribbit';

console.log(advancedMax.fullName);