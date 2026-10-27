// class user
// {
//     constructor(name:string){};
//     login(): String
//     {
//        return `${this.name} User Is Logged In`;
//     }
// }
// class admin extends user
// {
//     deleteUser(id:number):string
//     {
//         return `${this.name} Deleted User id ${this.id}`;
//     }
// }
// const Admin = new admin ("Sumit");
// console.log(Admin.login())
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    login() {
        return `${this.name} logged in`;
    }
}
class Admin extends User {
    deleteUser(id) {
        return `${this.name} deleted user ${id}`;
    }
}
const admin = new Admin("Sumit");
console.log(admin.login());
console.log(admin.deleteUser(5));
export {};
