$("#rustic").click(function() {
  $(".modal").addClass("is-active");  
});

$(".modal-close").click(function() {
   $(".modal").removeClass("is-active");
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

$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

var mymap = L.map('mapid').setView([-34.9164446, -54.8776211], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZnJ1aXoiLCJhIjoiY2o5aW52OHE4M29iODJxczRnZHo4a3hkeSJ9.KjNrmGGXWJZHbSkCLUVC6w'
}).addTo(mymap);

var marker = L.marker([-34.9164446, -54.8776211]).addTo(mymap);