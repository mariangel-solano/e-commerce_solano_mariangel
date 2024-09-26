let navbar = [
    {categoria: "Inicio", href: "/index.html"},
    {categoria: "Productos", href: "/producto.html"},
    {categoria: "Contactos", href: "#"}
]

let header= document.querySelector ("header");

let menu= [];

for (boton of navbar) {
    menu.push(`<a class="nav-link" href="${boton.href}">${boton.categoria}</a>`)
}

let a =    
        `<nav class="navbar navbar-expand-lg d-block bg-body-tertiary fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Luxury</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav column-gap-2">
                    ${menu.join().replaceAll(",", "")}
                </div>
                </div>
            </div>
        </nav>`
header.innerHTML = a;