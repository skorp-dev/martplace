$(function () {

    $('.weekly__slider').slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><span class="lnr lnr-chevron-right"></span></button>',
        appendArrows: '.weekly__arrows'
    });

    var mixer = mixitup('.products__inner');

    
 $('.products__filter').on('click', function(){
     var $dropMenu = $(this).parent().find('.products__filter-menu');
     if($dropMenu.is(':visible')){
         $dropMenu.fadeOut();
     } else {   
         $('.dropMenu:visible').fadeOut(); 
         $dropMenu.fadeIn();
     }
 });

 $(".rate-star").rateYo({
    starWidth: "17px",
    spacing: "5px",
    ratedFill: "#ffc000",
    readOnly: true
  });

 $(".rate-star--small").rateYo({
    starWidth: "12px",
    spacing: "3px",
    ratedFill: "#ffc000",
    readOnly: true
  });

});