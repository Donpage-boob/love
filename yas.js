$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-time');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll', function(){
        $('.fa-bars').removeClass('fa-time');
        $('.navbar').removeClass('nav-toggle');

    // navbar move function
    if($(window).scrollTop() > 30){
        $('.header').css({'background':'#65b741','box-shadow':'0 .3rem .5rem rgba(0,0,0, .3)'})
    }else
    $('.header').css({'background':'none','box-shadow':'none'})
    });

    // FAQ function
    $('.accordion-header').click(function(){
        $('.accordion .accordion-body').slideUp();
        $(this).next('.accordion-body').slideDown();
        $('.accordion .accordion-header span').text('+')
        $(this).children('span').text('-')
    });
});