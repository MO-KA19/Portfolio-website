// Setting Kursor
const kur = new kursor ({
    type: 4,
    color: "#00BD95"
});




// Creating slider
function slider (className) {
    $(className).owlCarousel({
        items: 4,
        margin: 16,
        dots: false,
        nav: true,
        lazyLoad: true,
        mouseDrag: false,
        touchDrag: false,
        freeDrag: true,
        responsiveClass: true,

        responsive: {
            325:{
                items:1,
                loop:false,
                dots:false,
                nav:true
            },

            1400:{
                items:4,
                loop:false,
                dots: false,
                nav: true,
                margin: 12,
                lazyLoad: true,
            },

            1024:{
                items:3,
                loop:false,
                dots: false,
                nav: true,
                margin: 10,
                lazyLoad: true,
            }

        }
    });
};
jQuery(document).ready(slider(".slider"));





function sliderComments (className) {
    $(className).owlCarousel({
        items: 3,
        margin: 1,
        dots: true,
        nav: false,
        lazyLoad: true,
        mouseDrag: false,
        touchDrag: false,
        freeDrag: true,
        responsiveClass: true,

        responsive: {
            325:{
                items:1,
                loop:true,
                dots:true,
                nav:false
            },

            1400:{
                items: 3,
                loop:false,
                dots: true,
                nav: false,
                margin: 1,
                lazyLoad: true,
            },

            1024:{
                items:2,
                loop:false,
                dots: true,
                nav: false,
                margin: 10,
                lazyLoad: true,
            }
        }
    });
};
jQuery(document).ready(sliderComments(".comments"));





// Edit buttons html
let next = document.querySelector(".owl-next span");
let prev = document.querySelector(".owl-prev span");
next.innerHTML = "Next";
prev.innerHTML = "Previous";





// Add zoom effect,tooltip and opacity when click on an img
let imgs = document.querySelectorAll(".item img");
for (let i = 0; i < imgs.length; i++) {
    const playBtnTip = tippy(imgs[i],{
        content: "Project Name",
        placement: "top",
        duration : 700,
        theme: "custom",
        arrow: false
    });


    imgs[i].onclick = () => {
        imgs[i].classList.toggle("zoom");
        imgs[i].classList.contains("zoom") ? imgs[i].style.opacity = 1 : null;
    };
};




// Fade up effect
function FadeUp(section, posY) {
    let selection = document.querySelector(section);

    if (this.scrollY > posY) {
        selection.style.setProperty("visibility", "visible");
        selection.style.setProperty('animation-duration', '1.5s');
        selection.style.setProperty('animation-name', 'fadeInUp');
        selection.style.setProperty("padding-bottom", "75px");
    } ;   
};


function getPosY(section) {
    let selection = document.querySelector(section);
    let pos = selection.offsetTop;
    return pos - 200;
};


let sections = [".services",".projects",".clients"];
window.onscroll = () => {
    for (let i=0; i < sections.length; i++) {
        FadeUp(sections[i], getPosY(sections[i]));
    };
};




// setting copy right year
let element = document.querySelector("#year");
let date = new Date();
let year = date.getFullYear();
element.innerHTML = year;