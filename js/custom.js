/*===================================================
                    SERVICES
==================================================*/

$(function () {
    new WOW().init();



});

/*===================================================
                    WORK
==================================================*/
$(function () {

    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }



    });
});

/*===================================================
                    TEAM
==================================================*/

$(function () {

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1
            },
            480:{
                items: 2
                
            },
            768:{ 
                items: 3
            }
        }
    });

});

/*===================================================
                    testimonials
==================================================*/

$(function () {

    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });

});

/*===================================================
                    couter efect
                    
=================================================*/


$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 2000
    })



});

/*===================================================
                    CIENTS
==================================================*/

$(function () {

    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1
            },
            480:{
                items: 3
                
            },
            768:{ 
                items: 5
            },
            992:{
                items: 6
            }
            
        }
    });

});

/*===================================================
                    navigation
==================================================*/
// show hide the nav

$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() < 60) {
            
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
           
           } else {
             $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();

           }
    })
    
});

//smooth Scrooling

$(function() {
    $("a.menu-item").click(function(event) {
        event.preventDefault();
        var section = $(this).attr("href");
        
        $("html,body").animate({
            scrollTop: $(section).offset().top-64
        },1250, "easeInOutExpo");
    });
    
});


$(function() {
   $(".navbar-collapse ul li a").on("click touch", function(){
       $(".navbar-toggle").click();
   }) 
});




































