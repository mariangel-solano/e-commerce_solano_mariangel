document.querySelector ("h1").innerText= "Productos";
array= [];
for (const i= 1 ; i <= 9 ; i++) {
    const cards= 
 `<div class="card">
<img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" alt="">
<p>Producto ${i}</p>
</div>` ;
array.push(cards);
document.querySelector("section").innerHTML = (array);
}

//const container= document.querySelector ("section.container");
//container.innerHTML= array.join('');