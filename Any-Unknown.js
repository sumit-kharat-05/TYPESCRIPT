function isUser(x) {
    return (typeof x === "object" &&
        x !== null &&
        typeof x.name === "string" &&
        typeof x.age === "number");
}
const data = JSON.parse('{"name":"Sumit","age":21}');
if (isUser(data)) {
    console.log(data.name);
}
else {
    console.log("Invalid Data");
}
export {};
