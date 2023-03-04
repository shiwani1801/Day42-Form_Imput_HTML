const textErrorName = document.querySelector(".text-error-name");
const textErrorEmail = document.querySelector(".text-error-email");

document.getElementById("text").addEventListener("change",event=>{
    let nameRegex = RegExp('^[A-Z][a-z A-Z \\s]{2,}$')
    if (!nameRegex.test(event.target.value))
        textErrorName.textContent = "Name is incorrect"
    else
      textErrorName.textContent = ""
})

document.getElementById("email").addEventListener("change",event=>{
    let emailRegex = RegExp('^[A-Za-z0-9][A-Za-z0-9+-]*[.]?[A-Za-z0-9+-]+@[A-Za-z0-9][A-Za-z0-9+-]*(.[A-Za-z0-9]+)?.[A-Za-z]{2,6}$')
    if (!emailRegex.test(event.target.value))
        textErrorEmail.textContent = "Email is incorrect"
    else
        textErrorEmail.textContent = ""
})