$(function () {

  $('.clients__link').on('click', function (e) {
    e.preventDefault();
    $('.clients__link').removeClass('clients__link--active');
    $(this).addClass('clients__link--active');
    $('.clients__box').removeClass('clients__box--active');
    $($(this).attr('href')).addClass('clients__box--active');
  });

  const header = document.querySelector(".menu")

  window.onscroll = function () {
    if (window.scrollY >= 100) {
      header.classList.add('fixed')
    }
    else {
      header.classList.remove('fixed')
    };
    if (window.scrollY >= 7000) {
      header.classList.add('fixed--color')
      header.classList.remove('fixed')
    }
    else {
      header.classList.remove('fixed--color')
    };
  }

  $('.menu__btn').on('click', function () {
    $('.menu__box').toggleClass('menu__box--active');
  });

  $(".menu__link, .logo").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

});

