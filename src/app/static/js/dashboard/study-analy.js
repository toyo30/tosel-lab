(() => {
    function lmsView() {
        $('.lms-container').fadeIn();
        $('.lms-container').addClass('active');
        $('.lms-stu-paging-box').css('display', 'flex');
        $('.stu-paging-box').css('display', 'none');
        $('.stu-check-tab:nth-child(2)').fadeOut(10);
        $('.stu-check-tab:nth-child(3)').fadeOut(10);
        $('.search-des').fadeOut(10);
        $('.search-com-box').css('display', 'block');
        $('.search-area').css('width', '7.95rem');
        $('.select-container').css('margin-top', '0.27rem');
        $('.select-area').css('width', '3.82rem');
        $('.select-area').css('margin-left', '0');


    };

    function lmsNotView(){
        $('.lms-container').fadeOut();
        $('.lms-container').removeClass('active');
        $('.lms-stu-paging-box').css('display', 'none');
        $('.stu-paging-box').css('display', 'flex');
        $('.stu-check-tab:nth-child(2)').fadeIn();
        $('.stu-check-tab:nth-child(3)').fadeIn();
        $('.search-des').fadeIn();
        $('.search-com-box').css('display', 'flex');
        $('.search-area').css('width', '100%');
        $('.select-container').css('margin-top', '0');
        $('.select-area').css('width', '3.39rem');
        $('.select-area').css('margin-left', '0.29rem');
    };

    $(document).on('click', '.check-analy', function() {
        lmsView();
    });

    $(document).on('click', '.btn-prev', function() {
        lmsNotView();
    });
})();