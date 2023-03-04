const textError = document.querySelector(".text-error-name");

document.getElementById("text").addEventListener("change",event=>{
    let nameRegex = RegExp('^[A-Z][a-z A-Z \\s]{2,}$')
    if (!nameRegex.test(event.target.value))
        textError.textContent = "Name is incorrect"
    else
      textError.textContent = ""
})
