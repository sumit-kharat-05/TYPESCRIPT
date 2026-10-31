type UserData1 = {
  name: string;
  age: number;
  email: string;
  [key: string]: number | string;
};
let fetchData: UserData1 = 
{
  name: "sumit",
  age: 21,
  email: "sumit@123",
  education: "btech",
  semester: 5,
}
console.log(fetchData);
