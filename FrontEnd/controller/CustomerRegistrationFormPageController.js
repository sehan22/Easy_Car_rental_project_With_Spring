$(document).ready(function () {
    $('#licenseImg').change(handleFileSelect);

    function handleFileSelect(event) {
        const fileInput = event.target;
        const file = fileInput.files[0];

        if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg') {
            let imageURL = URL.createObjectURL(file);
            $('#licenseImgView').css({
                'background-image': `url('${imageURL}')`, 'background-size': 'cover',
            });
            /*$('#licenseIcon path').attr('fill', '#FFFFFF');
            $('#licenseImgDescription').css('color', 'white');*/
        } else {
            alert("Selected file type doesn't support!")
        }
    }
});

$(document).ready(function () {
    $('#nicImg').change(handleFileSelect);

    function handleFileSelect(event) {
        const fileInput = event.target;
        const file = fileInput.files[0];

        if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg') {
            let imageURL = URL.createObjectURL(file);
            $('#nicImgView').css({
                'background-image': `url('${imageURL}')`, 'background-size': 'cover'
            });

            /*                $('#nicIcon path').attr('fill', '#FFFFFF');
                            $('#nicImgDescription').css('color', 'white');*/
        } else {
            alert("Selected file type doesn't support!")
        }
    }
});

/*
<!--<script>
    handleItemClick()

    function handleItemClick(item) {
    $('.dropdown-toggle').text(item);
}
</script>-->*/
