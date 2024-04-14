<<<<<<< HEAD
const botaoAbrir = document.querySelector("header > button");
const botaoFechar = document.querySelector("header nav button");

const body = document.querySelector("body");
const nav = document.querySelector("header.mobile");

botaoAbrir.addEventListener('click', abrirMenu);
botaoFechar.addEventListener('click', fecharMenu);

function abrirMenu() {
    body.classList.add("escurecer");
    nav.classList.add("abrir");
}

function fecharMenu () {
    body.classList.remove("escurecer");
    nav.classList.remove ("abrir");
=======
const botaoAbrir = document.querySelector(".header-mobile > button")
const botaoFechar = document.querySelector("header-mobile nav button")

const body = document.querySelector("body")
const nav = document.querySelector("header-mobile nav")

botaoAbrir.addEventListener('click', abrirMenu)
botaoFechar.addEventListener('click', fecharMenu)

function abrirMenu() {
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}

function fecharMenu () {
    body classList.remove("escurecer")
    nav classList.remove ("abrir")
>>>>>>> c6c6a5457080d67e1029378c1f68a6bb61abc405
}
