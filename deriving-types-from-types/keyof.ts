type User = {
    name: string;
    age: number;
}

type UserKeys = keyof User;

let validKey: UserKeys;

validKey = 'name';
validKey = 'age';

function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
    const val = obj[key];
    if (val === undefined || val === null) {
        throw new Error('Accessing undefined of null value.')
    }

    return val;
}

const data = {id: 1, isStored: true, values: [1, -5, 10]}
const isStored = getProp(data, 'isStored');

const user = {name: 'Max', age: 32};

const val = getProp(user, 'age');