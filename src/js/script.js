$(document).ready(function(){
    $('.main-nav__burger').on('click', function(e) {
      e.preventDefault();
      console.log(123);
      $('.main-nav__list').toggleClass('main-nav__list--active');
    })
});
