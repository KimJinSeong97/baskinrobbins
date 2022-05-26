// nav 펼치는 스크립트
$(function () {
    $('.menu>li').mouseover(function () {
        $('.sub_menu').stop().slideDown();
    }).mouseout(function () {
        $('.sub_menu').stop().slideUp();
    });

// monthly best 슬라이드
$('.prev').click(function () {
    $('.flavors li:last').prependTo('.flavors');
    $('.flavors').css('margin-left', -400);
    $('.flavors').stop().animate({ marginLeft: 0 }, 800)
});

$('.next').click(function () {
    $('.flavors').stop().animate({ marginLeft: -400 }, 800, function () {
        $('.flavors li:first').appendTo('.flavors');
        $('.flavors').css({ marginLeft: 0 });
    });
});

// rating 슬라이드
$('.prev2').click(function () {
    $('#rating_box li:last').prependTo('#rating_box');
    $('#rating_box').css('margin-left', -600);
    $('#rating_box').stop().animate({ marginLeft: 0 }, 800);
});

$('.next2').click(function () {
    $('#rating_box').stop().animate({ marginLeft: -600 }, 800, function () {
        $('#rating_box li:first').appendTo('#rating_box');
        $('#rating_box').css({ marginLeft: 0 });
    });
});

});