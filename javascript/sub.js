// nav 펼치는 스크립트
$(function () {
    $('.menu>li').mouseover(function () {
        $('.sub_menu').stop().slideDown();
    }).mouseout(function () {
        $('.sub_menu').stop().slideUp();
    });
});

// 이미지 클릭시 새창 나오는 스크립트
$(function () {
    $('#instagram img').click(function () {
        $('#open').css("display", "flex");
    });
    $('#exit').click(function () {
        $('#open').css("display", "none");
    });
});