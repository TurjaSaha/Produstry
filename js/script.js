//menu js

$(function () {
  $('.menu_toggle').on('click', function () {
    $('.menu_toggle').toggleClass('icon_color');
    $('#mynav ul').toggleClass('menu_hide');
    $('.logo').toggleClass('logo_hide');
  });


});

//preloader js
$(function () {
  $(window).on('load', function () {
    $('.preloader_main').delay(1000).fadeOut(1000)
  });
});

//back to top js

$(window).on('scroll', function () {

  var winscroll = $(window).scrollTop();

  if (winscroll > 1500) {
    $('.backtop p').fadeIn(1000);
  } else {
    $('.backtop p').fadeOut(1000);
  }
});

$('.backtop').on('click', function () {
  $('html,body').animate({
    scrollTop: 0
  }, 1000);
});

//menufixd js

var menuoffset = $('#main_menu').offset().top;
$(window).on('scroll', function () {
  var winscroll = $(window).scrollTop();

  if (winscroll > menuoffset) {
    $('#main_menu').addClass('menufixd')
  } else {
    $('#main_menu').removeClass('menufixd')
  }
});


//banner slider

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".custom_btn_next",
    prevEl: ".custom_btn_pre",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  grabcursor: true,
  mousewheel: true,
  keyboard: true,
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});

//service slider

$(document).ready(function () {
  $(".ser_slider").owlCarousel({
    items: 3,
    loop: true,
    autoplayTimeout: 3000,
    autoplay: true,
    dots: false,
    responsive: {
      401: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      }
    }
  });
});

//counter js

$('.count').counterUp({
  delay: 10,
  time: 1000
});

//blog slider

$(document).ready(function () {
  $(".blog_slider").owlCarousel({
    items: 3,
    center: true,
    loop: true,
    dots: false,
    responsive: {
      401: {
        items: 1,
        nav: false,
      },
      768: {
        items: 2,
        nav: false,
      },
      1200: {
        items: 3,
        nav: true,
        navText: ['<div class="blog_nav"><div class="blog_nav_shape"><i class="fa-solid fa-angle-left"></i></div></div>', '<div class="blog_nav"><div class="blog_nav_shape"><i class="fa-solid fa-angle-right"></i></div></div>'],
      }
    }
  });
});

//test_slider

//icon_slider

$(document).ready(function () {
  $(".icon_slider").owlCarousel({
    items: 5,
    loop: true,
    autoplayTimeout: 3000,
    autoplay: false,
    dots: false,
    center: true,
    responsive: {
      401: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1200: {
        items: 5,
        nav: true,
        navText: ['<div class="blog_nav"><div class="blog_nav_shape"><i class="fa-solid fa-angle-left"></i></div></div>', '<div class="blog_nav"><div class="blog_nav_shape"><i class="fa-solid fa-angle-right"></i></div></div>'],
      }
    }
  });
});

//test_slider

$(document).ready(function () {
  $(".test_slider").owlCarousel({
    items: 3,
    loop: true,
    autoplayTimeout: 3000,
    autoplay: false,
    nav: true,
    dots: true,
    center: true,
    responsive: {
      401: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1200: {
        items: 1,
        nav: true,
        navText: ['<div class="blog_nav"><div class="blog_nav_shape"><i class="fa-solid fa-angle-left"></i></div></div>', '<div class="blog_nav"><div class="blog_nav_shape"><i class="fa-solid fa-angle-right"></i></div></div>'],
      }
    }
  });
});

// ============== about page =============

//team slider

$(document).ready(function () {
  $(".team_slider").owlCarousel({
    items: 3,
    loop: true,
    autoplayTimeout: 3000,
    autoplay: false,
    dots: false,
    center: true,
    responsive: {
      401: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1200: {
        items: 3,
        nav: true,
        navText: ['<div class="blog_nav"><div class="blog_nav_shape"><i class="fa-solid fa-angle-left"></i></div></div>', '<div class="blog_nav"><div class="blog_nav_shape"><i class="fa-solid fa-angle-right"></i></div></div>'],
      }
    }
  });
});