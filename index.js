const h1 = document.querySelector("h1");

const section = document.querySelector("section");

h1.innerText = "Productos";


const autos = [
    {
    id: 1,
    modelo: "Tundra",
    descripcion: "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    precio: 34,
    url: `https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg`,
    categoria: "Moderno",
  }, {
    id: 2,
    modelo: "I",
    descripcion: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    precio: 62,
    url: `https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/2.jpg`,
    categoria: "Moderno",
  }, {
    id: 3,
    modelo: "M3",
    descripcion: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    precio: 14,
    url: `https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/3.jpg`,
    categoria: "Moderno",
  }, {
    id: 4,
    modelo: "Rio",
    descripcion: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    precio: 66,
    url: `https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/4.jpg`,
    categoria: "Moderno",
  }, {
    id: 5,
    modelo: "Ram Van B250",
    descripcion: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    precio: 99,
    url: `https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/5.jpg`,
    categoria: "Vintage",
  }, {
    id: 6,
    modelo: "Econoline E150",
    descripcion: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    precio: 23,
    url: `https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/6.jpg`,
    categoria: "Moderno",
  }, {
    id: 7,
    modelo: "Rabbit",
    descripcion: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    precio: 54,
    url: `https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/7.jpg`,
    categoria: "Vintage",
  }, {
    id: 8,
    modelo: "928",
    descripcion: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    precio: 63,
    url: `https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/8.jpg`,
    categoria: "Moderno",
  }, {
    id: 9,
    modelo: "Intrepid",
    descripcion: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    precio: 52,
    url: `https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/9.jpg`,
    categoria: "Moderno",
  }];

  const todosButton = document.querySelector("#todos");
  const modernosButton = document.querySelector("#modernos");
  const vintageButton = document.querySelector("#vintage");
   
  const resetButton = document.querySelector("#resetButton");
  const filterButton = document.querySelector("#filterButton");
  const buscador = document.querySelector("#buscador");
  
  
  const buscar = () => {
    const filtrado = autos.filter(auto => auto.modelo === buscador.value)
    mostrarCards(filtrado)
  }
  
  const resetInput = () => (buscador.value = "");
  
  filterButton.addEventListener("click", buscar)
  
  resetButton.addEventListener("click", resetInput)
  
  modernosButton.addEventListener("click", () => {
    filterProducts("Moderno")
  })
  
  vintageButton.addEventListener("click", () => {
    filterProducts("Vintage")
  })
  
  todosButton.addEventListener("click", () => {
    mostrarCards(autos)
  })
  
  const filterProducts = (category) => {
    const productsToShow = autos.filter(product => product.categoria === category)
    mostrarCards(productsToShow)
  }
  

const mostrarCards = (a) => {
  const cards = a.map((auto) =>
      `<div class="card" style="width: 18rem;">
  <img src="${auto.url}" class="card-img-top" alt="">
     <div class="card-body">
       <h5 class="card-title">Car ${auto.modelo}</h5>
       <p class="card-text">${auto.descripcion}</p>
       <a href="/producto.html?prod=${auto.id}" class="btn btn-primary">Ver más</a>
     </div>
   </div> `);
   section.innerHTML = cards.join().replaceAll(",", "");
  };

mostrarCards (autos)





// const h1= document.querySelector ("h1").innerText= "Productos";
//   const section= document.querySelector ("section");
//   let array= [];

// function homeDinamico () {
//   for (let i=1 ; i <= 9 ; i++) {
//       array.push (`<div class="card" style="width: 18rem;">
//     <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="">
//     <div class="card-body">
//       <h5 class="card-title">Car ${i}</h5>
//       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//       <a href="producto.html" class="btn btn-primary">Ver más</a>
//     </div>
//   </div>`) ;
//   }
//   section.innerHTML = array.join(``).replaceAll(",", "");
// }

// homeDinamico()
