$('.about-items > div').on('click', function() {
    $(this).children('.about-icon').toggleClass('active')
    $(this).children('.about-position').toggleClass('toggleColor')
    $(this).children('.about-location').toggleClass('toggleColor')
    $(this).parent('.about-items').toggleClass('toggleBg')
    $(this).toggleClass('toggleColor')
    $(this).next('p').slideToggle(300).toggleClass('toggleColor')
});

$('.open-block > div').on('click', function() {
    $(this).children('.open-title').toggleClass('open-title__active')
    $(this).children('.about-location').toggleClass('toggleColor')
    $(this).parent('.open-block').toggleClass('open-block__active')
    $(this).toggleClass('togglePadding')
    $(this).next('p').slideToggle(300)
});

$('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
});