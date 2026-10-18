function getInfo() {
  
  const name = document.getElementById("userName") as HTMLInputElement;
  console.log(name.value);
  const email = document.getElementById("Email") as HTMLInputElement;
  console.log(email.value);
  const age = document.getElementById("Age") as HTMLInputElement;
  console.log(age.value);
}

  document.getElementById("btn")?.addEventListener("click",getInfo);