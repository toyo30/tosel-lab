(() => {
    function showContents() {
        let target = $(this).data('target');
        $('.' + target).fadeIn();
        $('.' + target).siblings().css({"display":"none"});
        $(this).addClass('active-contents');
        $(this).siblings().removeClass('active-contents');
    }

    $(document).on('click', '.menu-item', showContents);
    $(document).on('mouseover', '.menu-item', function() {
        $(this).css('background-color', '#F6F6FA');
    });
    $(document).on('mouseleave', '.menu-item', function() {
        $(this).css('background-color', '#FFFFFF');
    });


})();