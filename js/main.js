import $ from 'jquery';
import slick from 'slick-carousel';
import BadgerAccordion from "badger-accordion";

if ($('body').hasClass('home-page')) {
    $('.carousel--multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // mobileFirst: true,
        arrow: true,
        // respondTo: 'window',
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
}

$(document).ready(function () {
    //Home Page Carousel
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
