/*add blur effect to nav bar*/
$(document).ready(function () {
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();

        // Adjust the threshold as needed
        if (scrollPosition > 50) {
            $('#navBar').css({
                'background-color': 'rgba(0, 0, 0, 0.3)',
                'backdrop-filter': 'blur(10px)'
            });
        } else {
            $('#navBar').css({
                'background-color': 'transparent',
                'backdrop-filter': 'none'
            });
        }
    });
});

/*navbar item foucs colour*/
$(document).ready(function () {
    $('.nav-link').hover(function () {
        $('.nav-link').removeClass('active');

        $(this).addClass('active');
    });
});
