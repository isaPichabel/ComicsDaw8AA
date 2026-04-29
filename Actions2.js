let pagina = document.getElementById("pagina");
let anteriorBTN = document.getElementById("anteriorBTN");
let siguienteBTN = document.getElementById("siguienteBTN");

let paginas = [
        "./BelenComic/Abuela.jpg",
        "./BelenComic/Pag1.jpeg",
        "./BelenComic/Pag2.jpeg",
        "./BelenComic/Pag3.jpeg",
        "./BelenComic/Pag4.jpeg"
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