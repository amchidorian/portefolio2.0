$(document).ready(function () {
    ajustContent()
    $('.home_text').show()
    $('.home_button').show()
    textAnimation()
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
    if (winW > 1000) {
        $(".home_resume").css({left: winW / 2 - homeW});
    } else {
        $(".home_resume").css({left: winW / 2 - homeW / 2});
    }
    return 1
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

//TEXT ANIMATION//
function textAnimation() {
    consoleText(['developpeur Full-Stack.'], 'text', ['rgba(0, 255, 219, 0.97)']);

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


