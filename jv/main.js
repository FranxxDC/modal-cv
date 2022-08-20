let abrir = document.querySelectorAll(".uil-bars")[0];
let cerrar = document.querySelectorAll(".uil-multiply")
[0];
let contenedor = document.querySelectorAll(".nav")[0];

abrir.addEventListener("click", function (e) {
    e.preventDefault();
    contenedor.style.right = "0";
    setTimeout(function () {

    }, 900)
})

cerrar.addEventListener("click", function (e) {
    e.preventDefault();
    contenedor.style.right = "100%"
})


/**  cerrar y abrir modal-home contact me
*/
let abrirm = document.querySelectorAll(".btn-home")[0];

let closem = document.querySelectorAll(".modal-close")[0];

let cntmodal = document.querySelectorAll(".modal-section-home")[0];

abrirm.addEventListener("click", function (e) {
    e.preventDefault();
    cntmodal.style.top = "0";
    cntmodal.style.opacity = "1";
    cntmodal.style.visibility = "visible";

})
closem.addEventListener("click", function (e) {
    e.preventDefault();
    cntmodal.style.top = "100%";
    cntmodal.style.opacity = "0";
    cntmodal.style.visibility = "hidden";

})
window.addEventListener("click", function (e) {
    if (e.target == cntmodal) {
        e.preventDefault();
        cntmodal.style.top = "100%";
        cntmodal.style.opacity = "0";
        cntmodal.style.visibility = "hidden";
    }
})