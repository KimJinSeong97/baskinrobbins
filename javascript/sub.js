// 1200이상일 때 메뉴 보이게, 1200미만일 때 메뉴 숨기게
$(function () {
    if (window.innerWidth < 1200) {
        $(".menu").hide();
    } else if (window.innerWidth > 1199) {
        $(".menu").show();
    }
});

// 1200미만으로 사이즈 줄때 nav 반응
$(function () {
    $("#burger").click(function () {
        $(".menu").slideToggle();
    });
});

// nav 펼치는 스크립트
function MediaSize1() {
    if (window.matchMedia("(max-width: 767px)").matches) {
        $(function () {
            $('.menu>li').click(function () {
                $(this).find('.sub_menu').stop().slideToggle();
            });
        });
    } else if (window.matchMedia("(min-width: 768px) and (max-width: 1199px)").matches) {
        $(function () {
            $('.menu>li').mouseover(function () {
                $('.sub_menu').stop().slideDown();
            }).mouseout(function () {
                $('.sub_menu').stop().slideUp();
            });
        });
    } else if (window.matchMedia("(min-width: 1200px)").matches) {
        $(function () {
            $('.menu>li').mouseover(function () {
                $('.sub_menu').stop().slideDown();
            }).mouseout(function () {
                $('.sub_menu').stop().slideUp();
            });
        });
    }
};
MediaSize1();
window.addEventListener('resize', MediaSize1, false);

// 썸네일 클릭시 인스타 새창 나오는 스크립트
$(function () {
    $('#instagram img').eq(0).click(function () {
        $('#open1').css("display", "flex");
    });
    $('#instagram img').eq(1).click(function () {
        $('#open2').css("display", "flex");
    });
    $('#instagram img').eq(2).click(function () {
        $('#open3').css("display", "flex");
    });
    $('#instagram img').eq(3).click(function () {
        $('#open4').css("display", "flex");
    });
    $('#instagram img').eq(4).click(function () {
        $('#open5').css("display", "flex");
    });
    $('#instagram img').eq(5).click(function () {
        $('#open6').css("display", "flex");
    });
    $('#instagram img').eq(6).click(function () {
        $('#open7').css("display", "flex");
    });
    $('#instagram img').eq(7).click(function () {
        $('#open8').css("display", "flex");
    });
    $('#instagram img').eq(8).click(function () {
        $('#open9').css("display", "flex");
    });
    $('#instagram img').eq(9).click(function () {
        $('#open10').css("display", "flex");
    });
    $('#instagram img').eq(10).click(function () {
        $('#open11').css("display", "flex");
    });
    $('#instagram img').eq(11).click(function () {
        $('#open12').css("display", "flex");
    });
    $('#instagram img').eq(12).click(function () {
        $('#open13').css("display", "flex");
    });
    $('#instagram img').eq(13).click(function () {
        $('#open14').css("display", "flex");
    });
    $('#instagram img').eq(14).click(function () {
        $('#open15').css("display", "flex");
    });

    $('.exit').click(function () {
        $('#open1, #open2, #open3, #open4, #open5, #open6, #open7, #open8, #open9, #open10, #open11, #open12, #open13, #open14, #open15').css("display", "none");
    });
});
