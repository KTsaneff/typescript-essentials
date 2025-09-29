"use strict";
function authenticate(user) {
    user.login('email@example.com', 'abc1');
}
let user;
user = {
    email: 'test@example.com',
    password: 'abc1',
    role: 'user',
    login(email, password) {
        // reach out to a database, 
        // check credentials, 
        // create a session
    },
    logout() {
        // clear the session
    }
};
class AuthenticatableUser {
    userName;
    email;
    password;
    role;
    constructor(userName, email, password, role) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    login(email, password) {
        // ...
    }
    logout() {
        // ...
    }
}
