import $ from 'jquery';

$(document).ready(function () {
    if ($('body').hasClass('home-page')) {
        $('.carousel--multiple-items').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrow: true,
        });
    }
    $('.form-row__actions a').on('click', function (e) {
      e.preventDefault();
      $('.form-row__actions a').removeClass('active');
      $(this).addClass('active');
    });

  // Color stars
  function stars() {
    var star_tap = $('.leave-rating .stars-section .fa-star');
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


  $('.minimize').on('click', function(){
    $(this).parent().parent().addClass('minimized');
  });

  $('.service-type__minimize-title').on('click', function(){
    $(this).parent().parent().removeClass('minimized');
  });

  $('.close').on('click', function(){
    $(this).parent().parent().addClass('closed');
  });


  stars();
});