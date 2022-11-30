// JS BUTTON NAV ADDON //

$(document).ready(function() {
    $('#icon').click(function(){
        $('ul').toggleClass('show');
    });
});

// JS TO-TOP BUTTON //

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

// GALLERY //

mainImg = document.getElementById('mainImg');

thumb1 = document.getElementById('thumb1');
thumb1Src = document.getElementById('thumb1').src;

thumb2 = document.getElementById('thumb2');
thumb2Src = document.getElementById('thumb2').src;

thumb3 = document.getElementById('thumb3');
thumb3Src = document.getElementById('thumb3').src;

thumb1.addEventListener("click", function(){
    mainImg.src=thumb1Src
})
thumb2Src.addEventListener("click", function(){
    mainImg.src=thumb2Src
})
thumb3Src.addEventListener("click", function(){
    mainImg.src=thumb3Src
})
