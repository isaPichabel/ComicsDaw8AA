let pagina = document.getElementById("pagina");
let anteriorBTN = document.getElementById("anteriorBTN");
let siguienteBTN = document.getElementById("siguienteBTN");

let paginas = [
        "./AraComic/La Ultima Migaja_AraiVazquez_Portada.jpg",
        "./AraComic/La Ultima Migaja_AraiVazquez_Pagina 1.jpg",
        "./AraComic/La Ultima Migaja_AraiVazquez_Pagina 2.jpg",
        "./AraComic/La Ultima Migaja_AraiVazquez_Pagina 3.jpg"
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

actualizar();