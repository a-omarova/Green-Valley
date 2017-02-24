$(document).ready(function(){
    $('.main-nav__burger').on('click', function(e) {
      e.preventDefault();
      $('.main-nav__list').toggleClass('main-nav__list--active');
    });


  var tabs = document.querySelectorAll('.holidays-type__type');
  var content = document.querySelectorAll('.healthy-holidays__inner');

  for (var i=0; i<tabs.length; i++) {
    tabs[i].addEventListener('click', function (e) {
      e.preventDefault();
      var number = this.dataset.number;
      document.querySelector('.holidays-type__type.holidays-type__type--active').classList.remove('holidays-type__type--active');
      this.classList.add('holidays-type__type--active');
      document.querySelector('.healthy-holidays__inner.healthy-holidays__inner--active').classList.remove('healthy-holidays__inner--active');
      content[number-1].classList.add('healthy-holidays__inner--active');
    });
  }
  
  if ($(window).width() > 1200) {
    $('.photo__main-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.photo__slider'
    });
  } else {
    $('.photo__main-slider')
      .slick('unslick')
      .empty();
  }
  $('.photo__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: '100px',
    asNavFor: '.photo__main-slider',
    // dots: true,
    centerMode: true,
    arrows: false,
    focusOnSelect: true
  });
  
  function reviewsSlider(windowWidth) {
  
    console.log(windowWidth);
  
    if (windowWidth > 1200 ) {
      $('.reviews-slider')
        .slick({
          slidesToShow: 2,
          slidesToScroll: 2
        });
    } else {
      $('.reviews-slider')
        .slick('unslick')
        .empty();
    }
  }
  
  reviewsSlider($(window).width());
  
  $('.about-room__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1
  });
  
  // var windowWidth = $(window).width();
  //
  // console.log(windowWidth);
  //
  // if (windowWidth > 768 ) {
  //   $('.reviews-slider').slick({
  //     slidesToShow: 2,
  //     slidesToScroll: 2
  //   });
  // } else {
  //   $('.reviews-slider').unslick();
  // }

    


});
