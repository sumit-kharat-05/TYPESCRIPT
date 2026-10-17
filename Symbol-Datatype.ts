const SESSION_ID = Symbol("Session Id");

interface User
{
    name:string;
    [SESSION_ID]:string;
}

const user : User = {name:"Sumit",[SESSION_ID]:"abc@123"};

console.log(user[SESSION_ID]);
