const bgmenu = document.querySelector("#burger-menu");
const nav = document.querySelector("#nav-mobile");
const close = document.querySelector("#close-burger-menu");
const header = document.querySelector("#mobile-menu-icons");

bgmenu.addEventListener("click", openNav);

function openNav() {
    console.log("openNav");

    nav.classList.remove("hide");
    //    header.classList.add("white-background");
    bgmenu.classList.add("hide");
    close.classList.remove("hide");
    close.addEventListener("click", closeNav);

    //    slideDown();
}

//function slideDown() {
//    console.log("slide down");
//
//    nav.classList.add("slide-down");
//    close.addEventListener("click", slideUp);
//}

//function slideUp() {
//    console.log("slide up");
//
//    nav.classList.add("slide-up");
//    close.classList.add("hide");
//    bgmenu.classList.remove("hide");
//    header.classList.remove("white-background");
//    bgmenu.addEventListener("click", openNav)
//}

function closeNav() {
    console.log("close nav");

    close.classList.add("hide");
    bgmenu.classList.remove("hide");
    nav.classList.add("hide");
    bgmenu.addEventListener("click", openNav);
}
