$(window).load(function () {
    if ($('#slider').length) {
        $('#slider').nivoSlider({
            pauseTime: 5000,
            directionNav: false,
            controlNav: false
        });
    }
});
