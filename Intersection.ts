type personTA = {name:string}
type personTB = {age:number}
type personTC = personTA & personTB

let personDataA : personTA = {name:'sumit'}
let personDataB : personTB = {age:21}

let personDataC : personTC = {name:'sumit' , age:21}


console.log(personDataC);


type person = {name:string}
type employee = {empId:number}
type staff = person & employee;

const s : staff = {name:'sumit', empId:1225}

console.log(s);