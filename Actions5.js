let pagina = document.getElementById("pagina");
let anteriorBTN = document.getElementById("anteriorBTN");
let siguienteBTN = document.getElementById("siguienteBTN");

let paginas = [
        "./EliComic/COMIC ELI_1.jpg",
        "./EliComic/COMIC ELI_2.jpg",
        "./EliComic/COMIC ELI_3.jpg",
        "./EliComic/COMIC ELI_4.jpg",
        "./EliComic/COMIC ELI_5.jpg"
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