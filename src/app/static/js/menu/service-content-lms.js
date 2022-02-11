( () => {

	let currentClick = 0;
	const contentInfo = [

		{
			//0 lms-englisea-wrap
			target: 'lms-englisea-wrap',
			//urlLength: 3,
			objs: {
				//각 섹션을 담는 요소
				logoImg: $('.lms-logo-box img'),

				lmsIntroWrap: $('.lms-intro-wrap'),
				lmsIntroImg: $('.lms-intro-img img'),
				lmsIntroTextTitle: $('.lms-intro-text-title'),

				lmsConfigItemStudyImg: $('.lms-config-item:nth-child(1) .lms-config-img-box img'),
				lmsConfigItemDailyImg: $('.lms-config-item:nth-child(2) .lms-config-img-box img'),
				lmsConfigItemWeeklyImg: $('.lms-config-item:nth-child(3) .lms-config-img-box img'),

				lmsCurWrap: $('.cur-img-box img'),
				lmsDailyWrap: $('.daily-img-box img'),
				lmsMonthlyWrap: $('.monthly-img-box img'),

			},
			values: {
				logoImg_url: ['/static/images/menu/pc-content-lms-englisea.png', '잉글리쉬학습통계자료로고'],

				lmsIntroWrap_color: ['#7BD5F5'],
				lmsIntroImg_url: ['/static/images/menu/pc-content-lms-englisea-intro-img.png', '잉글리쉬학습통계자료휴대폰목업'],
				lmsIntroTextTitle: 'ENGLISEA',


				lmsConfigItemStudyImg_url: ['/static/images/menu/pc-content-lms-englisea-config-study.png', '엘엠에스학습현황'],
				lmsConfigItemDailyImg_url: ['/static/images/menu/pc-content-lms-englisea-config-daily.png', '엘엠에스일일현황'],
				lmsConfigItemWeeklyImg_url: ['/static/images/menu/pc-content-lms-englisea-config-weekly.png', '엘엠에스주간현황'],

				lmsCurWrap_url: ['/static/images/menu/pc-content-lms-englisea-cur.png', '학습현황통계'],
				lmsDailyWrap_url: ['/static/images/menu/pc-content-lms-englisea-daily.png', '일일현황통계'],
				lmsMonthlyWrap_url: ['/static/images/menu/pc-content-lms-englisea-weekly.png', '주간현황통계'],


			},
		},

		{
			//1 lms-voca-wrap
			target: 'lms-voca-wrap',
			//urlLength: 3,
			objs: {
				//각 섹션을 담는 요소
				logoImg: $('.lms-logo-box img'),

				lmsIntroWrap: $('.lms-intro-wrap'),
				lmsIntroImg: $('.lms-intro-img img'),
				lmsIntroTextTitle: $('.lms-intro-text-title'),

				lmsConfigItemStudyImg: $('.lms-config-item:nth-child(1) .lms-config-img-box img'),
				lmsConfigItemDailyImg: $('.lms-config-item:nth-child(2) .lms-config-img-box img'),
				lmsConfigItemWeeklyImg: $('.lms-config-item:nth-child(3) .lms-config-img-box img'),

				lmsCurWrap: $('.cur-img-box img'),
				lmsDailyWrap: $('.daily-img-box img'),
				lmsMonthlyWrap: $('.monthly-img-box img'),

			},
			values: {
				logoImg_url: ['/static/images/menu/pc-content-lms-voca.png', '보카학습통계자료로고'],

				lmsIntroWrap_color: ['#99A1FF'],
				lmsIntroImg_url: ['/static/images/menu/pc-content-lms-voca-intro-img.png', '보카학습통계자료휴대폰목업'],
				lmsIntroTextTitle: 'VOCA Series',


				lmsConfigItemStudyImg_url: ['/static/images/menu/pc-content-lms-voca-config-study.png', '보카엘엠에스학습현황'],
				lmsConfigItemDailyImg_url: ['/static/images/menu/pc-content-lms-voca-config-daily.png', '보카엘엠에스일일현황'],
				lmsConfigItemWeeklyImg_url: ['/static/images/menu/pc-content-lms-voca-config-monthly.png', '보카엘엠에스월간현황'],

				lmsCurWrap_url: ['/static/images/menu/pc-content-lms-voca-cur.png', '보카학습현황통계'],
				lmsDailyWrap_url: ['/static/images/menu/pc-content-lms-voca-daily.png', '보카일일현황통계'],
				lmsMonthlyWrap_url: ['/static/images/menu/pc-content-lms-voca-monthly.png', '보카월간현황통계'],

			},
		},
		
	];

	

	function changeValue() {




		let objs = contentInfo[currentClick].objs;
		let values = contentInfo[currentClick].values;


			objs.logoImg.attr('src', `${values.logoImg_url[0]}`);
			objs.logoImg.attr('alt', `${values.logoImg_url[1]}`);

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





	}





//currentClick을 지정하기 
	$(document).on('click', '.bar-item', function() {
		let target = $(this).data('item');
		let objs = contentInfo[currentClick].objs;
		let values = contentInfo[currentClick].values;

		if(target == "lms-englisea-wrap"){ currentClick = 0}
		else if(target == "lms-voca-wrap"){ currentClick = 1}

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
