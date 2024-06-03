/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

function toggleLightDark() {
    var element = document.body;
    if (element.className == "light") {
        element.className = "dark"
    } else {
        element.className = "light"
    }
}

const buttons = document.querySelectorAll("[data-carousel-btn]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselBtn === "next" ? 1:-1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})