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

    let $links = $('.box_text a');

    $links.click(function (e) {
        e.preventDefault();
        $links.removeClass('active')
        let $id = $(this).addClass('active').attr('href');
        let $target = $($id).offset().top - 90;

        $('html, body').animate({
            scrollTop: $target,
        }, 2000)
    })

    $(window).scroll(function () {
        let $scroll = $(this).scrollTop();

        $links.each(function () {
            let $id = $(this).attr('href');
            let $target = $($id).offset().top - 150;

            if ($scroll >= $target) {
                $links.removeClass('active');
                $(this).addClass('active')
            }
        })
    })
});