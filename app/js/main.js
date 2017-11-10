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
        navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">']
    });

    $(".zakuski-carousel").owlCarousel({
        items: 4,
        nav: true,
        margin: 30,
        smartSpeed: 500,
        navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">']
    });

    $(".napitki-carousel").owlCarousel({
        items: 3,
        nav: true,
        margin: 30,
        smartSpeed: 500,
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

});
    