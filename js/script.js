$('.menu .item')
  .tab()
;

$('.ui.accordion')
  .accordion()
;

$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    navigation : {
      nextEl : '.swiper-button-next',
      prevEl : '.swiper-button-prev'
    }
  })
});