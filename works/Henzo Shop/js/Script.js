$(document).ready(function () {
    $(".default_option").click(function () {
        $(this).parent().toggleClass("active");
    })

    $(".select_ul li").click(function () {
        var currentele = $(this).html();
        $(".default_option li").html(currentele);
        $(this).parent(".select_dropdown").removeClass("active");
    })

    $(".default_option_2").click(function () {
        $(this).parent().toggleClass("active");
    })

    $(".select_ul_2 li").click(function () {
        var currentele = $(this).html();
        $(".default_option_2 li").html(currentele);
        $(this).parent(".select_dropdown_2").removeClass("active");
    })


});

var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },
});


(function () {
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function () {
        cart.classList.toggle('show-cart');
        
    })
})();
(function () {
    const cartInfo = document.getElementById('cart-info2');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function () {
        cart.classList.toggle('show-cart');
      
    })
    
})();

(function () {
    const cartBtn = document.querySelectorAll('.cart-item-icon');



    cartBtn.forEach(function (btn) {
        btn.addEventListener("click", function (event) {

            if (event.target.parentElement.classList.contains('cart-item-icon')) {
                let fullPath = event.target.parentElement.previousElementSibling.src;
                let pos = fullPath.indexOf('img') + 3;
                let partPath = fullPath.slice(pos);

                const item = {};
                item.img = `img-cart${partPath}`;
                let name = event.target.parentElement.parentElement.nextElementSibling.children[0].textContent;
                item.name = name;
                let price = event.target.parentElement.parentElement.nextElementSibling.children[1].textContent;

                let finalPrice = price.slice(0).trim();
                item.price = finalPrice;


                // Cart remove
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item',
                    'd-flex',
                    'justify-content-between',
                    'text-capitalize',
                    'my-3');

                cartItem.innerHTML = ` 
                    <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="jpg">
                    <div class="item-text">

                        <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                        <span>$</span>
                        <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                        
                    </div>
                    <i class="far fa-times danger"></i>
                </div>
               `;
                // select cart
                const cart = document.getElementById('cart');
                const total = document.querySelector('.cart-total-container');
                cart.insertBefore(cartItem, total);
                showTotals();
                
                var removeCartItemButtons = document.getElementsByClassName('danger');
                for (var i = 0; i < removeCartItemButtons.length; i++){
                    var button = removeCartItemButtons[i]
                    button.addEventListener('click', function(event){
                        var buttonClicked = event.target
                        buttonClicked.parentElement.remove('cart-item');
                    })
                }
               
            }
           
            
        });
        
       
    });
  
    // Show Total
    function showTotals() {
        const total = [];
        const items = document.querySelectorAll(".cart-item-price");
        items.forEach(function (item) {
            total.push(parseFloat(item.textContent.replace('$','')));
        })


        const totalMoney = total.reduce(function (total, item) {
            total += item;
            return total;
        }, 0)
        const finalMoney = totalMoney.toFixed();
        document.getElementById("cart-total").textContent = finalMoney;
        document.querySelector(".item-total").textContent = finalMoney;
        document.getElementById('item-count').textContent = total.length;
        document.querySelector(".item-total2").textContent = finalMoney;
        document.getElementById('item-count2').textContent = total.length; 
    }
})();



    (function ($) {
   
        /*[ Show menu mobile ]
    ===========================================================*/
        $('.btn-show-menu-mobile').on('click', function () {
            $(this).toggleClass('is-active');
            $('.wrap-side-menu').slideToggle();
        });

        var arrowMainMenu = $('.arrow-main-menu');

        for (var i = 0; i < arrowMainMenu.length; i++) {
            $(arrowMainMenu[i]).on('click', function () {
                $(this).parent().find('.sub-menu').slideToggle();
                $(this).toggleClass('turn-arrow');
            })
        }

        $(window).resize(function () {
            if ($(window).width() >= 992) {
                if ($('.wrap-side-menu').css('display') == 'block') {
                    $('.wrap-side-menu').css('display', 'none');
                    $('.btn-show-menu-mobile').toggleClass('is-active');
                }
                if ($('.sub-menu').css('display') == 'block') {
                    $('.sub-menu').css('display', 'none');
                    $('.arrow-main-menu').removeClass('turn-arrow');
                }
            }
        });
      

        /*[ Fixed Header ]
       ===========================================================*/
        var posWrapHeader = $('.topbar').height();
        var header = $('.container-menu-header');

        $(window).on('scroll', function () {

            if ($(this).scrollTop() >= posWrapHeader) {
                $('.header1').addClass('fixed-header');
                $(header).css('top', -posWrapHeader);
                $('.show-cart').css('top', 81);

            }
            else {
                var x = - $(this).scrollTop();
                $(header).css('top', x);
                $('.header1').removeClass('fixed-header');
                $('.show-cart').css('top', 125);
            }

            if ($(this).scrollTop() >= 200 && $(window).width() > 992) {
                $('.fixed-header2').addClass('show-fixed-header2');
                $('.header2').css('visibility', 'hidden');
                $('.header2').find('.header-dropdown').removeClass("show-header-dropdown");

            }
            else {
                $('.fixed-header2').removeClass('show-fixed-header2');
                $('.header2').css('visibility', 'visible');
                $('.fixed-header2').find('.header-dropdown').removeClass("show-header-dropdown");
            }

        });
        
    })(jQuery);
    document.addEventListener('DOMContentLoaded', () => {

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
      
        followCursor();
      
      })
