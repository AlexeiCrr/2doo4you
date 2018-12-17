import $ from 'jquery';

$(document).ready(function () {
    $('.carousel--multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow: true,
    });
});
