$(function() {
    $('#slider').bxSlider(
        {
            randomStart: true,
            auto: true,
            autoDirection: 'next',
            minSlides: 1,
            maxSlides: 1,
            slideWidth: 500,
            slideMargin: 2,
            captions: true,
            pause: 3000,
            pager: true,
            pagerType: 'short',
            pagerSelector: $('#pager')
        })
    $('#slider').show()
});