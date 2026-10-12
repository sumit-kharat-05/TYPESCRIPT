interface order
{
    id:number;
    item:string;
    instructions?:string;
}

const order1:order = {id:"01",item:"Pizza",Instructions:"Extra Cheese"};
const order2:order = {id:"02",item:"Sandwich",Instructions:"No Mayo"};
const order3:order = {id:"03",item:"Pasta"} 

console.log(order3.instructions);