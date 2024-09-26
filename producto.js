class Producto {
    constructor (titulo, detalle, precio, stock, imagen) {
        this.titulo= titulo;
        this.detalle= detalle;
        this.precio= precio;
        this.stock= stock;
        this.imagen= imagen;
    }
}

const auto = new Producto ("Bmw m240i", "BMW Serie 2 3.0 M240i F22 Coupe", "$3600", 10, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg")
let etiquetas=  ` <div>
<h1> Descripción </h1>
<h2> Titulo: ${auto.titulo}</h2>
<p> Detalle: ${auto.detalle}</p>
<p> Precio: ${auto.precio}</p>
<p> Stock: ${auto.stock}</p>
<img src="${auto.imagen}" alt="Imagen del auto widht="80%" height="300px" align-items="center"/>
</div>
`
let main= document.querySelector ("main");
main.innerHTML= etiquetas;

