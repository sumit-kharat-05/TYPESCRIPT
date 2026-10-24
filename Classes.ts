class User
{
    name:string;
    age:number;

    constructor(name:string,age:number)
    {
        this.name=name;
        this.age=age;
    }

    getData():string
    {
        return `Hi , I Am ${this.name} And I Am ${this.age} Year Old`
    }
}

const userDetails = new User("sumit",21);