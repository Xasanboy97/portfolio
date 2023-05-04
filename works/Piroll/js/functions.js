$(document).ready(function () {
    $('.nav__btn').click(function () {
        $('.nav').toggleClass('menu-open');
    })
    $('.nav__list-times').click(function () {
        $('.nav').removeClass('menu-open');
    })

    // scroll
    window.addEventListener('scroll', function () {
        var Fixed = document.querySelector('.menu_top');
        Fixed.classList.toggle('fixed', window.scrollY > 0);
    })


    /* Progress Skill 
    --------------------------*/
    function moveProgressBar(node, nodeLine, animationLength = 1500) {
        const progressElement = $(node);
        progressElement.each(function (value, item) {
            $(item).find(nodeLine).animate({
                width: item.dataset.progressPercent + '%'
            }, animationLength);
            $(item).show(animationLength);
        });
    }
    let animate = true;

    $(window).scroll(function () {
        if ($('.skills').offset().top <= $(window).scrollTop() + 150) {
            if (animate) {
                moveProgressBar('.progress__element', '.progress__line');
            }
            animate = false;
        };
    });

    $('.video').click(function () {
        $(this).toggleClass('menu--active');
        $('.player__circle').toggleClass("active");

    });
    //  
    /* Progress Skill 
    -------------------------- */
});