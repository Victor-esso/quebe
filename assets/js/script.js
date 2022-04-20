$(document).ready(function(){
    

    // Open Menu
    $('[menu-btn]').click(function(){
        nav  = $('[nav-holder]').toggleClass('d-none');
    })


    //Create Siper
    $('.row-swiper').each(function(){
        //Parameters
        var swiperName = $(this).attr('swiper-name');
        var swiperLoop = isDefined($(this).attr('swiper-loop'),true) ? true: false ;
        var slidesPerView = isDefined($(this).attr('slides-per-view')) ? (numberOnly($(this).attr('slides-per-view')) > 0 ? numberOnly($(this).attr('slides-per-view')) : 'auto' ) : 'auto';
        var direction = isDefined($(this).attr('direction')) ? ($(this).attr('direction').trim() == 'vertical' ? 'vertical' : 'horizontal'): 'horizontal';
        var noFreeMode = isDefined($(this).attr('no-free-mode'),true) ? false: true ;
        var centered = isDefined($(this).attr('centered'),true) ? true: false ;
        var autoPlay = isDefined($(this).attr('slides-auto-play')) ? (numberOnly($(this).attr('slides-auto-play')) > 0 ? numberOnly($(this).attr('slides-auto-play')) : false) : false;

        var autoPlay = autoPlay ? {delay: autoPlay , disableOnInteraction: false, pauseOnMouseEnter: true,} : false;

        var swiper = new Swiper($(this)[0], {
        // Optional parameters
        direction: direction,
        slidesPerView: slidesPerView,
        loop: swiperLoop,
        freeMode: noFreeMode,
        centeredSlides: centered,
        autoplay: autoPlay,
        // Navigation arrows
        navigation: {
            nextEl: '.'+swiperName+'-next',
            prevEl: '.'+swiperName+'-prev',
        },
        });


    })


    

























});