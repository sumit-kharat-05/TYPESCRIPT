function Logger(target, context) {
    console.log(`Class Create : ${context.name}`);
}
@Logger
class Users {
    name;
    constructor(name) {
        this.name = name;
    }
    ;
}
const usr = new Users('sumit');
console.log(usr.name);
export {};
