class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getData() {
        return `Hi , I Am ${this.name} And I Am ${this.age} Year Old`;
    }
}
const userDetails = new User("sumit", 21);
export {};
