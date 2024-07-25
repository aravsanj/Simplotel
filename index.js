function openNav() {
    document.getElementById("nav-mobile").style.width = "100%";
    document.body.classList.add('no-scroll');
}


function closeNav() {
    document.getElementById("nav-mobile").style.width = "0%";
    document.body.classList.remove('no-scroll');
}