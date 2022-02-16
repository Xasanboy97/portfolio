$(function(){
    $('#carousel').elastislide();
})

$(document).ready(function () {


    $(window).scroll(function(){
        if($(this).scrollTop() > 1600 ){
            $('#top').fadeIn(500);
        }
        else{
            $('#top').fadeOut(500);
        }
    })
    $('#top').click(function(){
        $('html, body').animate({
            scrollTop: 0,
        }, 1800)
    })

});