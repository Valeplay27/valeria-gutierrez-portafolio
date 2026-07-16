/*=============================
 NAVBAR SCROLL
=============================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

/*=============================
 SCROLL SUAVE
=============================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({

            behavior:"smooth"

        });

    });

});

/*=============================
 ANIMACIÓN DE TARJETAS
=============================*/

const cards = document.querySelectorAll(".project-card,.skill-card,.stat-card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

cards.forEach(card=>{

    observer.observe(card);

});

/*=============================
 EFECTO ESCRIBIR
=============================*/

const titulo = document.querySelector(".hero h2");

const texto = titulo.textContent;

titulo.textContent = "";

let i = 0;

function escribir(){

    if(i < texto.length){

        titulo.textContent += texto.charAt(i);

        i++;

        setTimeout(escribir,60);

    }

}

window.onload = escribir;

/*=============================
 BOTÓN VOLVER ARRIBA
=============================*/

const boton = document.createElement("button");

boton.innerHTML = '<i class="bi bi-arrow-up"></i>';

boton.className = "btn btn-primary";

boton.style.position = "fixed";
boton.style.right = "20px";
boton.style.bottom = "20px";
boton.style.width = "50px";
boton.style.height = "50px";
boton.style.borderRadius = "50%";
boton.style.display = "none";
boton.style.zIndex = "999";

document.body.appendChild(boton);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        boton.style.display = "block";

    }else{

        boton.style.display = "none";

    }

});

boton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});