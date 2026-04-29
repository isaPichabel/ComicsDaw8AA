let pagina = document.getElementById("pagina");
let anteriorBTN = document.getElementById("anteriorBTN");
let siguienteBTN = document.getElementById("siguienteBTN");

let paginas = [
        "./DavidComic/David1.jpg",
        "./DavidComic/David2.jpg",
        "./DavidComic/David3.jpg",
        "./DavidComic/David4.jpg",
        "./DavidComic/David5.jpg",
        "./DavidComic/David6.jpg",
        "./DavidComic/David7.jpg",
        "./DavidComic/David8.jpg"
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