$('.modal-overlay').on('click', function(e){
  if($(e.target).closest('.modal').length ==0){
      $(this).fadeOut()
  }
})

$('.close').on('click', function()  {
    $(this).parents('.modal-overlay').fadeOut();
})
$('#modal-button').on('click' , function(){
    $('.modal-overlay').fadeIn();
})
$(window).scroll(function(){
    if($(this).scrollTop() > 500){
        $('#up').fadeIn();
    }else{
        $('#up').fadeOut();
    }
})
$('#up').on('click', function(){
    $('html , body').animate({scrollTop: 0}, 800)
})
$('#home').on('click', function(e){
    e.preventDefault();
    $('html , body').animate({scrollTop:$('#busy').offset().top} , 800)
})
