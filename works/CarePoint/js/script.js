$(function () {
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

    let $links = $('.navbar-collapse a');
    
    $links.click(function (e) {
        e.preventDefault();
        $links.removeClass('active')
        let $id = $(this).addClass('active').attr('href');
        let $target = $($id).offset().top - 60;

        $('html, body').animate({
            scrollTop: $target,
        }, 1000)
    })

    $(window).scroll(function () {
        let $scroll = $(this).scrollTop();

        $links.each(function () {
            let $id = $(this).attr('href');
            let $target = $($id).offset().top - 120;

            if ($scroll >= $target) {
                $links.removeClass('active');
                $(this).addClass('active')
            }
        })

    })
});