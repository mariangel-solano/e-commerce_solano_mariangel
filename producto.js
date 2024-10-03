const main = document.querySelector("main");

const elemento = window.location.search.split("=")[1];

const autos = [
    {
    id: 1,
    modelo: "Tundra",
    descripcion: "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    precio: 34,
    url: `https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${this.id}.jpg`,
  }, {
    id: 2,
    modelo: "I",
    descripcion: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    precio: 62,
    url: `https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${this.id}.jpg`,
  }, {
    id: 3,
    modelo: "M3",
    descripcion: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    precio: 14,
    url: `https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${this.id}.jpg`,
  }, {
    id: 4,
    modelo: "Rio",
    descripcion: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    precio: 66,
    url: `https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${this.id}.jpg`,
  }, {
    id: 5,
    modelo: "Ram Van B250",
    descripcion: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    precio: 99,
    url: `https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${this.id}.jpg`,
  }, {
    id: 6,
    modelo: "Econoline E150",
    descripcion: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    precio: 23,
    url: `https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${this.id}.jpg`,
  }, {
    id: 7,
    modelo: "Rabbit",
    descripcion: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    precio: 54,
    url: `https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${this.id}.jpg`,
  }, {
    id: 8,
    modelo: "928",
    descripcion: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    precio: 63,
    url: `https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${this.id}.jpg`,
  }, {
    id: 9,
    modelo: "Intrepid",
    descripcion: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    precio: 52,
    url: `https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${this.id}.jpg`,
  }];


const carFind = autos.find((autos) => autos.id == elemento);

let etiquetas = `<div class="producto-container">
    <div class="producto-main">
        <div class="left-section">
            <img src="${carFind.url}" alt="Car ${carFind.id}" id="main-image">
        </div>

        <div class="center-section">
            <div class="product-info">
                <h1 class="producto-h1">${carFind.modelo}</h1>
                <p class="description">${carFind.descripcion}</p>
                <div class="rating">
                    <span>⭐⭐⭐⭐⭐</span> <a href="#">(3)</a>
                </div>
                <p class="original-price">$100.000</p>
                <p class="discounted-price">$${carFind.precio} <span class="discount">(5% OFF)</span></p>
                <p class="installments">In 6 installments of $3,799.78</p>
            </div>
        </div>

        <div class="right-section">
            <div class="shipping-info">
                <h3>Free Standard International Shipping.</h3>
                <p>Estimated between Tue, Oct 22 and Wed, Nov 6.</p>
                <p class="bold">${carFind.stock} available</p>
                <div class="quantity-selector">
                    <label for="quantity" class="quantity-label">Quantity:</label>
                    <select id="quantity" class="quantity-dropdown">
                        <option value="1">1 unit</option>
                        <option value="2">2 units</option>
                        <option value="3">3 units</option>
                        <option value="4">4 units</option>
                        <option value="5">5 units</option>
                        <option value="6">6 units</option>
                    </select>
                </div>
            <button class="btn primary-btn">Buy it now</button>
            <button class="btn secondary-btn">Add to cart</button>
        </div>
    </div>
</div>`;

main.innerHTML = etiquetas;


// class Producto {
//     constructor (titulo, detalle, precio, stock, imagen) {
//         this.titulo= titulo;
//         this.detalle= detalle;
//         this.precio= precio;
//         this.stock= stock;
//         this.imagen= imagen;
//     }
// }

// const auto = new Producto ("Bmw m240i", "BMW Serie 2 3.0 M240i F22 Coupe", "$3600", 10, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg")
// let etiquetas=  ` <div>
// <h1> Descripción </h1>
// <h2> Titulo: ${auto.titulo}</h2>
// <p> Detalle: ${auto.detalle}</p>
// <p> Precio: ${auto.precio}</p>
// <p> Stock: ${auto.stock}</p>
// <img src="${auto.imagen}" alt="Imagen del auto widht="80%" height="300px"/>
// </div>
// `
// let main= document.querySelector ("main");
// main.innerHTML= etiquetas;