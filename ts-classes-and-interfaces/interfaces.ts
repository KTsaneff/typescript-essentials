interface Authenticatable {
    email: string;
    password: string;

    login(email: string, password: string): void;
    logout(): void;
}

function authenticate(user: Authenticatable) {
    user.login('email@example.com', 'abc1');
}

interface Authenticatable {
    role: string;
}

let user: Authenticatable;

user = {
    email: 'test@example.com',
    password: 'abc1',
    role: 'user',

    login( email, password){
        // reach out to a database, 
        // check credentials, 
        // create a session
    },
    logout() {
        // clear the session
    }
}

class AuthenticatableUser implements Authenticatable {
    constructor(
        public userName: string,
        public email: string,
        public password: string,
        public role: string
    ) {
        
    }

    login(email: string, password: string): void {
        // ...
    }
    logout(): void {
        // ...
    }
}

interface AuthenticatableAdmin extends Authenticatable {
    role: 'admin' | 'superadmin'
}