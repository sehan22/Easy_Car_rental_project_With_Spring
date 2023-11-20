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
        $('.loginFormContainerPopUp').toggleClass("visually-hidden");
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


/*Customer Registration Upload Img Preview*/
$(document).ready(function () {
    $('#nicImg').change(handleFileSelect);

    function handleFileSelect(event) {
        const fileInput = event.target;
        const file = fileInput.files[0];

        if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg') {
            let imageURL = URL.createObjectURL(file);
            $('#nicImgView').css({
                'background-image': `url('${imageURL}')`,
                'background-size': 'contain',
                'background-repeat': 'no-repeat',
                'background-position': 'center center'
            });

            /*                $('#nicIcon path').attr('fill', '#FFFFFF');
                            $('#nicImgDescription').css('color', 'white');*/
        } else {
            alert("Selected file type doesn't support!")
        }
    }
});
$(document).ready(function () {
    $('#licenseImg').change(handleFileSelect);

    function handleFileSelect(event) {
        const fileInput = event.target;
        const file = fileInput.files[0];

        if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg') {
            let imageURL = URL.createObjectURL(file);
            $('#licenseImgView').css({
                'background-image': `url('${imageURL}')`,
                'background-size': 'contain',
                'background-repeat': 'no-repeat',
                'background-position': 'center center'
            });
            /*$('#licenseIcon path').attr('fill', '#FFFFFF');
            $('#licenseImgDescription').css('color', 'white');*/
        } else {
            alert("Selected file type doesn't support!")
        }
    }
});


/*handleItemClick()

function handleItemClick(item) {
    $('.dropdown-toggle').text(item);
}*/

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

$('#btnFindACar').click(function () {
    Swal.fire({
        title: "Custom width, padding, color, background.",
        width: 600,
        padding: "3em",
        color: "#716add",
        backgroundColor: "rgba(0, 0, 0, 0)",
        backdropFilter: "blur(50px)"
    });
});
