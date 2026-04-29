let pagina = document.getElementById("pagina");
let anteriorBTN = document.getElementById("anteriorBTN");
let siguienteBTN = document.getElementById("siguienteBTN");

let paginas = [
        "./LiamComic/En blanco_Pagina 1_ Portada.jpg",
        "./LiamComic/En blanco_Pagina 2.jpg",
        "./LiamComic/En blanco_Pagina 3.jpg",
        "./LiamComic/En blanco_Pagina 4.jpg"

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