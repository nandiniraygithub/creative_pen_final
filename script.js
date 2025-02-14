document.addEventListener("DOMContentLoaded", function () {
    var swiper = new swiper(".mySwiper", {
        slidesPerView: 3, // Adjust for responsiveness
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 }
        }
    });
});
function openMenuPopup() {
    document.getElementById("menu-popup").style.display = "block";
}

// Close the Course Menu Pop-up
function closeMenuPopup() {
    document.getElementById("menu-popup").style.display = "none";
}
