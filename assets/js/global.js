$(document).ready(function () {
    ajustBanner();
});

$(window).resize(function () {
    ajustBanner();
});


function ajustBanner(){
    var winW = $(window).width();
    var navW = $(".sidebar").width();
    $(".stage_banner").css({left:  navW});
    $(".stage_banner").width(winW - navW);
    $(".stage_banner").show();
}
$('.ui.accordion')
    .accordion()
;
$('.trigger.example .accordion')
    .accordion({
        selector: {
            trigger: '.title .icon'
        }
    })
;