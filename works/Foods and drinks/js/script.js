
window.addEventListener('load', function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('#top').fadeIn(500);
    }
    else {
      $('#top').fadeOut(500);
    }
  })
  $('#top').click(function () {
    $('html, body').animate({
      scrollTop: 0,
    }, 1000)
  })



  $('.value-plus').on('click', function(){
    var divUpd = $(this).parent().find('.value'), newVal = parseInt(divUpd.text(), 10)+1;
    divUpd.text(newVal);
  });

  $('.value-minus').on('click', function(){
    var divUpd = $(this).parent().find('.value'), newVal = parseInt(divUpd.text(), 10)-1;
    if(newVal>=1) divUpd.text(newVal);
  });
})













