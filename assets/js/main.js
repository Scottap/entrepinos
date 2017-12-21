document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

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
  adaptiveHeight: true,
  slidesToScroll: 1,
  arrows: true,
  infinite: true,
  fade: true,
  asNavFor: '.spaces-slider'
});
$('.spaces-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.spaces-slider-slider',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  infinite: true,
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

var map = new GMaps({
  div: '#mapid',
  lat: -34.9164446,
  lng: -54.8776211
});

map.addMarker({
  lat: -34.9164446,
  lng: -54.8776211
});