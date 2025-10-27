import type { User } from "./models/user";

const users: User[] = [];

export function addUser (name: string, age: number): User {
    const newUser: User = {
        id: users.length + 1,
        name,
        age,
    };
    users.push(newUser);
    return newUser;
}

export function getUsers() : User[] {
    return users;
}