// nav 펼치는 스크립트
$(function () {
    $('.menu>li').mouseover(function () {
        $('.sub_menu').stop().slideDown();
    }).mouseout(function () {
        $('.sub_menu').stop().slideUp();
    });

    // monthly best 슬라이드
    function MediaSize() {
        if (window.matchMedia("(min-width:1200px)").matches) {
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
        } else if (window.matchMedia("(min-width:768px) and (max-width:1199px)").matches) {
            $('.prev').click(function () {
                $('.flavors li:last').prependTo('.flavors');
                $('.flavors').css('margin-left', "-31.5%");
                $('.flavors').stop().animate({ marginLeft: 0 }, 800)
            });

            $('.next').click(function () {
                $('.flavors').stop().animate({ marginLeft: "-31.5%" }, 800, function () {
                    $('.flavors li:first').appendTo('.flavors');
                    $('.flavors').css({ marginLeft: 0 });
                });
            });
        }

    }

    function MediaSize2() {
        if (window.matchMedia("(min-width:1200px)").matches) {
            $('.prev2').click(function () {
                $('#rating_box li:last').prependTo('#rating_box');
                $('#rating_box').css('margin-left', "-50%");
                $('#rating_box').stop().animate({ marginLeft: 0 }, 800);
            });
        } else if (window.matchMedia("(min-width:768px) and (max-width:1199px)").matches) {
            $('.next2').click(function () {
                $('#rating_box').stop().animate({ marginLeft: "-50%" }, 800, function () {
                    $('#rating_box li:first').appendTo('#rating_box');
                    $('#rating_box').css({ marginLeft: 0 });
                });
            });
        }
    }


    window.addEventListener('resize', MediaSize, false);

    MediaSize();

    window.addEventListener('resize', MediaSize2, false);

    MediaSize2();

    // 1200미만으로 사이즈 줄때 nav 반응
    $(function(){
        $("#burger").click(function(){
            $(".menu").slideToggle();
        });
    });

    $(window).resize(function(){
        if(window.innerWidth<=1199){
            $(".menu").hide();
        } else if(window.innerWidth>=1200){
            $(".menu").show();
        }
    });

});

