function getInfo() {
    const name = document.getElementById("userName");
    console.log(name.value);
    const email = document.getElementById("Email");
    console.log(email.value);
    const age = document.getElementById("Age");
    console.log(age.value);
}
document.getElementById("btn")?.addEventListener("click", getInfo);
export {};
