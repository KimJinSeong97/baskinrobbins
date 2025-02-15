// 1200미만으로 사이즈 줄때 nav 반응
$(function () {
    $("#burger").click(function () {
        $(".menu").slideToggle();
    });

    MediaSize1();
    MediaSize2();
    MediaSize3();

});

$(function () {
    if (window.innerWidth < 1200) {
        $(".menu").hide();
    } else if (window.innerWidth > 1199) {
        $(".menu").show();
    }
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

// monthly best 슬라이드
function MediaSize2() {
    if (window.matchMedia("(max-width:767px)").matches) {
        $('.prev').click(function () {
            $('.flavors li:last').prependTo('.flavors');
            $('.flavors').css('margin-left', "-83%");
            $('.flavors').stop().animate({ marginLeft: 0 }, 800)
        });

        $('.next').click(function () {
            $('.flavors').stop().animate({ marginLeft: "-83%" }, 800, function () {
                $('.flavors li:first').appendTo('.flavors');
                $('.flavors').css({ marginLeft: 0 });
            });
        });
    } else if (window.matchMedia("(min-width:768px) and (max-width:1199px)").matches) {
        $('.prev').click(function () {
            $('.flavors li:last').prependTo('.flavors');
            $('.flavors').css('margin-left', "-43%");
            $('.flavors').stop().animate({ marginLeft: 0 }, 800)
        });

        $('.next').click(function () {
            $('.flavors').stop().animate({ marginLeft: "-43%" }, 800, function () {
                $('.flavors li:first').appendTo('.flavors');
                $('.flavors').css({ marginLeft: 0 });
            });
        });
    } else if (window.matchMedia("(min-width:1200px)").matches) {
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
    };
};

// rating 슬라이드
function MediaSize3() {
    if (window.matchMedia("(min-width:1200px)").matches) {
        $('.prev2').click(function () {
            $('#rating_box li:last').prependTo('#rating_box');
            $('#rating_box').css('margin-left', "-50%");
            $('#rating_box').stop().animate({ marginLeft: 0 }, 800);
        });

        $('.next2').click(function () {
            $('#rating_box').stop().animate({ marginLeft: "-50%" }, 800, function () {
                $('#rating_box li:first').appendTo('#rating_box');
                $('#rating_box').css({ marginLeft: 0 });
            });
        });
    } else if (window.matchMedia("(min-width:768px) and (max-width:1199px)").matches) {
        $('.prev2').click(function () {
            $('#rating_box li:last').prependTo('#rating_box');
            $('#rating_box').css('margin-left', "-50%");
            $('#rating_box').stop().animate({ marginLeft: 0 }, 800);
        });

        $('.next2').click(function () {
            $('#rating_box').stop().animate({ marginLeft: "-50%" }, 800, function () {
                $('#rating_box li:first').appendTo('#rating_box');
                $('#rating_box').css({ marginLeft: 0 });
            });
        });
    } else {
        $('.prev2').click(function () {
            $('#rating_box li:last').prependTo('#rating_box');
            $('#rating_box').css('margin-left', "-100%");
            $('#rating_box').stop().animate({ marginLeft: 0 }, 800);
        });

        $('.next2').click(function () {
            $('#rating_box').stop().animate({ marginLeft: "-100%" }, 800, function () {
                $('#rating_box li:first').appendTo('#rating_box');
                $('#rating_box').css({ marginLeft: 0 });
            });
        });
    };
};

window.addEventListener('resize', MediaSize1, false);

window.addEventListener('resize', MediaSize2, false);

window.addEventListener('resize', MediaSize3, false);

