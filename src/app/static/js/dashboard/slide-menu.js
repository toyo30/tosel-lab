(() => {
    $(document).on('mouseover', '.page-area', function() {
        $(this).find('.page-link-box').slideDown();
    })
    $(document).on('mouseleave', '.page-area', function() {
        $(this).find('.page-link-box').slideUp();
    })
})();