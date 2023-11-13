/*popup login form*/
$(document).ready(function () {
    $('#btnSignInOrSignUp').click(function () {
        $('.loginFormContainerPopUp').removeClass("visually-hidden");
        $('.header').css('display', 'none');
    });

    $(document).mouseup(function (e) {
        var popupContainer = $("#login");
        if (!popupContainer.is(e.target) && popupContainer.has(e.target).length === 0) {
            $('.loginFormContainerPopUp').toggleClass("visually-hidden");
            $('.header').css('display', '');
        }
    });


    // Handle click inside loginFormContainerPopUp
    $('.loginFormContainerPopUp').click(function (e) {
        e.stopPropagation();
    });

    // Handle click inside loginFormContainer
    $('.loginFormContainer').click(function () {
        $('.loginFormContainerPopUp').removeClass("visually-hidden");
        $('.header').css('display', 'none');
    });
});

$('#lnlSignUpTextStyle').click(function () {

});

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