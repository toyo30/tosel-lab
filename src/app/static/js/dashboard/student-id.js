(() => {

    /* --------------------- 학생관리 메뉴 변경('아이디 발급, 분반 관리, 학생 레벨 설정)------------------------------------------*/

    let stuId = ['아이디 발급', '*학부모 아이디는 학생 당 1개, 선생님 아이디는 선생님 당 1개씩 발급됩니다.'];
    let stuLevelText = ['학생 레벨 설정', '*설정하신대로 Digital Contents Level이 변경됩니다.'];
    let stuClassText = ['분반 관리', '*분반을 추가하면 자동으로 선생님 아이디가 발급됩니다.'];

    function stuChangeId() {
        $('.search-title').text(stuId[0]);
        $('.search-des').text(stuId[1]);
        $('.sele-btn-box').fadeIn();
        $('.select-area').fadeIn();
        $('.page-area:nth-child(1) .page-link').css('font-weight', 'normal');
        $('.page-area:nth-child(1) .page-link:nth-child(1)').css('font-weight', 'bold');
        $('#tog-btn').fadeOut();
        $('.tog-btn-lab').fadeOut();
        $('.student-level-container').fadeOut();
        $('.divide-class-container').fadeOut();
        $('.parent-id-container').fadeIn();
        $('.btn-bar').animate({left: '0'}, 10);
        $('.sele-btn.prt').css('color', '#37B2EE');
        $('.sele-btn.tcr').css('color', '#FFFFFF');

        //data-target들 변경해주기, searchText/ searcharea
    }

    function stuChangeLevel() {
        $('.page-area:nth-child(1) .page-link').css('font-weight', 'normal');
        $('.page-area:nth-child(1) .page-link:nth-child(2)').css('font-weight', 'bold');
        $('.search-title').text(stuLevelText[0]);
        $('.search-des').text(stuLevelText[1]);
        $('.sele-btn-box').fadeOut();
        $('.select-area').fadeIn();
        $('.tog-btn-lab').fadeIn();
        $('.divide-class-container').fadeOut();
        $('.parent-id-container').fadeOut();
        $('.student-level-container').fadeIn();
        $('.btn-bar').animate({left: '3.07rem'}, 10);
        $('.sele-btn.tcr').css('color', '#37B2EE');
        $('.sele-btn.prt').css('color', '#FFFFFF');

        //data-target들 변경해주기, searchText/ searcharea
    }

    function stuChangeClass() {
        $('.page-area:nth-child(1) .page-link').css('font-weight', 'normal');
        $('.page-area:nth-child(1) .page-link:nth-child(3)').css('font-weight', 'bold');
        $('.search-title').text(stuClassText[0]);
        $('.search-des').text(stuClassText[1]);
        $('.sele-btn-box').fadeIn();
        $('.select-area:nth-child(3)').fadeOut();
        $('#tog-btn').fadeOut();
        $('.tog-btn-lab').fadeOut();
        $('.student-level-container').fadeOut();
        $('.parent-id-container').fadeOut();
        $('.divide-class-container').fadeIn();
        $('.btn-bar').animate({left: '3.07rem'}, 10);
        $('.sele-btn.tcr').css('color', '#37B2EE');
        $('.sele-btn.prt').css('color', '#FFFFFF');

        //data-target들 변경해주기, searchText/ searcharea
    }

    $(document).on('click', '.page-area:nth-child(1) .page-link:nth-child(1)', function() {
        stuChangeId();
    });


    $(document).on('click', '.page-area:nth-child(1) .page-link:nth-child(2)', function() {
        stuChangeLevel();
    });


    $(document).on('click', '.page-area:nth-child(1) .page-link:nth-child(3)', function() {
        stuChangeClass();
    });

     $(document).on('click', '.sele-btn', function() {
        if($(this).data('target') == 'teacher') {
            $('.btn-bar').animate({left: '3.07rem'}, 10);
            $('.sele-btn.tcr').css('color', '#37B2EE');
            $('.sele-btn.prt').css('color', '#FFFFFF');
            stuChangeClass();
        }

        if($(this).data('target') == 'parent') {
            $('.btn-bar').animate({left: '0'}, 10);
            $('.sele-btn.prt').css('color', '#37B2EE');
            $('.sele-btn.tcr').css('color', '#FFFFFF');
            stuChangeId();
        }

    });



/* -------------------  학부모 아이디 발급 ------------------------------*/

    //학부모 아이디 발급하기 버튼 클릭
    function addLoading() {
        $('.scroll-bar').addClass('before-load');
        $('.scroll-bar').prepend(`
            <div class="loading">
                <svg class="loading-circle">
                    <circle cx="50%" cy="50%" r="25"></circle>
                </svg>
            </div>`)

        setTimeout(() => {
            $('.scroll-bar').remove('before-load');
        }, 1000);

        setTimeout(() => {
            $(document).find('.loading').remove();
            $('.prt-check-component-box').append(`
            <button class="prt-id-issue">아이디가 발급되었습니다.</button>
            `);
        }, 2000);

        // 선택된 요소들을 제거
        $('.prt-component').remove();
        $('input[type="checkbox"]').prop('checked', false);
    }


    // 체크박스 전체 선택
    function allCheck(target) {
        let checked = $('.all-check').is(':checked');

        //all-check
        if(checked) {
            $(target).parents().eq(1).find('.part-check').prop('checked', true);
        } else if(!checked) {
            $(target).parents().eq(1).find('.part-check').prop('checked', false);
        }
    }

    // 체크박스 부분 선택
    function partCheck(target) {
        let lenCheck = $(target).parents().eq(1).find('.part-check').length;
        let lenChecked = $(target).parents().eq(1).find('.part-check:checked').length;

        if(lenCheck != lenChecked) {
            $(target).parents().eq(1).find('.all-check').prop('checked', false);
        } else if(lenCheck == lenChecked) {
            $(target).parents().eq(1).find('.all-check').prop('checked', true);
        }

    }

    // 발급 체크박스 전체 선택
    function allCheckIssue(target) {
        let checked = $('.all-check-issue').is(':checked');

        //all-check
        if(checked) {
            $('.parent-check-area').find('.part-check-issue').prop('checked', true);
        } else if(!checked) {
            $('.parent-check-area').find('.part-check-issue').prop('checked', false);
        }
    }

    // 발급 체크박스 부분 선택
    function partCheckIssue(target) {
        let lenCheck = $(target).parents().eq(3).find('.part-check-issue').length;
        let lenChecked = $(target).parents().eq(3).find('.part-check-issue:checked').length;

        if(lenCheck != lenChecked) {
            $('.parent-check-area').find('.all-check-issue').prop('checked', false);
        } else if(lenCheck == lenChecked) {
            $('.parent-check-area').find('.all-check-issue').prop('checked', true);
        }
    }

    // 발급 요소 생성
    function addCheckComponent(target){
        $('.prt-id-issue').remove();

        let checks = $('.part-check:checked');
        let checkNum = 0;
        $('.prt-check-component-box .prt-component').remove();
        $(checks).each(function (index, item){
            checkNum++;
            if(checkNum < 10) {
                checkNum = '0' + checkNum;
             };

            let checkValue = $(item).parent().find('.check-name').text();
            $('.prt-check-component-box').append(`
                 <div class="prt-component">
                     <div class="prt-check-component">
                         <p class="prt-num">${checkNum}</p>
                         <div class="check-issue-box">
                             <input class="part-check-issue check-issue" type="checkbox" checked>
                         </div>
                         <p class="prt-all-name">${checkValue}</p>
                     </div>
                 </div>`);

             $('.all-check-issue').prop('checked', true);

        });
    };




    //체크버튼 누르기

    //학부모 아이디 발급하기 버튼 누르기
    $(document).on('click', '.prt-check-btn', function() {
        addLoading();
    });

    //전체선택 체크
    $(document).on('click', '.all-check', function() {
        allCheck(this);
        addCheckComponent(this);
    });

    //부분선택 체크
    $(document).on('click', '.part-check', function() {
        partCheck(this);
        addCheckComponent(this);
    });

    //발급 전체 선택
    $(document).on('click', '.all-check-issue', function() {
        allCheckIssue(this);
    });

    //발급 부분 선택
    $(document).on('click', '.part-check-issue', function() {
        partCheckIssue(this);
    });










    /* -------------------  학생 레벨 설정 ------------------------------*/

    $(document).on('click', '.tog-btn-lab', function() {
        let checked = $('#tog-btn').is(':checked');

        if(!checked) {
            $('.head-sele').fadeIn();
            $('.head-sele').next().fadeIn();
            $('.com-check-box').fadeIn();
            $('.com-check-box').next().fadeIn();
        } else if(checked) {
            $('.head-sele').fadeOut();
            $('.com-check-box').fadeOut();
            $('.head-sele').next().fadeOut();
            $('.com-check-box').next().fadeOut();
        }
    });


    $(document).on('click', '.member-del', function() {
        if(!$(this).hasClass('member-active')) {
            $(this).addClass('member-active');
            $(this).animate({width: '11rem'});
            $('.dvd-info-bar').fadeIn();
            $('.remove-check').fadeIn();
            $('.remove-answer').fadeIn();
            $('.member-btn').animate({width: '1.75rem'});
            $('.member-btn').css('display', 'flex');
            $('.remove-des').fadeOut();
        }

    });

    $(document).on('click', '.btn-remove', function() {
        if($(this).data('target') == 'yes') {
            //ajax 데이터 삭제
            //페이징 다시하기
            alert('학생 정보가 삭제되었습니다.');

            let checkAll = $('.check-com:checked');
            checkAll.each(function(idx, item) {
                $('.check-com:checked').parents().eq(1).remove();

            });

        }

        if($(this).data('target') == 'no') {

        }

        $('.member-active').removeClass('member-active');
            $('.member-del').animate({width: '1.75rem'});
            $('.dvd-info-bar').fadeOut();
            $('.remove-check').fadeOut();
            $('.remove-answer').fadeOut();
            $('.member-btn').fadeOut();
            $('.remove-des').fadeIn();
    });

    //selecBox 클릭 시 화면 까메지고,
        $(document).on('click', '.selectBox', function() {
           if($(this).hasClass('active')) {
               $(this).css('z-index', '1');
               $('.popup-dimmed').fadeIn();
           } else if(!$(this).hasClass('active')) {
               setTimeout(() => {
                   $(this).css('z-index', '0');
                    $('.popup-dimmed').fadeOut();
               }, 600)

           }
        });



    /* -------------------  선생님 아이디 발급 ------------------------------*/

    let claInfo = [
        ["김하나", "김둘", "김셋", "김넷", "김다섯", "김육"],
        ["김하나", "김둘", "김셋", "김넷", "김다섯"],
        ["김하나", "김둘", "김셋", "김넷", "김다섯", "김육", "김칠", "김여덟", "김구선생님", "김열"],
    ];


    function addDvdCom() {
        //ajax로 데이터값 불러오기

        let dvdNum = $('.dvd-component').length + 1;
        let dvdPhd = '반명,선생님명';
        let dvdId = `Class00${dvdNum}@0000`;

        if(dvdNum < 10) {
            dvdNum = '00' + dvdNum;
        } else if(dvdNum < 100) {
            dvdNum = '0' + dvdNum;
        };



        $('.dvd-component-box').append(`
           <div class="dvd-component">
                <p class="cla-sect">Class ${dvdNum}</p>
                <div class="cla-des-box">
                    <div class="cla-text">
                        <div class="cla-nam-box">
                            <input type="text" placeholder="${dvdPhd}" name="claNam" id="cla-nam${dvdNum}" class="cla-nam">
                            <label class='cla-nam-lab' for="cla-nam${dvdNum}"></label>
                        </div>
                    </div>
                    <p class="cla-id">ID : <span class="cla-id-value">${dvdId}</span></p>
                </div>
            </div>
        `);
    };

    //dvdcomponent를 클릭할 때 해당하는 데이터를 .cla-box 에 보여주기

    function clickDvd(target) {
        //색상 변경
        $(document).find('.dvd-component').not(target).removeClass('dvd-component-active');
        $(target).toggleClass('dvd-component-active');

        //.cla-component 전체삭제
        $('.cla-component-box').find('.cla-component').remove();

        let claBoxTitle = $(target).find('.cla-sect').text();
        console.log(claBoxTitle);

        $('.cla-check-text').text(claBoxTitle);



        // ajax 해당 데이터의 저장된 값을 가져와서 .cla-box 에 보여주기

        let data = $(target).find('.cla-sect').text();
        let dataNum = data.slice((data.length - 3), (data.length));

        let dataEnt = claInfo[parseInt(dataNum) - 1];
        if(dataEnt != null) {
            dataEnt.forEach(function(item, idx) {
                idx++;
                if(idx < 10) {
                    idx = '0' + idx;
                };

                $('.cla-component-box').append(`
                <div class="cla-component">
                    <p class="stu-num">${idx}</p>
                    <div class="cal-check-box">            
                        <button class="remove-com" style="display:block"></button>
                        </div>
        
                        <p class="stu-name">${item}</p>
                    </div>
                `);
            });
        };


    };


    function allAddCheck(target) {
        let checked = $('.all-add-check').is(':checked');

        //all-check
        if(checked) {
            $(target).parents().eq(1).find('.part-add-check').prop('checked', true);
        } else if(!checked) {
            $(target).parents().eq(1).find('.part-add-check').prop('checked', false);
        }
    }

    // 체크박스 부분 선택
    function partAddCheck(target) {
        let lenCheck = $(target).parents().eq(1).find('.part-add-check').length;
        let lenChecked = $(target).parents().eq(1).find('.part-add-check:checked').length;

        if(lenCheck != lenChecked) {
            $(target).parents().eq(1).find('.all-add-check').prop('checked', false);
        } else if(lenCheck == lenChecked) {
            $(target).parents().eq(1).find('.all-add-check').prop('checked', true);
        }

    }



    function addStuComponent(target){

        let checks = $('.part-add-check:checked');
        let checkNum = $('.cla-component').length + checks.length;
        $('.cla-component-box .cla-component.').remove();

        $(checks).each(function (index, item){
            checkNum = checks.length;

            if(checkNum < 10) {
                checkNum = '0' + checkNum;
             };



            let checkValue = $(item).parent().find('.stu-name').text();
            $('.prt-check-component-box').append(`
                 <div class="cla-component">
                        <p class="stu-num">${checkNum}</p>
                        <div class="cal-check-box">
                            <input class="check-cla" type="checkbox">
                            <button class="remove-com"></button>
                        </div>
    
                        <p class="stu-name">추가학생이름</p>
                    </div>`);

             $('.all-check-issue').prop('checked', true);

        });
        checkNum--;
    };


    $(document).on('click', '.add-cla-btn', function() {
        addDvdCom();
    });

    $(document).on('click', '.dvd-component', function() {
        clickDvd(this);
    });

    //현재 active되어 있는 요소로 새로고침
    $(document).on('click', '.reload-btn', function() {
        let target = '.dvd-component.dvd-component-active';
        clickDvd(target);
    });

    $(document).on('click', '.all-add-check', function() {
        allAddCheck(this);
        addStuComponent();
    });

    $(document).on('click', '.part-add-check', function() {
        partAddCheck(this);
        addStuComponent();
    });






})();