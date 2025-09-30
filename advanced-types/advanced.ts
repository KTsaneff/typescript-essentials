type DataStore = {
    [prop: string]: number | boolean;
};

let someObj: Record<string, number | boolean>;

let store: DataStore = {};

// ...

store.id = 5;
store.isOpen = false;
//store.name = 'Max'; -> not allowed

let roles = ['admin', 'guest', 'editor'] as const;

// roles.push('max');

const firstRole = roles[0];

const dataEntries = {
    entry1: 0.51,
    entry2: -1.23
} satisfies  Record<string, number> ;

// ...

// dataEntries.entry3 -> does not satisfy the type of the constant
dataEntries.entry2;