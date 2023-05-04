
$(document).ready(function () {
    window.addEventListener('scroll', function () {
        var Fixed = document.querySelector('.menu__nav-panel');
        Fixed.classList.toggle('fixed', window.scrollY > 0);
    })
    // Aboutdagi va Contactdagi rasm uchun
    $('.round').tilt({
        maxTilt: 10,
        perspective: 500
    })

    /* Progress Skill 
    --------------------------*/
    function moveProgressBar(node, nodeLine, tooltip, animationLength = 1500) {
        const progressElement = $(node);
        progressElement.each(function (value, item) {
            $(item).find(nodeLine).animate({
                width: item.dataset.progressPercent + '%'
            }, animationLength);
            $(item).find(tooltip).show(animationLength);
        });
    }
    let animate = true;

    $(window).scroll(function () {
        if ($('.main').offset().top <= $(window).scrollTop() + 150) {
            if (animate) {
                moveProgressBar('.progress__element', '.progress__line', '.progress__tooltip');
            }
            animate = false;
        }
    })

    /* Progress Skill 
    -------------------------- */
});


window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader_hidden');

    var text = document.querySelector('.print');
    var str = text.innerHTML;
    text.innerHTML = '';

    var i = 0;
    function print() {
        text.innerHTML += str.charAt(i);
        i++;
    }

    print()
    setInterval(print, 25);

    // Smart switcher Starting
    const dayNight = document.querySelector(".day-night");

    dayNight.addEventListener('click', () => {
        dayNight.querySelector("i").classList.toggle("fa-toggle-on");

        if (document.body.classList.contains("dark")) {
            dayNight.querySelector("i").classList.add("fa-toggle-on");
        }
        else {
            dayNight.querySelector("i").classList.add("fa-toggle-off");
        }
    })

    let darkMode = localStorage.getItem('darkMode');
    const darkmodetoggle = document.querySelector('.day-night');

    const enableDarkMode = () => {
        document.body.classList.add("darkmode");
        localStorage.setItem("darkMode", "enabled");
    }
    const disabledDarkMode = () => {
        document.body.classList.remove("darkmode");
        localStorage.setItem("darkMode", null);
    }

    if (darkMode === "enabled") {
        disabledDarkMode();
    }

    darkmodetoggle.addEventListener('click', () => {
        darkMode = localStorage.getItem("darkMode");
        if (darkMode !== "enabled") {
            enableDarkMode();
        }
        else {
            disabledDarkMode();
        }

    })
})

/* Navigation Menu
------------------------------------------------------ */
const body = document.querySelector("body")
$('.menu__btn').click(function () {
    $(this).toggleClass('menu--active');
    $('.navigation__list').toggleClass("active");

});

$('.navigation__list a').click(function () {
    $('.navigation__list').removeClass("active");
    $('.menu__btn').removeClass('menu--active');

})
/* Navigation Menu 
------------------------------------------------------ */
$(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
        $('#top').fadeIn(500);
    }
    else {
        $('#top').fadeOut(500);
    }
})
$('#top').click(function () {
    $('html, body').animate({
        scrollTop: 0,
    }, 1500)
})

// owl-carousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});
var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
        },
        400: {
            itmes: 3,
        },
        600: {
            items: 4,

        },
        1000: {
            items: 5,
        },

    }
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [2000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})

$(document).ready(function () {


    // navigation menu
    let $links = $('.navigation__list a');
    let $middlelink = $('.middle');

    $links.click(function (e) {
        e.preventDefault();
        $links.removeClass('active');
        let $id = $(this).addClass('active').attr('href');
        let $target = $($id).offset().top - 80;

        $('html, body').animate({
            scrollTop: $target,
        }, 800)
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
    $middlelink.click(function (e) {
        e.preventDefault();
        $middlelink.removeClass('active');
        let $id = $(this).addClass('active').attr('href');
        let $target = $($id).offset().top - 80;

        $('html, body').animate({
            scrollTop: $target,
        }, 800)
    })
})

// Progress Scroll
window.onload = () => {

    const progress = () => {

        const line = document.createElement('div')
        line.className = 'progress'
        line.style.cssText = `
        height: 6px;
        background-image: linear-gradient(to right, #feb633 0%, gold 50%, #feb633 100%);
        position: fixed;
        top: 0;
        left: 0;
        transition: 0.8s;
        z-index: 99999;
      `
        document.body.prepend(line)

        const progressWidth = () => {
            return line.style.width = Math.floor(window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight) * 100) + '%'
        }

        progressWidth()

        document.addEventListener('scroll', progressWidth)
        window.addEventListener('resize', progressWidth)

    }
    progress();
};
