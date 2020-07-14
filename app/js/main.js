$(function () {

    $('.weekly__slider').slick({
        arrows: true,
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/weekly-next.svg" alt=""></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/weekly-prev.svg" alt=""></button>',
    });

    var mixer = mixitup('.product');

    
$('.products__filter').on('click', function(){
    var $dropMenu = $(this).parent().find('.products__filter-menu');
    if($dropMenu.is(':visible')){
        $dropMenu.fadeOut();
    } else {   
        $('.dropMenu:visible').fadeOut(); 
        $dropMenu.fadeIn();
    }
});
});