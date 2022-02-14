(() => {
	let currentClick = 0;
	const contentInfo = [

		{
			//0 lms-englisea-wrap
			target: 'bk-read',
			//urlLength: 3,
			objs: {
				//각 섹션을 담는 요소
				logoImg: $('.book-intro-img-box img'),
				bookAvt: $('.book-avt-img-box img'),
				bookDes: $('.book-des-img-box img'),
				bookInfo: $('.book-info-img-box img'),
				bookBuy: $('.book-buy-img-box img'),

				/*
				lmsIntroWrap: $('.lms-intro-wrap'),
				lmsIntroImg: $('.lms-intro-img img'),
				lmsIntroTextTitle: $('.lms-intro-text-title'),

				lmsConfigItemStudyImg: $('.lms-config-item:nth-child(1) .lms-config-img-box img'),
				lmsConfigItemDailyImg: $('.lms-config-item:nth-child(2) .lms-config-img-box img'),
				lmsConfigItemWeeklyImg: $('.lms-config-item:nth-child(3) .lms-config-img-box img'),

				lmsCurWrap: $('.cur-img-box img'),
				lmsDailyWrap: $('.daily-img-box img'),
				lmsMonthlyWrap: $('.monthly-img-box img'),
				*/
			},
			values: {
				logoImg_url: ['/static/images/menu/pc-content-bk-intr-read.png', '리딩시리즈소개'],
				bookAvt_url: ['/static/images/menu/pc-content-bk-read-avt.png', '리딩시리즈특장점'],
				bookDes_url: ['/static/images/menu/pc-content-bk-read-des.png', '리딩시리즈설명'],
				bookInfo_url: ['/static/images/menu/pc-content-bk-read-info.png', '리딩시리즈정보'],
				bookBuy_url: ['/static/images/menu/pc-content-bk-read-buy.png', '리딩시리즈구매정보'],

				/*
				lmsIntroWrap_color: ['#7BD5F5'],
				lmsIntroImg_url: ['/static/images/menu/pc-content-lms-englisea-intro-img.png', '잉글리쉬학습통계자료휴대폰목업'],
				lmsIntroTextTitle: 'ENGLISEA',


				lmsConfigItemStudyImg_url: ['/static/images/menu/pc-content-lms-englisea-config-study.png', '엘엠에스학습현황'],
				lmsConfigItemDailyImg_url: ['/static/images/menu/pc-content-lms-englisea-config-daily.png', '엘엠에스일일현황'],
				lmsConfigItemWeeklyImg_url: ['/static/images/menu/pc-content-lms-englisea-config-weekly.png', '엘엠에스주간현황'],

				lmsCurWrap_url: ['/static/images/menu/pc-content-lms-englisea-cur.png', '학습현황통계'],
				lmsDailyWrap_url: ['/static/images/menu/pc-content-lms-englisea-daily.png', '일일현황통계'],
				lmsMonthlyWrap_url: ['/static/images/menu/pc-content-lms-englisea-weekly.png', '주간현황통계'],
				*/

			},
		},

		{
			//1 lms-voca-wrap
			target: 'bk-voca',
			//urlLength: 3,
			objs: {
				//각 섹션을 담는 요소
				logoImg: $('.book-intro-img-box img'),
				bookAvt: $('.book-avt-img-box img'),
				bookDes: $('.book-des-img-box img'),
				bookInfo: $('.book-info-img-box img'),
				bookBuy: $('.book-buy-img-box img'),

				/*
				lmsIntroWrap: $('.lms-intro-wrap'),
				lmsIntroImg: $('.lms-intro-img img'),
				lmsIntroTextTitle: $('.lms-intro-text-title'),

				lmsConfigItemStudyImg: $('.lms-config-item:nth-child(1) .lms-config-img-box img'),
				lmsConfigItemDailyImg: $('.lms-config-item:nth-child(2) .lms-config-img-box img'),
				lmsConfigItemWeeklyImg: $('.lms-config-item:nth-child(3) .lms-config-img-box img'),

				lmsCurWrap: $('.cur-img-box img'),
				lmsDailyWrap: $('.daily-img-box img'),
				lmsMonthlyWrap: $('.monthly-img-box img'),

				 */

			},
			values: {
				logoImg_url: ['/static/images/menu/pc-content-bk-intr-voca.png', '보카시리즈설명'],
				bookAvt_url: ['/static/images/menu/pc-content-bk-voca-avt.png', '보카시리즈특장점'],
				bookDes_url: ['/static/images/menu/pc-content-bk-voca-des.png', '보카시리즈설명'],
				bookInfo_url: ['/static/images/menu/pc-content-bk-voca-info.png', '보카시리즈정보'],
				bookBuy_url: ['/static/images/menu/pc-content-bk-voca-buy.png', '보카시리즈구매정보'],

				/*
				lmsIntroWrap_color: ['#99A1FF'],
				lmsIntroImg_url: ['/static/images/menu/pc-content-lms-voca-intro-img.png', '보카학습통계자료휴대폰목업'],
				lmsIntroTextTitle: 'VOCA Series',


				lmsConfigItemStudyImg_url: ['/static/images/menu/pc-content-lms-voca-config-study.png', '보카엘엠에스학습현황'],
				lmsConfigItemDailyImg_url: ['/static/images/menu/pc-content-lms-voca-config-daily.png', '보카엘엠에스일일현황'],
				lmsConfigItemWeeklyImg_url: ['/static/images/menu/pc-content-lms-voca-config-monthly.png', '보카엘엠에스월간현황'],

				lmsCurWrap_url: ['/static/images/menu/pc-content-lms-voca-cur.png', '보카학습현황통계'],
				lmsDailyWrap_url: ['/static/images/menu/pc-content-lms-voca-daily.png', '보카일일현황통계'],
				lmsMonthlyWrap_url: ['/static/images/menu/pc-content-lms-voca-monthly.png', '보카월간현황통계'],
				*/

			},
		},
		{
			//2 lms-voca-wrap
			target: 'lms-voca-wrap',
			//urlLength: 3,
			objs: {
				//각 섹션을 담는 요소
				logoImg: $('.book-intro-img-box img'),
				bookAvt: $('.book-avt-img-box img'),
				bookDes: $('.book-des-img-box img'),
				bookInfo: $('.book-info-img-box img'),
				bookBuy: $('.book-buy-img-box img'),

				/*
				lmsIntroWrap: $('.lms-intro-wrap'),
				lmsIntroImg: $('.lms-intro-img img'),
				lmsIntroTextTitle: $('.lms-intro-text-title'),

				lmsConfigItemStudyImg: $('.lms-config-item:nth-child(1) .lms-config-img-box img'),
				lmsConfigItemDailyImg: $('.lms-config-item:nth-child(2) .lms-config-img-box img'),
				lmsConfigItemWeeklyImg: $('.lms-config-item:nth-child(3) .lms-config-img-box img'),

				lmsCurWrap: $('.cur-img-box img'),
				lmsDailyWrap: $('.daily-img-box img'),
				lmsMonthlyWrap: $('.monthly-img-box img'),

				 */

			},
			values: {
				logoImg_url: ['/static/images/menu/pc-content-bk-intr-gram.png', '그래머시리즈설명'],
				bookAvt_url: ['/static/images/menu/pc-content-bk-gram-avt.png', '그래머시리즈특장점'],
				bookDes_url: ['/static/images/menu/pc-content-bk-gram-des.png', '그래머시리즈설명'],
				bookInfo_url: ['/static/images/menu/pc-content-bk-gram-info.png', '그래머시리즈정보'],
				bookBuy_url: ['/static/images/menu/pc-content-bk-gram-buy.png', '그래머시리즈구매정보'],

				/*
				lmsIntroWrap_color: ['#99A1FF'],
				lmsIntroImg_url: ['/static/images/menu/pc-content-lms-voca-intro-img.png', '보카학습통계자료휴대폰목업'],
				lmsIntroTextTitle: 'VOCA Series',


				lmsConfigItemStudyImg_url: ['/static/images/menu/pc-content-lms-voca-config-study.png', '보카엘엠에스학습현황'],
				lmsConfigItemDailyImg_url: ['/static/images/menu/pc-content-lms-voca-config-daily.png', '보카엘엠에스일일현황'],
				lmsConfigItemWeeklyImg_url: ['/static/images/menu/pc-content-lms-voca-config-monthly.png', '보카엘엠에스월간현황'],

				lmsCurWrap_url: ['/static/images/menu/pc-content-lms-voca-cur.png', '보카학습현황통계'],
				lmsDailyWrap_url: ['/static/images/menu/pc-content-lms-voca-daily.png', '보카일일현황통계'],
				lmsMonthlyWrap_url: ['/static/images/menu/pc-content-lms-voca-monthly.png', '보카월간현황통계'],
				*/

			},
		},
		
	];

	

	function changeValue() {




		let objs = contentInfo[currentClick].objs;
		let values = contentInfo[currentClick].values;






			objs.logoImg.attr('src', `${values.logoImg_url[0]}`);
			objs.logoImg.attr('alt', `${values.logoImg_url[1]}`);


			objs.bookAvt.attr('src', `${values.bookAvt_url[0]}`);
			objs.bookAvt.attr('alt', `${values.bookAvt_url[1]}`);

			objs.bookDes.attr('src', `${values.bookDes_url[0]}`);
			objs.bookDes.attr('alt', `${values.bookDes_url[1]}`);

			objs.bookInfo.attr('src', `${values.bookInfo_url[0]}`);
			objs.bookInfo.attr('alt', `${values.bookInfo_url[1]}`);

			objs.bookBuy.attr('src', `${values.bookBuy_url[0]}`);
			objs.bookBuy.attr('alt', `${values.bookBuy_url[1]}`);



	}





//currentClick을 지정하기 
	$(document).on('click', '.bar-item', function() {
		let target = $(this).data('item');


		let objs = contentInfo[currentClick].objs;
		let values = contentInfo[currentClick].values;
		if(target == "bk-read-wrap"){ currentClick = 0}
		else if(target == "bk-voca-wrap"){ currentClick = 1}
		else if(target == "bk-gram-wrap"){ currentClick = 2}

		$.each(objs, function(idx, item) {
			//$(item).css('visibility', 'hidden');

			//$(item).animate({'opacity': '0'}, 200);
			$(item).css('opacity', '0');

		})

		changeValue();

		$.each(objs, function(idx, item) {
			$(item).animate({'opacity': '1'}, 400);
		});


	})


	$(document).ready(function() {
		changeValue();
	});
	
	// $(window).resize(function() {
	// 	changeValue();
	// });



	
})();
