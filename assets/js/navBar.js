$( document ).ready(function() {
    ajustNavBar()
    ajustContent()
});

$( window ).resize(function() {
    ajustNavBar()
    ajustContent()
});

function ajustNavBar(){
    var win = $( window ).height();
    var head = $(".head").height();
    var nav = $(".nav").height();
    var sociaux = $(".sociaux").height();
    var bottomSoc = -(win-head-nav) +sociaux
    var bottomNav = -((win-head-sociaux)/2)+nav/2
    console.log(win)
    $(".sociaux").css({bottom : bottomSoc});
    $(".nav").css({bottom : bottomNav});
}

function ajustContent(){
    var sidebarW = $(".sidebar").width();
    var winH = $( window ).height();
    var winW = $( window ).width();
    $('.content').width(winW - sidebarW);
    $(".content").css({left:sidebarW});
    $('.content').height(winH);
}