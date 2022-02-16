// header__content-nav-panel
document.querySelector('.menu-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.nav-link')
        .style.transform = 'translate(0%)'
})
document.querySelector('.menu-times').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.nav-link')
        .style.transform = 'translate(-100%)'

})

/* === Modal Oyna === */

$(document).ready(function (){
   window.addEventListener('scroll',function(){
       var header = document.querySelector('.menu');
       header.classList.toggle('fixed',window.scrollY > 0)
      
   });

    const $buy   = $('.pets__content-btn');
    const $modal = $('.modal');
    const $close = $('.far.fa-times');
    const $Cname = $('.pets__content-name');
    const $Mname = $('.modal__name');

    const $attr = $('.attr')
    $buy.on('click', function () {
        $modal.fadeIn().show(0);
        const $name = $(this).offsetParent().find($Cname);
        $Mname.html($name.html());
        $attr.html($name.attr('data-name'));
        let $img = $(this).offsetParent().find('.card__aside').html();
        $('.modal__left').html($img);
        $('.pets__content-img img').addClass('pets__content-img');
     
     
    });

    $close.on('click', function () {
        $modal.fadeOut().hide(0);
    });


    let $links = $('.navigation a');
    
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

    const followCursor = () => {
        const el = document.querySelector('.follow-cursor')
    
        window.addEventListener('mousemove', e => {
          const target = e.target
          if (!target) return
    
          if (target.closest('a')) {
            el.classList.add('follow-cursor_active') 
          } else { // иначе
            el.classList.remove('follow-cursor_active')
          }
    
          el.style.left = e.pageX + 'px'
          el.style.top = e.pageY + 'px'
        })
      }
    
      followCursor()

});
