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

  // Color stars
  function stars() {
    var star_tap = $('.stars-section .fa-star');
    star_tap.on('click', function () {
      console.log('click');
      $(this).removeClass('color_star').removeClass('current');
      $(this).removeClass('fas');
      $(this).addClass('far');

      var index = $(this).index();
      star_tap.each(function (i) {
        if ($(this).index() <= index) {
          $(this).removeClass('far');
          $(this).addClass('fas');
          $(this).addClass('color_star');
        }
      });
    });
  }

  stars();
});