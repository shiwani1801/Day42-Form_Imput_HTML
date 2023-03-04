const textError = document.querySelector(".text-error-name");

document.getElementById("text").addEventListener("change",event=>{
    let nameRegex = RegExp('^[A-Z][a-z A-Z \\s]{2,}$')
    if (!nameRegex.test(event.target.value))
        textError.textContent = "Name is incorrect"
    else
      textError.textContent = ""
})
document.getElementById("email").addEventListener("change",event=>{
    let emailRegex = RegExp('^[A-Za-z0-9][A-Za-z0-9+-]*[.]?[A-Za-z0-9+-]+@[A-Za-z0-9][A-Za-z0-9+-]*(.[A-Za-z0-9]+)?.[A-Za-z]{2,6}$')
    if (!emailRegex.test(event.target.value))
        textErrorEmail.textContent = "Email is incorrect"
    else
        textErrorEmail.textContent = ""
})


document.getElementById("tel").addEventListener("change",event=>{
    let telRegex = RegExp('^[0-9]{2} [0-9]{10}$')
    if (!telRegex.test(event.target.value))
        textErrorTel.textContent = "Telphone number is incorrect"
    else
        textErrorTel.textContent = ""
})
