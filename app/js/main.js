$(function () {

    $('.weekly__slider').slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><span class="lnr lnr-chevron-right"></span></button>',
        appendArrows: '.weekly__arrows'
    });

    $('.follower__slider').slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><span class="lnr lnr-chevron-right"></span></button>',
        appendArrows: '.follower__arrows',
        slidesToShow: 3,
        slidesToScroll: 3
    });

    $('.feedback__slider').slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><span class="lnr lnr-chevron-right"></span></button>',
        slidesToShow: 2,
        appendArrows: '.feedback__arrows'
    });

    var mixer = mixitup('.products__inner');


    $('.top-box__filter-btn').on('click', function () {
        var $dropMenu = $(this).parent().find('.top-box__filter-menu');
        if ($dropMenu.is(':visible')) {
            $dropMenu.fadeOut();
        } else {
            $('.dropMenu:visible').fadeOut();
            $dropMenu.fadeIn();
        }
    });

    $(".rate-star").rateYo({
        starWidth: "13px",
        spacing: "5px",
        ratedFill: "#ffc000",
        readOnly: true
    });

    $(".rate-star-small").rateYo({
        starWidth: "12px",
        spacing: "3px",
        ratedFill: "#ffc000",
        readOnly: true
    });

});