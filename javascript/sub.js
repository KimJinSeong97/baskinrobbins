$(function () {
    $('.menu>li').mouseover(function () {
        $('.sub_menu').stop().slideDown();
    }).mouseout(function () {
        $('.sub_menu').stop().slideUp();
    });
});

var banner_left = 0;
var imgCnt = 0;
var first = 1;
var last;
var interval;
$(document).ready(function () {
    $('.slides a').each(function () {
        $(this).css('left', banner_left);
        banner_left += $(this).width() + 5; //위치값
        $(this).attr('id', 'content' + (++imgCnt));
    });
    last = imgCnt;
    rollingStart();
});

function rollingStart() {
    interval = setInterval(function () {
        $('.slides a').each(function () {
            $(this).css('left', $(this).position().left - 1);
        });
        var first_content = $('#content' + first);
        var last_content = $('#content' + last);
        if (first_content.position().left < '-' + $(first_content).width()) {
            first_content.css('left', last_content.position().left + last_content.width() + 5);
            first++;
            last++;
            if (last > imgCnt) {
                last = 1;
            }
            if (first > imgCnt) {
                first = 1;
            }
        }
    }, 10);
}