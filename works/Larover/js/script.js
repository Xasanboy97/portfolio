$(function () {
    $('#carousel').elastislide();
})

$(document).ready(function () {
   
     // scroll
     window.addEventListener('scroll', function () {
        var Fixed = document.querySelector('.header-top');
        Fixed.classList.toggle('fixed', window.scrollY > 0);
    })

    $('.menu-slide').click(function () {
        $('.navbar').toggleClass('menu-open');
    })
    $('.close-btn').click(function () {
        $('.navbar').removeClass('menu-open');
    })

    /* === Top Scroll === */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
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

    /* ==== Menu ==== */
    let $links = $('.navbar__list a');
    $links.click(function (e) {
        e.preventDefault();
        $links.removeClass('active')
        let $id = $(this).addClass('active').attr('href');
        let $target = $($id).offset().top - 40;  // 

        $('html, body').animate({
            scrollTop: $target,
        }, 1500)
    })

    $(window).scroll(function () {
        let $scroll = $(this).scrollTop();

        $links.each(function () {
            let $id = $(this).attr('href');
            let $target = $($id).offset().top - 60;

            if ($scroll >= $target) {
                $links.removeClass('active');
                $(this).addClass('active')
            }
        })

    })



    $('.ask').on('click', function () {
        var $answer = $(this).next();
        $('.answer').not($answer).slideUp();
        $answer.slideToggle();
    })



    var contentWayPoint = function () {
        var i = 0;
        $('.ftco-animate').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .ftco-animate.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight');
                            } else {
                                el.addClass('fadeInUp');
                            }
                            el.removeClass('item-animate');
                        }, k * 50, 'easeInOutExpo');
                    });

                }, 100);

            }

        }, { offset: '95%' });
    };
    contentWayPoint();

    var contentWayPoint2 = function () {
        var i = 0;
        $('.ftco-animate').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .ftco-animate.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn ftco-animated');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft ftco-animated');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight ftco-animated');
                            } else {
                                el.addClass('fadeInUp ftco-animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 50, 'easeInOutExpo');
                    });

                }, 100);

            }

        }, { offset: '95%' });
    };
    contentWayPoint2();

});