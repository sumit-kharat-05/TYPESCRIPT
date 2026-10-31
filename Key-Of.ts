interface user
{
    id:number,
    name:string,
    email:string
}
let Data:user
{
    id:'01'
    name:'sumit'
    email:'sumit@123'
}

type PersonDataa = keyof user;
let dataas:PersonDataa;
dataas="id"
console.log(dataas);
