(function () {
    "use strict";

    var code = '...---.../...---.../...---.../-.. ./.- .. ..... -... --/.- .. ..... -... --/.- .. ..... -... --/-... .-.. .- -.-. -.-/-- . ... .-/.-. . ... . .- .-. -.-. ..../..-. .- -.-. .. .-.. .. - -.--/-... .. --- -.. --- -- ./.-.. .- -... ... .-.-.-/- .-. .- .--. .--. . -.. --..--/-. . . -../.-. . ... -.-. ..- . .-.-.-/. ...- .- -.-./--.. --- -. ./-. --- -/... .- ..-. . .-.-.-/-- .. .-.. .. - .- .-. -.--/.... --- ... - .. .-.. ./.-.-./-.-//////////////////////////////',
        converted = [],
        decoded = [];

    function randomFrom(a) {
        return a[~~(Math.random() * a.length)];
    }

    for (var i = 0; i < code.length; i++) {
        switch (code.charAt(i)) {
            case '.': converted.push(randomFrom(['4', '6', '8', 'a', 'c', 'e'])); break;
            case '-': converted.push(randomFrom(['5', '7', '9', 'b', 'd', 'f'])); break;
            case ' ': converted.push(randomFrom(['0', '2'])); break;
            case '/': converted.push(randomFrom(['1', '3'])); break;
            default:
                console.error('lolwat?');
        }
    }

    converted = converted.join('');
    console.log(converted);
    
    var chars = [[' ', '.'], ['/', '-']];

    for (i = 0; i < converted.length; i++) {
        var num = parseInt(converted.charAt(i), 16),
            even = num % 2,
            one = +(num >= 4);

        decoded.push(chars[even][one]);
    }

    decoded = decoded.join('');

    console.log(decoded === code);
}.call(this));
