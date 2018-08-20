$(document).ready(function () {
    if ($(window).width() > 1150) {
        desktopInit();
    } else {
        mobileInit();
    }
});

$(window).resize(function () {
    console.log($(window).width())
    if ($(window).width() > 1150) {
        $(".column_general").show()
        $(".column_infos").show()
        $(".column_general_mobile").hide()
        ajustGeneralDesktop();
        ajustParcoursDesktop();
    } else {
        $(".column_general").hide()
        $(".column_infos").hide()
        $(".column_general_mobile").show()
        $(".ma_photo_mobile").show()
        $(".column_a_propos_mobile").show()
        $(".column_parcours_mobile").show()
        $("#text_mobile").text("Dorian AMCHI")
        ajustGeneralMobile();
        ajustParcoursMobile();
    }

});

function desktopInit() {
    $("#scene").height($(window).height() - $(".stage_banner").height())
    $(".column_general").show()
    $(".column_infos").show()
    var timeOut = setTimeout(function () {
        if (timeOut) {
            animatedText('desktop');
            clearTimeout(timeOut);
        }
    }, 500);
    var timeOut1 = setTimeout(function () {
        if (timeOut1) {
            $('.ma_photo').transition('fly right');
            clearTimeout(timeOut1);
        }
    }, 2000);
    var timeOut2 = setTimeout(function () {
        if (timeOut2) {
            $('.about_a_propos').transition('fly left');
            clearTimeout(timeOut2);
        }
    }, 3000);
    var timeOut3 = setTimeout(function () {
        if (timeOut3) {
            $('.about_parcours').transition('fly left');
            clearTimeout(timeOut3);
        }
    }, 3000);
    ajustGeneralDesktop();
    ajustParcoursDesktop();
    return 1
}

function ajustGeneralDesktop() {
    var aboutW = $(".column_general").width();
    var photoW = $(".ma_photo").width();
    var textW = $(".about_text").width();
    $(".console-container").css({left: aboutW / 2 - textW / 2, top: 150});
    $(".ma_photo").css({left: aboutW / 2 - photoW / 2, top: 150});
    return 1;
}

function ajustParcoursDesktop() {
    var winW = $(window).height();
    var columnW = $(".column_infos").width();
    var columnH = $(".column_infos").height();
    $(".about_a_propos").width(columnW * .80);
    $(".about_parcours").width(columnW * .80);
    $(".about_a_propos").css({left: columnW * .05, top: winW * .05});
    $(".about_parcours").css({left: columnW * .05, top: winW * .05});
    return 1
}

function mobileInit() {
    $(".column_general").hide()
    $(".column_infos").hide()
    $(".column_general_mobile").show()
    var timeOut = setTimeout(function () {
        if (timeOut) {
            animatedText('mobile');
            clearTimeout(timeOut);
        }
    }, 500);
    var timeOut1 = setTimeout(function () {
        if (timeOut1) {
            $('.ma_photo_mobile').transition('fly up');
            clearTimeout(timeOut1);
        }
    }, 2000);
    var timeOut2 = setTimeout(function () {
        if (timeOut2) {
            $('.column_a_propos_mobile').transition('fly up');
            clearTimeout(timeOut2);
        }
    }, 3000);
    var timeOut3 = setTimeout(function () {
        if (timeOut3) {
            $('.column_parcours_mobile').transition('fly up');
            clearTimeout(timeOut3);
        }
    }, 3000);
    // ajustGeneral();
    // ajustParcours();
    return 1
}

function ajustGeneralMobile() {

}


function ajustParcoursMobile() {

}

function animatedText(screen) {
    if(screen == "desktop"){
        consoleText(['Dorian AMCHI'], 'text', ['rgba(0, 255, 219, 0.97)']);
    }else if(screen == "mobile"){
        consoleText(['Dorian AMCHI'], 'text_mobile', ['rgba(0, 255, 219, 0.97)']);
    }

    function consoleText(words, id, colors) {
        if (colors === undefined) colors = ['black'];
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id)
        target.setAttribute('style', 'color:' + colors[0])
        window.setInterval(function () {

            if (letterCount === 0 && waiting === false) {
                waiting = true;
                target.innerHTML = words[0].substring(0, letterCount)
                window.setTimeout(function () {
                    var usedColor = colors.shift();
                    colors.push(usedColor);
                    var usedWord = words.shift();
                    words.push(usedWord);
                    x = 1;
                    target.setAttribute('style', 'color:' + colors[0])
                    letterCount += x;
                    waiting = false;
                }, 1000)
            } else if (waiting === false) {
                target.innerHTML = words[0].substring(0, letterCount)
                letterCount += x;
            }
        }, 120)
    }
}
