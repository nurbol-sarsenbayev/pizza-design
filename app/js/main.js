/// <reference path="../../node_modules/@types/jquery/index.d.ts" />

$(function() {

    $(".main-carousel").owlCarousel({
        items: 1,
        nav: true,
        smartSpeed: 500,
        navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">']
    });

    $(".pizza-carousel").owlCarousel({
        items: 3,
        nav: true,
        loop: true,
        margin: 1,
        smartSpeed: 500,
        responsive: {
            0: { items: 1 },
            769: { items: 2 },
            993: { items: 3 }
        },
        navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">']
    });

    $(".zakuski-carousel").owlCarousel({
        items: 4,
        nav: true,
        margin: 30,
        smartSpeed: 500,
        responsive: {
            0: { items: 1 },
            769: { items: 2 },
            993: { items: 3 },
            1201: { items: 4 }            
        },
        navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">']
    });

    $(".napitki-carousel").owlCarousel({
        items: 3,
        nav: true,
        margin: 30,
        smartSpeed: 500,
        responsive: {
            0: { items: 1 },
            481: { items: 2 },
            769: { items: 3 }            
        },
        navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],        
        onChanged: function(e) {
            setTimeout(function() {
                $(".napitki-carousel .owl-item").removeClass("scale");
                var item = $(".napitki-carousel .owl-item.active")[1];
                if(item) {
                    $(item).addClass("scale");
                }                    
            }, 100);
        }
    });

    var $wnd = $(window);
    var $top = $(".page-top");
    var $html = $("html, body");
    var $headerMenu = $(".menu-header");
    var $loader = $(".preloader");

    $wnd.scroll(function() {
        if($wnd.scrollTop() > $wnd.height()) {
            $top.addClass('active');
        } else {
            $top.removeClass('active');
        }
    });

    $top.click(function() {
        $html.stop().animate({ scrollTop: 0 }, 'slow', 'swing');
    });

    $wnd.on('load', function() {
        $loader.delay(0).fadeOut('slow');
    });

    $(".hamburger").click(function() {
        $this = $(this);
        $this.toggleClass("is-active");
        if($this.hasClass("is-active")) {
            $headerMenu.slideDown();
        } else {
            $headerMenu.slideUp();
        }
        return false;
    });    

    $(".section-top-button, .link").click(function(e) {
        e.preventDefault();
        var $href = $(this).attr('href');
        if($href.length > 0) {
            var top = $href.length == 1 ? 0 : $($href).offset().top;
            $html.stop().animate({ scrollTop: top }, "slow", "swing");
        }
    });

});
    