function getInfo1() {
    let if1 = document.getElementById("userName");
    let if2 = document.getElementById("Email");
    let if3 = document.getElementById("Age");
    console.log(if1.value);
    console.log(if2.value);
    console.log(if3.value);
}
document.getElementById("btn")?.addEventListener("click", getInfo1);
export {};
