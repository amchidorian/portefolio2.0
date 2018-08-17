$(document).ready(function () {
    ajustContent()
});

$(window).resize(function () {
    ajustContent();
    resizeText();
});

function ajustContent() {
    var winH = $(window).height();
    var winW = $(window).width();
    var homeH = $(".home_text").height();
    var homeW = $(".home_text").width();
    $(".home_resume").css({top: winH / 2 - homeH});
    $(".home_resume").css({left: winW / 2 - homeW/2});
}

function resizeText() {
    var winW = $(window).width();
    if (winW > 1200) {
        $(".home_text").css({'font-size': 30})
    } else if (winW < 1200 && winW > 992) {
        $(".home_text").css({'font-size': 28})
    } else if (winW < 992 && winW > 768) {
        $(".home_text").css({'font-size': 26})
    } else if (winW < 768 && winW > 600) {
        $(".home_text").css({'font-size': 24})
    } else if (winW < 600) {
        $(".home_text").css({'font-size': 22})
    }
}

