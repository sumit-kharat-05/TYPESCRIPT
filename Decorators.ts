function Logger (target:Function,context:ClassDecoratorContext)
{
    console.log(`Class Create : ${context.name}`);
    
}

@Logger
class Users
{
    constructor(public name : string){};
}

const usr = new Users('sumit');
console.log(usr.name);

