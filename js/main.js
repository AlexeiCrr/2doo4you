import $ from 'jquery';
import slick from 'slick-carousel';
import BadgerAccordion from "badger-accordion";

$(document).ready(function () {

    $('.carousel--multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        lazyLoad: true,
        autoplay: true,
        slidesToScroll: 1,
        arrow: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    // arrow: false,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

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


const toggleServiceTabs = () => {

    const serviceType = document.getElementsByClassName('service-type__initial');
    const serviceWrapperMin = $('.service-type__wrapper');
    const serviceWrapper = $('#active-requests-tab');

      let state = {
        closed: true,
      };


    $('.minimize').on('click', function(e){
        $(this).parent().parent().attr('closed', state.closed);
        serviceWrapperMin.append($(this).parent().parent());
        console.log(e.target);
    });

    $('.service-type__minimize-title').on('click', function(e){
        $(this).parent().parent().removeAttr('closed');
        serviceWrapper.append($(this).parent().parent());
        console.log(e.target);
    });

    $('.close').on('click', function(){
        $(this).parent().parent().addClass('closed');
    });
};
  stars();
  toggleServiceTabs();
});

//Accordion
const accordions = document.querySelectorAll('.js-badger-accordion');

Array.from(accordions).forEach((accordion) => {
    const ba = new BadgerAccordion(accordion);
});
//See All/See less
$(document).ready(function () {
    $(".expand-selection").click(function () {
        $(this).html(($(this).text() == "See Less") ? "See All" : "See Less");
    });
});
//Mobile Menu
$('#mobile-menu').click(toggleMenu);
$('.second-level__trigger').click(toggleSecondLevelMenu);
function toggleMenu() {
    $(this).toggleClass("active-menu");
    $('.sidebar').toggleClass('active-sidebar');
}
function toggleSecondLevelMenu() {
    $(this).toggleClass('menu-open');
    $('.second-level__content').toggleClass('active-second-level');
}

//Code to view elements that exceed body limits and cause vertical scroll

// var docWidth = document.documentElement.offsetWidth;
//
// [].forEach.call(
//     document.querySelectorAll('*'),
//     function (el) {
//         if (el.offsetWidth > docWidth) {
//             console.log(el);
//         }
//     }
// );
