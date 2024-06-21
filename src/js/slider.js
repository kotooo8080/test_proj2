const carousel = document.getElementById("gallery"),
next = document.getElementById("rightBtn"),
prev = document.getElementById("leftBtn");

next.addEventListener("click", e => {
    carousel.scrollBy(1110, 0);
});
prev.addEventListener("click", e => {
    carousel.scrollBy(-1110, 0);  
});