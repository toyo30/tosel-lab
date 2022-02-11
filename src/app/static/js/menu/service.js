/* .menu-item 클릭시 해당 페이지 보여주기  */
function showContents(target) {
    let tarData = $(target).data('target');
    $('.' + tarData).fadeIn();
    $('.' + tarData).siblings().css({"display":"none"});
    $(document).find('.menu-item').removeClass('active-contents');
    $(target).addClass('active-contents');
}

 /* .menu-item 클릭시 해당 첫 번째 .bar-item 크기만큼 길이 변경하기 */
function indicateFirst(target) {
    let data = $(target).data('target');
    let widthBarItem = $(`.${data} .bar-box .bar-item:nth-child(1)`).outerWidth();
    $('.indicate-item').css('width', `${widthBarItem}px`);
    $('.indicate-item').css('left', `0px`);
    $(document).find('.bar-item').removeClass('bar-text-active');
    $(`.${data} .bar-box .bar-item:nth-child(1)`).addClass('bar-text-active');
};


$(document).on('click', '.menu-item', function() {
    showContents(this);
    indicateFirst(this);
});

/* .menu-item 마우스 오버시 새상변경  */
$(document).on('mouseover', '.menu-item', function() {
    $(this).css('background-color', '#F6F6FA');
});
$(document).on('mouseleave', '.menu-item', function() {
    $(this).css('background-color', '#FFFFFF');
});


function indicateBar(target) {

    //위치 조정
    let targetLeft =  parseInt($(target).position().left);
    let targetFirst = parseInt($(target).parent().find('.bar-item:nth-child(1)').position().left);
    $('.indicate-item').css('left', `${targetLeft - targetFirst}px`);

    //색상 설정
    $(document).find('.bar-item').removeClass('bar-text-active');
    $(target).addClass('bar-text-active');

};


$(document).on('click', '.bar-item', function() {
    indicateBar(this);

});

$(window).resize(function(){
    indicateFirst($('.menu-item.active-contents'));
});




