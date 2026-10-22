interface Info {
  name: string;
  age: number;
  college: number;
}

interface teacherInfo extends Info {
  subject: string;
}

interface managementInfo extends Info {
  fees: number;
}

let studentInfo: Info = {
  name: "sumit",
  age: 21,
  college: "GHRCEMN",
};

let teacherInfo: Info = {
  name: "sumit",
  age: 21,
  college: "GHRCEMN",
  subject: "DSA",
};

let managementInfo: Info = {
  name: "sumit",
  age: 21,
  college: "GHRCEMN",
  fees: 90000,
};

console.log(studentInfo);
