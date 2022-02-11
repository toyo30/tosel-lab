(() => {
	let currentClick = 0;
	const contentInfo = [

		{
			//0 lms-englisea-wrap
			target: 'lms-englisea-wrap',
			//urlLength: 3,
			objs: {
				//각 섹션을 담는 요소
				aiWrap: $('.ai-intro-wrap'),
				logoImg: $('.ai-intro-img-box img'),


			},
			values: {
				aiWrap_back: ['#141313'],
				logoImg_url: ['/static/images/menu/pc-content-ai-intr-prs-main.png', '단체 컨설팅 자료'],



			},
		},

		{
			//1 lms-voca-wrap
			target: 'lms-voca-wrap',
			//urlLength: 3,
			objs: {
				//각 섹션을 담는 요소
				aiWrap: $('.ai-intro-wrap'),
				logoImg: $('.ai-intro-img-box img'),


			},
			values: {
				aiWrap_back: ['#FFFFFF'],
				logoImg_url: ['/static/images/menu/pc-content-ai-intr-grp-main.png', '개인 컨설팅 자료'],

			},
		},

	];



	function changeValue() {


		let objs = contentInfo[currentClick].objs;
		let values = contentInfo[currentClick].values;

			objs.aiWrap.css('background-color', values.aiWrap_back[0]);
			objs.aiWrap.css('background-color', values.aiWrap_back[0]);

			objs.logoImg.attr('src', `${values.logoImg_url[0]}`);
			objs.logoImg.attr('alt', `${values.logoImg_url[1]}`);


	}





//currentClick을 지정하기
	$(document).on('click', '.bar-item', function() {
		let target = $(this).data('item');


		let objs = contentInfo[currentClick].objs;
		let values = contentInfo[currentClick].values;
		if(target == "ai-grp-wrap"){ currentClick = 0}
		else if(target == "ai-prs-wrap"){ currentClick = 1}

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
