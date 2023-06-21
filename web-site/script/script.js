$('.about-items > div').on('click', function(){
    $(this).children('.about-icon').toggleClass('active');
    $(this).parent('.about-items').toggleClass('toggleBg');
    $(this).toggleClass('toggleColor').children('p').toggleClass('toggleColor');
    $(this).next('p').slideToggle(300).toggleClass('toggleColor');
})
$('.marketing-section').slick({
    autoplay:true,
    autoplaySpeed:3000,
    arrows:false,
    dots:true,
})