(() => {
    function showContents() {
        let target = $(this).data('target');
        $('.' + target).fadeIn();
        $('.' + target).siblings().css({"display":"none"});
        $(document).find('.menu-item').removeClass('active-contents');
        $(this).addClass('active-contents');

    }

    $(document).on('click', '.menu-item', showContents);
    $(document).on('click', '.menu-item', function() {
        indicateFirst();
    });

    $(document).on('mouseover', '.menu-item', function() {
        $(this).css('background-color', '#F6F6FA');
    });
    $(document).on('mouseleave', '.menu-item', function() {
        $(this).css('background-color', '#FFFFFF');
    });





})();


