const form1 = { name: "Sumit", email: "sumit@gmail.com", referelCode: "FRIEND50" };
const form2 = { name: "Amit", email: "amit@gmail.com" };
function getBonus(form) {
    if (form.referelCode === undefined) {
        return 0;
    }
    return 50;
}
console.log(getBonus(form1));
console.log(getBonus(form2));
export {};
