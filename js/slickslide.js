$(document).ready(function(){
    $(".slick-items").slick({
        //variableWidth: true,  
        infinite: true, 
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay: true, 
        arrows:false,
        fade: true,
        swipe: true,
        autoplaySpeed: 3000,
        speed:1000 , 
        pauseOnHover:true
    });
});