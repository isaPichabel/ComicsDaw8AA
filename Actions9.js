let pagina = document.getElementById("pagina");
let anteriorBTN = document.getElementById("anteriorBTN");
let siguienteBTN = document.getElementById("siguienteBTN");

let paginas = [
        "./IsaComic/Comic-portada1.jpg",
        "./IsaComic/Compañia_Inesperada_1.jpg",
        "./IsaComic/Compañia_Inesperada_2.jpg",
        "./IsaComic/Compañia_Inesperada_3.jpg",

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