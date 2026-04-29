let pagina = document.getElementById("pagina");
let anteriorBTN = document.getElementById("anteriorBTN");
let siguienteBTN = document.getElementById("siguienteBTN");

let paginas = [
        "./EmilioComic/PORTADA Emilio.jpg",
        "./EmilioComic/pagina Emilio (1).jpg",
        "./EmilioComic/pagina Emilio (2).jpg",
        "./EmilioComic/pagina Emilio (3).jpg",
];

let i = 0;

function actualizar(){
    pagina.src = paginas[i];
    anteriorBTN.disabled = (i === 0);
    siguienteBTN.disabled = (i === paginas.length - 1);
}
function siguientePagina(){
    i++;
    actualizar();
}
function anteriorPagina(){
    i--;
    actualizar();
}

actualizar()