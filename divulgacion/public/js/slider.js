window.setTimeout(slide, 1500);



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



$(".proyecto-slider").slick({
  arrows: false,
  lazyLoad: "progressive",
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed:5000,
    fade: true,
    adaptiveHeight:false
});


$(".logos-slider").slick({
    slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
    arrows:false
    
});


$(".project-man-wrapper").slick({
  arrows: false,
  lazyLoad: "ondemand",
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: false
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

function slide(){
$(".areas-desarrollo").slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3000
});
}



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
