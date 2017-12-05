$("#rustic").click(function() {
  $(".modal").addClass("is-active");  
});

$(".modal-close").click(function() {
   $(".modal").removeClass("is-active");
});

$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

$(document).ready(function(){
  $('.owner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 9000,
  });
});

$(document).ready(function(){
  $('.home-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false
  });
});

$('.spaces-slider-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.spaces-slider'
});
$('.spaces-slider').slick({
  slidesToShow: 3,
  asNavFor: '.spaces-slider-slider',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000
});

$('.rooms-slider-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.rooms-slider'
});
$('.rooms-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.rooms-slider-slider',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000
});

$('#video').YTPlayer({
    fitToBackground: false,
    videoId: '612lUqn-aOw',
    ratio: 16 / 9,
    playerVars: {
      modestbranding: 0,
      branding: 0
    }
});

var map = new GMaps({
  div: '#mapid',
  lat: -34.9164446,
  lng: -54.8776211
});

map.addMarker({
  lat: -34.9164446,
  lng: -54.8776211
});