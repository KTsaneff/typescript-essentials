const appUser = {
    name: 'Max',
    age: 32,
    permissions: [{id: 'p1', title: 'Admin', description: 'Admin access'}, {id: 'p2', title: 'Manager', description: 'Manager access'}]
}

// type AppUser = {
//     name: string;
//     age: number;
//     parmissions: {
//         id: string;
//         title: string;
//         description: string;
//     }[]
// }

type AppUser = typeof appUser;

// type Perms = {
//     id: string;
//     title: string;
//     description: string;
// }[];

type Perms = AppUser['permissions'];
type Perm = Perms[number];

type Names = string[];
type Name = Names[number];