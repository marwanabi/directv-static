$(document).ready(function() {
  // $('#fullpage').fullpage({
  //   css3: true
  // });
  $('.single-item').slick({
    // autoplay: true,
    // autoplaySpeed: 3000,
    dots: true,
  });
  $('.latest-section-slider').slick({

    // autoplay: true,
    // autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.stuff-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(".menu-icon").click(function() {
    $(this).toggleClass("menu-visible");
    $('.menu-overlay').toggleClass("open");
  });
});
