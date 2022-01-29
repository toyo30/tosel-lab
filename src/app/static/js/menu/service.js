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


    // 페이지가 로드되면 asyncImage 클래스명을 가진 노드를 가져온다.
  const objects = document.getElementsByClassName('asyncImage');  Array.from(objects).map((item) => {
    const img = new Image();
    // src="작은사이즈 이미지URL" data-src="원본이미지URL"가 들어있다.
    // src를 원본 이미지URL로 교체한다.
    img.src = item.dataset.src;
    img.onload = () => {
      item.classList.remove('asyncImage');
      return item.nodeName === 'IMG' ?
        item.src = item.dataset.src :
        item.style.backgroundImage = `url(${item.dataset.src})`;
    };
  });



    let verticalBar = $('.indicate-item');
    let verticalMenus = $('.bar-item');

    // bar-item을 클릭할 때마다 indicate-item의 left를 정의
    function verticalIndicator(target) {
        let pL = $(target).position().left;
        pL -= $(target).parent().position().left
        verticalBar.animate({left:`${pL}`});

    }


    $(document).on('click', '.bar-item', function(){
        $(document).find('.bar-item').removeClass('bar-text-active');
        $(this).addClass('bar-text-active');
        verticalIndicator(this);
    });

    function indicateFirst() {
        verticalIndicator(verticalMenus.eq(0));
        console.log(verticalMenus.eq(0));
        let fW = verticalMenus.eq(0).outerWidth();
        verticalBar.css('width', `${fW}`);
        console.log(fW);
    }

    $(document).ready(function() {
        indicateFirst();
    });








})();


