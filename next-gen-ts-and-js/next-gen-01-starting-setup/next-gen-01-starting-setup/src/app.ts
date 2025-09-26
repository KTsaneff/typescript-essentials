const userName = 'Max';
// userName = 'Maximilian';
let age = 30;

age = 29;

var result;
function addFunc(a: number, b: number){
    result = a+ b;
    return result;
}

console.log(result);

const addConst = (a: number, b: number = 1) => a + b;

console.log(addConst(2, 5));

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event));
}

printOutput(addConst(5, 6));
printOutput(addConst(5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(hobbies[0]);
activeHobbies.push(...hobbies);

const person = {
    firstName: 'Max',
    personAge: 30
};

const copiedPerson = { ...person};

const addParamsFunc = (...numbers: number[]) => {
    return numbers.reduce((currentResult, curremntValue) => {
        return currentResult + curremntValue;
    }, 0);
};

const addedNumbers = addParamsFunc(5, 10, 2, 3.7);
console.log(addedNumbers);

const hobby1 = hobbies[0];
const hobby2 = hobbies[1];

const [hobbyA, hobbyB, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName, personAge } = person;