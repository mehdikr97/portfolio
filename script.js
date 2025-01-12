$(document).ready(function () {
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        console.log("Scroll position:", scroll);
        if (scroll >= 50) {
            $(".r-nav").addClass("stickyadd");
        } else {
            $(".r-nav").removeClass("stickyadd");
        }
    });
    //scroll nav and text
    var typed = new Typed(".text", { 
        strings: ["FrontEnd Developer", "BackEnd Developer", "Designer", "Web Developer"], 
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    ScrollReveal({
        reset:true,
        distance:'60px',
        duration:2500,
        delay:200
    })
    ScrollReveal().reveal('.hello,.mehdi,.pra, .im',{delay:400,origin:'left'});

// scrol tools
const $scrollable = $('.scrollable');
const $tools = $('.tool');
const toolWidth = $tools.outerWidth(true); 
const totalWidth = toolWidth * $tools.length; 

// Clone the tools for smooth looping
$scrollable.append($tools.clone());

// Function to animate the scroll
function animateScroll() {
    $scrollable.animate({
        scrollLeft: totalWidth // Scroll to the right end of the first set of tools
    }, 20000, 'linear', function() {
        // Reset scroll to the beginning for infinite effect
        $scrollable.scrollLeft(0);
        animateScroll(); // Call function recursively
    });
}

animateScroll(); // Initialize scrolling

});
