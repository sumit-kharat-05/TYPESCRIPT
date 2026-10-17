interface signupForm
{
    name:string;
    email:string;
    referelCode?:string;
}

const form1:signupForm = {name:"Sumit" , email:"sumit@gmail.com",referelCode:"FRIEND50"};
const form2:signupForm = {name:"Amit" , email:"amit@gmail.com"};

function getBonus(form:signupForm):number
{
    if(form.referelCode === undefined)
    {
        return 0;
    }
    return 50;
}

console.log(getBonus(form1));
console.log(getBonus(form2));
