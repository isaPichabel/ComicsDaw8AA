let pagina = document.getElementById("pagina");
let anteriorBTN = document.getElementById("anteriorBTN");
let siguienteBTN = document.getElementById("siguienteBTN");

let paginas = [
        "./JossComic/1_joss.jpg",
        "./JossComic/2_joss.jpg",
        "./JossComic/3_joss.jpg"
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