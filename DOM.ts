function getInfo1()
{
    let if1 = document.getElementById("userName")! as HTMLInputElement;
    let if2 = document.getElementById("Email")! as HTMLInputElement;
    let if3 = document.getElementById("Age")! as HTMLInputElement;
    console.log(if1.value);
    console.log(if2.value);
    console.log(if3.value);

}

document.getElementById("btn")?.addEventListener("click",getInfo1);

