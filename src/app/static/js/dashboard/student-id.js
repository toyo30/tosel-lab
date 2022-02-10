(() => {


    /* --------------------- 학생관리 메뉴 변경('아이디 발급, 분반 관리, 학생 레벨 설정)------------------------------------------*/

    let stuId = ['아이디 발급', '*학부모 아이디는 학생 당 1개, 선생님 아이디는 선생님 당 1개씩 발급됩니다.'];
    let stuLevelText = ['학생 레벨 설정', '*설정하신대로 Digital Contents Level이 변경됩니다.'];
    let stuClassText = ['분반 관리', '*분반을 추가하면 자동으로 선생님 아이디가 발급됩니다.'];

    //아이디 발급페이지 fadein
    function stuChangeId() {
        $('.search-title').text(stuId[0]);
        $('.search-des').text(stuId[1]);
        $('.sele-btn-box').fadeIn();
        $('.select-area').fadeIn();
        $('.page-area:nth-child(1) .page-link').css('font-weight', 'normal');
        $('.page-area:nth-child(1) .page-link:nth-child(1)').css('font-weight', 'bold');
        $('#tog-btn').fadeOut(1);
        $('.tog-btn-lab').fadeOut(1);
        $('.student-level-container').fadeOut(1);
        $('.divide-class-container').fadeOut(1);
        $('.parent-id-container').fadeIn();
        $('.btn-bar').animate({left: '0'}, 10);
        $('.sele-btn.prt').css('color', '#37B2EE');
        $('.sele-btn.tcr').css('color', '#FFFFFF');

        //data-target들 변경해주기, searchText/ searcharea
    }

    //학생레벨 페이지 fadein
    function stuChangeLevel() {
        $('.page-area:nth-child(1) .page-link').css('font-weight', 'normal');
        $('.page-area:nth-child(1) .page-link:nth-child(2)').css('font-weight', 'bold');
        $('.search-title').text(stuLevelText[0]);
        $('.search-des').text(stuLevelText[1]);
        $('.sele-btn-box').fadeOut(1);
        $('.select-area').fadeIn();
        $('.tog-btn-lab').fadeIn();
        $('.divide-class-container').fadeOut(1);
        $('.parent-id-container').fadeOut(1);
        $('.student-level-container').fadeIn();
        $('.btn-bar').animate({left: '3.07rem'}, 10);
        $('.sele-btn.tcr').css('color', '#37B2EE');
        $('.sele-btn.prt').css('color', '#FFFFFF');

        //data-target들 변경해주기, searchText/ searcharea
    }

    //분반 관리 페이지 fadein
    function stuChangeClass() {
        $('.page-area:nth-child(1) .page-link').css('font-weight', 'normal');
        $('.page-area:nth-child(1) .page-link:nth-child(3)').css('font-weight', 'bold');
        $('.search-title').text(stuClassText[0]);
        $('.search-des').text(stuClassText[1]);
        $('.sele-btn-box').fadeIn();
        $('.select-area:nth-child(3)').fadeOut(1);
        $('#tog-btn').fadeOut(1);
        $('.tog-btn-lab').fadeOut(1);
        $('.student-level-container').fadeOut(1);
        $('.parent-id-container').fadeOut(1);
        $('.divide-class-container').fadeIn();
        $('.btn-bar').animate({left: '3.07rem'}, 10);
        $('.sele-btn.tcr').css('color', '#37B2EE');
        $('.sele-btn.prt').css('color', '#FFFFFF');

        //data-target들 변경해주기, searchText/ searcharea
    }


    //아이디 발급페이지 fadein
    $(document).on('click', '.page-area:nth-child(1) .page-link:nth-child(1)', function() {
        stuChangeId();
    });

    ////학생레벨 페이지 fadein
    $(document).on('click', '.page-area:nth-child(1) .page-link:nth-child(2)', function() {
        stuChangeLevel();
    });

    //분반 관리 페이지 fadein
    $(document).on('click', '.page-area:nth-child(1) .page-link:nth-child(3)', function() {
        stuChangeClass();
    });

    //아이디 발급페이지, 분반관리페이지 fadein 설정 .sele-btn 버튼을 눌렀을 때,
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

    //학부모 아이디 발급하기 버튼 클릭 -> 새로고침 로딩바 -> ajax전송 -> 선택된 요소들 제거
    function addLoading() {
        if($('.part-check-issue:checked').length > 0) {
            //ajax



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

            prtReload();
        }
    };


    // 체크박스 전체 선택
    function allCheck(target) {
        let checked = $(target).is(':checked');

        //all-check
        if(checked) {
            $(target).parents().eq(1).find('.part-check').prop('checked', true);
        } else if(!checked) {
            $(target).parents().eq(1).find('.part-check').prop('checked', false);
        }
    };

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
        //아이디가 발급되었습니다. 메세지 삭제
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
            let prtId = $(item).parent().find('.check-id').text();
            $('.prt-check-component-box').append(`
                 <div class="prt-component">
                     <div class="prt-check-component">
                        <div class="prt-check-id blind">${prtId}</div>
                         <button class="prt-remove"></button>
                         <p class="prt-all-name">${checkValue}</p>
                         <div class="check-issue-box">
                             <input class="part-check-issue check-issue" type="checkbox" checked>
                         </div>
                     </div>
                 </div>`);

             $('.all-check-issue').prop('checked', true);

        });

    };

    function prtReload(){
        $('.all-check').prop('checked', false);
        $('.part-check').prop('checked', false);
        $('.prt-check-component-box .prt-component').remove();
        $('.all-check-issue').prop('checked', true);

    };
    function prtRemove(target) {

        if(confirm("해당 학생을 목록에서 지우시겠습니까?")) {
            let prtId = $(target).parent().find('.prt-check-id').text();
            $(target).parent().parent().remove();

            $('.part-check:checked').each(function (idx, item) {
                if ($(item).parent().find('.check-id').text() == prtId) {
                    $(item).prop('checked', false);
                }
            });
        }
    };

    //remove btn 클릭 컴포턴트 제거
    $(document).on('click', '.prt-remove', function() {
       prtRemove(this);
    });

    $(document).on('click', '.prt-reload', function() {
        prtReload();
    });






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
            $(this).css('width', '11rem');
            $('.dvd-info-bar').fadeIn(400);
            $('.remove-check').fadeIn(400);
            $('.remove-answer').fadeIn(400);
            $('.member-btn').animate({width: '1.75rem'}, 500);
            $('.member-btn').css('display', 'flex');
            $('.remove-des').fadeOut(1);
        }

    });

    $(document).on('click', '.btn-remove', function() {
        if($('.check-com:checked').length > 0) {
            if ($(this).data('target') == 'yes') {
                //ajax 데이터 삭제
                //페이징 다시하기
                alert('학생 정보가 삭제되었습니다.');

                let checkAll = $('.check-com:checked');
                checkAll.each(function (idx, item) {
                    $('.check-com:checked').parents().eq(1).remove();

                });
            };

            if($(this).data('target') == 'no') {

            };

            $('.member-active').removeClass('member-active');
            $('.member-del').css('width', '1.75rem');
            $('.dvd-info-bar').fadeOut(1);
            $('.remove-check').fadeOut(1);
            $('.remove-answer').fadeOut(1);
            $('.member-btn').fadeOut(1);
            $('.remove-des').fadeIn();

        }else{
            if ($(this).data('target') == 'yes') {

                alert('학생을 선택해주세요.');

            };

            if($(this).data('target') == 'no') {
                $('.member-active').removeClass('member-active');
                $('.member-del').css('width', '1.75rem');
                $('.dvd-info-bar').fadeOut(1);
                $('.remove-check').fadeOut(1);
                $('.remove-answer').fadeOut(1);
                $('.member-btn').fadeOut(1);
                $('.remove-des').fadeIn();
            };
        };

    });

    //selecBox 클릭 시 화면 까메지고,
        $(document).on('click', '.student-level-box .selectBox', function() {
           if($(this).hasClass('active')) {
               $(this).css('z-index', '2');
               $('.popup-dimmed').fadeIn();
           } else if(!$(this).hasClass('active')) {
               setTimeout(() => {
                   $(this).css('z-index', '0');
                    $('.popup-dimmed').fadeOut();
               }, 100)

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


    //input 값이 바뀔 때마다 전송
    function changeValue() {
        alert('반명, 선생님명이 변경되었습니다.')
        let checkCla = $(this);
        //ajax
    }


    //clacomponent 색상 변경
    function changeComColor(target) {
        $(document).find('.dvd-component').not(target).removeClass('dvd-component-active');
        $(target).toggleClass('dvd-component-active');

    }



    //dvdcomponent를 클릭할 때 해당하는 데이터를 .cla-box 에 보여주기

    function clickDvd(target) {
         //.cla-component 전체삭제
        let curCom = $('.cla-component-active').wrapAll();
        // curCom.forEach(function(item) {
        //     console.log(item);
        // });


        $('.cla-component-box').find('.cla-component.prev').remove();

        //이름 변경
        let claBoxTitle = $(target).find('.cla-sect').text();
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
                <div class="cla-component prev">
                    <p class="stu-num">${idx}</p>
                    <p class="stu-name">${item}</p>
                    <div class="cla-check-box">            
                        <button class="remove-com" style="display:block"></button>
                    </div>
                    </div>
                `);
            });
        };

        $('.cla-component-box').prepend(curCom);
        removeClaMsg();

    };


    function allAddCheck(target) {
        let checked = $(this).is(':checked');

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
        //removeClaMsg();


        let checks = $('.part-add-check:checked');

        $('.cla-component.active').remove();

        checks.each(function (index, item){
            let checkValue = $(item).parent().find('.add-name').text();
            let checkId = $(item).parent().find('.add-id').text();

            $('.cla-component-box').prepend(`
                 <div class="cla-component active">
                    <button class="remove-active"></button>
                    <p class="stu-name">${checkValue}</p>
                    <div class="cla-check-box">
                        <input class="check-cla" type="checkbox" checked>
                    </div>
                    <div class="cla-com-id blind">${checkId}</div>
                </div>`);

        });
        calStuNum();
    };

     // cla-component-box에 "반을 선택해주세요" 메세지 판정/ ajax 처음 로딩 될때, 클릭 될때,
    function removeClaMsg() {
      if($('.cla-component').length > 0){
          $('.cla-id-issue').remove();
      } else if ($('.cla-component').length == 0 || $('.cla-component').length == null) {
          if($('.cla-id-issue').length == 0) {
              $('.cla-component-box').append('<button class="cla-id-issue">학생을 선택해주세요</button>');
          }
      }
    };

    function dvdComNonActive() {
        if($('.dvd-component-active').length == 0) {
            $('.cla-check-text').text('class');
            $('.cla-component').remove();
            removeClaMsg();
            checkReset();
        }
    };


    function calStuNum() {
        let stuNum = $('.cla-component').length - $('.cla-component.active').length;

        $('.stu-num').each(function(idx, item) {
            idx++;
            if(idx < 10) {
                idx = '0' + idx;
            };
            $(item).text(idx);
        });
    };

    //check reset
    function checkReset() {
        $('.all-add-check').prop('checked', false);
        $('.part-add-check').prop('checked', false);
        removeClaMsg();
    };

    function saveInfo(){


        //ajax 전송
        let target = '.dvd-component.dvd-component-active';
        let classNam = $('.dvd-component.dvd-component-active .cla-sect').text();
        if($(target).length != 0)  {
            alert(`${classNam}의 변경사항이 저장되었습니다.`);
            reloadActive(target);
        } else{
            alert(`분반을 선택하고, 학생을 추가해주세요.`);
        };
    };

    function delInfo(target) {
        if(confirm("해당 학생을 삭제하시겠습니까?")) {
            $(target).parents().eq(1).remove();
            calStuNum();
            removeClaMsg();
        }

    };

    function reloadActive(target) {
        if($(target).length != null || $(target).length != 0)  {
            clickDvd(target);
        };
        checkReset();
        removeComActive('.remove-active');
        removeClaMsg();
    };


    function removeComActive(target) {
        $(target).parent().remove();
        //해당 아이디를 다 가져와야겠다.
        let find = $('.part-add-check:checked').parent().find('.add-id');

        let txt = $(target).parent().find('.cla-com-id').text()

        find.each(function (index, item) {
           if(txt  == $(item).text()) {
               $(item).parents().eq(1).find('.part-add-check').prop('checked', false);
               $(item).parents().eq(3).find('.all-add-check').prop('checked', false);
           };
        });
    };

    //cla-component-box에 .add-cla-btn을 클릭하여 반 추가하기
    $(document).on('click', '.add-cla-btn', function() {
        addDvdCom();
    });

    //dvd-component를 클릭했을 때, 해당 데이터 보여주기
    $(document).on('click', '.dvd-component', function() {
        clickDvd(this);
        changeComColor(this);
        //addStuComponent(this);
        dvdComNonActive();
    });

    //현재 active되어 있는 요소로 새로고침
    $(document).on('click', '.reload-btn', function() {
        let target = '.dvd-component.dvd-component-active';
        reloadActive(target);
    });

    //전체체크박스클릭
    $(document).on('click', '.all-add-check', function() {
        $('.cla-id-issue').remove();
        allAddCheck(this);
        addStuComponent(this);
        dvdComNonActive();
    });

    //부분체크박스클릭
    $(document).on('click', '.part-add-check', function() {
        $('.cla-id-issue').remove();
        partAddCheck(this);
        addStuComponent(this);
        dvdComNonActive();
    });


    //값 입력될 때마다 ajax통신보내기
    $(document).on('change', '.cla-nam', function(e) {
       changeValue();
    });

    //값이 입력되는 거 클릭될 때, dvd-component 클릭되는 거 방지
    $(document).on('click', '.cla-text', function(e) {
        if($(this).parents().eq(1).hasClass('dvd-component-active')){
            e.stopPropagation();//부모요소 클릭되는 거 막기
        };

    });

    //변경된 값 저장하기
    $(document).on('click', '.save-info', function() {
        saveInfo();
    });


    $(document).on('click', '.remove-com', function() {
        delInfo(this);
    });


    $(document).on('click', '.remove-active', function() {
        removeComActive(this);
    });



})();