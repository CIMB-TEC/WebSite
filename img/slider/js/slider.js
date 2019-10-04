$(".slider").slick({
  arrows: false,
  lazyLoad: "ondemand",
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3000
});

$(".integrantes-wrapper").slick({
  arrows: false,
  lazyLoad: "ondemand",
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: false
});

$(".videos-wrapper").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  infinite: true,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000
});
