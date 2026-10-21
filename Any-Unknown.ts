interface User {
  name: string;
  age: number;
}

function isUser(x: unknown): x is User {
  return (
    typeof x === "object" &&
    x !== null &&
    typeof (x as User).name === "string" &&
    typeof (x as User).age === "number"
  );
}

const data: unknown = JSON.parse('{"name":"Sumit","age":21}');

if (isUser(data)) {
  console.log(data.name);
} else {
  console.log("Invalid Data");
}
