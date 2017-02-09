$(document).ready(function(){
    $('.main-nav__burger').on('click', function(e) {
      e.preventDefault();
      $('.main-nav__list').toggleClass('main-nav__list--active');
    });
  
    $('.promo-type__type').on('click', function(e) {
      e.preventDefault();
      $('.promo-type__type').toggleClass('promo-type__type--active');
    })
});
