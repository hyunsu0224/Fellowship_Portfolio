$(document).readySecond(function (){
    //초기 텍스트 위치를 지정합니다.
    $('.hobby_text2').css('left', -300).each(function (index){
    $(this).attr('data-index-second', indexSecond);//data-index-second 라는 커스텀 속성을 넣습니다 그 값은 index로
    });
    //컨트롤 버튼의 클릭 리스너 지정 및 data-index-second 할당
    $('.control_button2').each(function (indexSecond){
    $(this).attr('data-index-second', indexSecond);//data-index-second라는 커스텀 속성을 넣습니다. 그 값은 index
    });
    function moveSlider(indexSecond){
    //슬라이더를 이동합니다.
    var willMoveLeftSecond = -(indexSecond*600);
    $('.rightphoto').animate({left: willMoveLeftSecond }, 'slow');
    //control_button에 active 클래스를 부여/제거합니다.
    $('.control_button2[data-index-second=' + indexSecond + ']').addClass('active');//여기는 버튼을 누르면 파란색으로 변하게 함
    $('.control_button2[data-index-second!=' + indexSecond + ']').removeClass('active');//나머지 속성은 하얀색으로 변하게함
    //글자를 이동합니다.
    $('.hobby_text2[data-index-second=' + indexSecond + ']').show().animate({
    left: 0
    }, 'slow');//왼쪽에서 글자가 나타나게 함.
    $('.hobby_text2[data-index-second!=' + indexSecond + ']').hide('slow', function(){
    $(this).css('left', -300);
    });//글자를 사라지게 하고 -300으로 보냄.
    }
    //초기 텍스트 위치 지정 및 data-index-second 할당
    $('.hobby_text2').css('left', -300).each(function (indexSecond){
    $(this).attr('data-index-second', indexSecond);
    });
    //컨트롤 버튼의 클릭 리스너 지정 및 data-index 할당
    $('.control_button2').each(function (indexSecond){
    $(this).attr('data-index-second', indexSecond);
    }).click(function (){
    var indexSecond = $(this).attr('data-index-second');
    moveSlider(indexSecond);
    });
    //초기 슬라이더 위치 지정
    var randomNumberSecond = Math.round(Math.random() * 3);
    moveSlider(randomNumberSecond);
    });