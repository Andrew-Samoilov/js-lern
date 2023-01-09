console.log(' -  * test * - '); // console.log(' -  * CodeWars *  * - ');

class User {
    email;

    constructor(email) {
        this.email = email;
    }

    get email() {
        return this.email;
    }
    set email(newEmail) {
        this.email = newEmail;
    }
}

class Admin extends User {
    // Change code below this line
    AccessLevel;

    AccessLevel = {
        BASIC: "basic",
        SUPERUSER: "superuser",
    };
    constructor({ email, AccessLevel }) {
        super(email),
        this.AccessLevel = AccessLevel,
    }
    // Change code above this line
}

const mango = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"