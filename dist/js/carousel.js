$('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
});

$('.center').slick({
    centerMode: true,
    // centerPadding: '120px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    variableWidth: true,
    responsive: [{
        breakpoint: 1400,
        settings: {
            arrows: false,
            centerMode: true,
            // centerPadding: '60px',
            slidesToShow: 3
        }
    }, {
        breakpoint: 992,
        settings: {
            arrows: false,
            centerMode: true,
            // centerPadding: '200px',
            slidesToShow: 1
        }
    }, {
        breakpoint: 768,
        settings: {
            arrows: false,
            centerMode: true,
            // centerPadding: '160px',
            slidesToShow: 1,
        }
    }, {
        breakpoint: 480,
        settings: {
            arrows: false,
            centerMode: true,
            // centerPadding: '5px',
            slidesToShow: 1
        }
    }]
});