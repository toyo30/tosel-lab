( () => {
	let currentClick = 0;
	const contentInfo = [
		{
			//0 lms-englisea-wrap
			target: 'dgt-eng',
			//urlLength: 3,
			objs: {
				//각 섹션을 담는 요소
				mainImg: $('.dgt-intro-img-box img'),
				crsBox: $('.crs-box'),
				crsPgn: $('.crs-box > .crs-pgn'),
				crsNext: $('.crs-next'),
				crsPrev: $('.crs-prev'),

			},
			values: {
				mainImg_url: ['/static/images/menu/pc-content-dgt-intr-eng.png', '디지털컨텐츠잉글리쉬'],
				crs_item: `<div class="crs-item swiper-slide">
                                 <img class="lazy lz-entered lz-loaded" data-src="/static/images/menu/pc-content-dgt-crs-item1.png" src="/static/images/menu/pc-content-dgt-crs-item1.png" alt="디지털보카 컨텐츠">
                            </div>
                            <div class="crs-item swiper-slide">
                                 <img class="lazy lz-entered lz-loaded" data-src="/static/images/menu/pc-content-dgt-crs-item2.png" src="/static/images/menu/pc-content-dgt-crs-item2.png" alt="디지털보카 컨텐츠">
                            </div>
                            <div class="crs-item swiper-slide">
                                <img class="lazy lz-entered lz-loaded" data-src="/static/images/menu/pc-content-dgt-crs-item3.png" src="/static/images/menu/pc-content-dgt-crs-item3.png" alt="디지털보카 컨텐츠">
                            </div>
                            <div class="crs-item swiper-slide">
                                <img class="lazy lz-entered lz-loaded" data-src="/static/images/menu/pc-content-dgt-crs-item4.png" src="/static/images/menu/pc-content-dgt-crs-item4.png" alt="디지털보카 컨텐츠">
                            </div>
                            <div class="crs-item swiper-slide">
                                <img class="lazy lz-entered lz-loaded" data-src="/static/images/menu/pc-content-dgt-crs-item5.png" src="/static/images/menu/pc-content-dgt-crs-item5.png" alt="디지털보카 컨텐츠">
                            </div>
                            <div class="crs-item swiper-slide">
                                <img class="lazy lz-entered lz-loaded" data-src="/static/images/menu/pc-content-dgt-crs-item6.png" src="/static/images/menu/pc-content-dgt-crs-item6.png" alt="디지털보카 컨텐츠">
                            </div>`,
				crsBox_size: ['14.2rem', '8.3rem', '4.4rem', '3.41rem'],//width, height, bottom, left
				crsPgn_pos: ['-4.5rem'],
				crsNext_pos: ['5rem', '-2.6rem'],//top, right
				crsPrev_pos: ['5rem', '-2.6rem'],//top, left

			},
		},
		{
			//1 lms-voca-wrap
			target: 'dgt-voca',
			objs: {
				//각 섹션을 담는 요소
				mainImg: $('.dgt-intro-img-box img'),
				crsBox: $('.crs-box'),
				crsPgn: $('.crs-box > .crs-pgn'),
				crsNext: $('.crs-next'),
				crsPrev: $('.crs-prev'),


			},
			//urlLength: 3,
			target: 'dgt-voca',
			values: {
				mainImg_url: ['/static/images/menu/pc-content-dgt-intr-voca.png', '디지털컨텐츠보카'],
				crs_item: `<div class="crs-item swiper-slide">
                                 <img class="lazy lz-entered lz-loaded" data-src="/static/images/menu/pc-content-dgt-crs-item1.png" src="/static/images/menu/pc-content-dgt-crs-item1.png" alt="디지털보카 컨텐츠">
                            </div>
                            <div class="crs-item swiper-slide">
                                 <img class="lazy lz-entered lz-loaded" data-src="/static/images/menu/pc-content-dgt-crs-item2.png" src="/static/images/menu/pc-content-dgt-crs-item2.png" alt="디지털보카 컨텐츠">
                            </div>
                            <div class="crs-item swiper-slide">
                                <img class="lazy lz-entered lz-loaded" data-src="/static/images/menu/pc-content-dgt-crs-item3.png" src="/static/images/menu/pc-content-dgt-crs-item3.png" alt="디지털보카 컨텐츠">
                            </div>
                            <div class="crs-item swiper-slide">
                                <img class="lazy lz-entered lz-loaded" data-src="/static/images/menu/pc-content-dgt-crs-item4.png" src="/static/images/menu/pc-content-dgt-crs-item4.png" alt="디지털보카 컨텐츠">
                            </div>
                            <div class="crs-item swiper-slide">
                                <img class="lazy lz-entered lz-loaded" data-src="/static/images/menu/pc-content-dgt-crs-item5.png" src="/static/images/menu/pc-content-dgt-crs-item5.png" alt="디지털보카 컨텐츠">
                            </div>
                            <div class="crs-item swiper-slide">
                                <img class="lazy lz-entered lz-loaded" data-src="/static/images/menu/pc-content-dgt-crs-item6.png" src="/static/images/menu/pc-content-dgt-crs-item6.png" alt="디지털보카 컨텐츠">
                            </div>`,
					crsBox_size: ['12.5rem', '8.3rem', '1.2rem', '4.41rem'],//width, height, bottom, left
					crsPgn_pos: ['-2.2rem'],
					crsNext_pos: ['3.8rem', '-3rem'],//top, right
					crsPrev_pos: ['3.8rem', '-3rem'],//top, left

			},
		},
	];



	function changeValue() {


		let objs = contentInfo[currentClick].objs;
		let values = contentInfo[currentClick].values;


		objs.mainImg.attr('src', `${values.mainImg_url[0]}`);
		objs.mainImg.attr('alt', `${values.mainImg_url[1]}`);

		objs.crsBox.css('width', values.crsBox_size[0]);
		objs.crsBox.css('height', values.crsBox_size[1]);
		objs.crsBox.css('bottom', values.crsBox_size[2]);
		objs.crsBox.css('left', values.crsBox_size[3]);

		objs.crsPgn.css('bottom', values.crsPgn_pos[0]);

		objs.crsNext.css('top', values.crsNext_pos[0]);
		objs.crsNext.css('right', values.crsNext_pos[1]);

		objs.crsPrev.css('top', values.crsPrev_pos[0]);
		objs.crsPrev.css('left', values.crsPrev_pos[1]);

		/*
        objs.lmsIntroWrap.css('background-color', `${values.lmsIntroWrap_color[0]}`);
        objs.lmsIntroImg.attr('src', `${values.lmsIntroImg_url[0]}`);
        objs.lmsIntroImg.attr('alt', `${values.lmsIntroImg_url[1]}`);

        objs.lmsIntroTextTitle.html(`${values.lmsIntroTextTitle}`);

        objs.lmsConfigItemStudyImg.attr('src', `${values.lmsConfigItemStudyImg_url[0]}`);
        objs.lmsConfigItemStudyImg.attr('alt', `${values.lmsConfigItemStudyImg_url[1]}`);

        objs.lmsConfigItemDailyImg.attr('src', `${values.lmsConfigItemDailyImg_url[0]}`);
        objs.lmsConfigItemDailyImg.attr('alt', `${values.lmsConfigItemDailyImg_url[1]}`);

        objs.lmsConfigItemWeeklyImg.attr('src', `${values.lmsConfigItemWeeklyImg_url[0]}`);
        objs.lmsConfigItemWeeklyImg.attr('alt', `${values.lmsConfigItemWeeklyImg_url[1]}`);

        objs.lmsCurWrap.attr('src', `${values.lmsCurWrap_url[0]}`);
        objs.lmsCurWrap.attr('alt', `${values.lmsCurWrap_url[1]}`);

        objs.lmsDailyWrap.attr('src', `${values.lmsDailyWrap_url[0]}`);
        objs.lmsDailyWrap.attr('alt', `${values.lmsDailyWrap_url[1]}`);

        objs.lmsMonthlyWrap.attr('src', `${values.lmsMonthlyWrap_url[0]}`);
        objs.lmsMonthlyWrap.attr('alt', `${values.lmsMonthlyWrap_url[1]}`);

         */

	}

	window.swiper = null;

	function startSwiper() {

		if(window.swiper != null){
			window.swiper.destroy();
		}

		$('.crs-area').children().remove();
		let values = contentInfo[currentClick].values;
		$('.crs-area').append(values.crs_item);

		window.swiper = new Swiper(".mySwiper", {
		cssMode: true,
		navigation: {
		  nextEl: ".swiper-button-next",
		  prevEl: ".swiper-button-prev",
		},
		pagination: {
		  el: ".swiper-pagination",
		},
		mousewheel: true,
		keyboard: true,
	  });
	}






//currentClick을 지정하기
	$(document).on('click', '.bar-item', function() {
		let target = $(this).data('item');


		let objs = contentInfo[currentClick].objs;
		let values = contentInfo[currentClick].values;
		if(target == "dgt-english-wrap"){ currentClick = 0}
		else if(target == "dgt-voca-wrap"){ currentClick = 1}

		$.each(objs, function(idx, item) {
			//$(item).css('visibility', 'hidden');

			//$(item).animate({'opacity': '0'}, 200);
			$(item).css('opacity', '0');

		})

		startSwiper();
		changeValue();

		$.each(objs, function(idx, item) {
			$(item).animate({'opacity': '1'}, 400);
		});


	})


	$(document).ready(function() {
		changeValue();
		startSwiper();
	});

	$(window).resize(function() {
		changeValue();
		startSwiper();
	});




})();
