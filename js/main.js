import slick from 'slick-carousel';
import $ from 'jquery';

$(document).ready(function () {
    $('.carousel--multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow: true,
        // nextArrow: '<i class="fa fa-angle-right"></i>',
        // prevArrow: '<i class="fa fa-angle-left"></i>',
    });
    
    $('.form-row__actions a').on('click', function (e) {
      e.preventDefault();
      $('.form-row__actions a').removeClass('active');
      $(this).addClass('active');
    });
});