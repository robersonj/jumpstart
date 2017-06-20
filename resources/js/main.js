$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });
});

var userScrollAmount = 0;
$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    if(scrollTop - userScrollAmount > 50) {
        var navbarHeight = $('.navbar').css('height');
        $('navbar').animate({top: '-' + navbarHeight}, 150);
        userScrollAmount = scrollTop;
    } else {
        $('navbar').animate({top: '0px' }, 150);
        userScrollAmount = scrollTop;
    }
}