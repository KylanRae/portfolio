//Opening navigation bar (mobile)
function openNav() {
    document.getElementById("myNav").style.width = "33%";
    document.overlay.style.backgroundColor = "rgba(0,0,0,0.4)";
}

//Close navigation bar (mobile)
function closeNav() {
    document.getElementById("myNav").style.width = "0";
    document.overlay.style.backgroundColor = "white";
}