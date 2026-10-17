const SESSION_ID = Symbol("Session Id");
const user = { name: "Sumit", [SESSION_ID]: "abc@123" };
console.log(user[SESSION_ID]);
export {};
