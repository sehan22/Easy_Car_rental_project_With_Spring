/*popup login form*/
$(document).ready(function () {
    $('#btnSignInOrSignUp').click(function () {
        $('.loginFormContainerPopUp').removeClass("visually-hidden");
        $('.header').css('display', 'none');
    });

    $('.loginFormContainerPopUp').mouseup(function (e) {
        $('.loginFormContainerPopUp').toggleClass("visually-hidden");
        $('.header').css('display', '');
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

$(document).ready(function () {
    $('#lnlSignUpTextStyle').click(function () {
        $('#containerFluidCustomerForm').removeClass("visually-hidden");
    });

    $('#containerFluidCustomerForm').mouseup(function (e) {
        $('#containerFluidCustomerForm').toggleClass("visually-hidden");
        $('.header').css('display', 'none');
    });

    // Handle click inside loginFormContainerPopUp
    $('#containerFluidCustomerForm').click(function (e) {
        e.stopPropagation();
    });

    // Handle click inside loginFormContainer
    $('#containerCustomerForm').click(function () {
        $('#containerFluidCustomerForm').removeClass("visually-hidden");
        $('.header').css('display', 'none');
    });
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