const sessionAccount = {
    email: "usuario@gmail.com",
    password: "usuario123",
}

const form = document.querySelector ("form")
const message = document.querySelector ("#message") 

const emailItem = localStorage.getItem ("email")

if (emailItem === sessionAccount.email) {
    window.location.href = "./index.html";
} else {
    form.addEventListener ("submit", (event) => {
        event.preventDefault();
        let email = form.elements.email.value
        let password = form.elements.password.value

        if (sessionAccount.email === email && sessionAccount.password === password) {
            window.location.href = "./index.html"
            localStorage.setItem("email", email) 
        } else {
            message.innerText = "Vuelev a intentarlo (Datos incorrectos)"
        }
    })
}