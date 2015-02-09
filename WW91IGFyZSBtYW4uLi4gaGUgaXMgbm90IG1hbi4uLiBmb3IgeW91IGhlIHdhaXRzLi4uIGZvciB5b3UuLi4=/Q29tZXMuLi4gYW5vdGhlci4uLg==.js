(function () {
    "use strict";

    var isOn = false,
        $radio = $('img[src="./assets/radio.jpg"]'),

        context = new AudioContext(),
        gain = context.createGain(),
        fuzz = new Audio('./assets/RGllLi4ueW91IGFsbCBkaWUuLi55b3UgYWxsIGRpZS4uLg==.m4a'),
        dot = 40,
        times = {
            '.': dot,
            '-': dot * 3,
            ' ': dot * 3,
            '/': dot * 7
        },

        code = '...---... / ...---... / ...---... / -.. . / .- .. ..... -... -- / .- .. ..... -... -- / .- .. ..... -... -- / -... .-.. .- -.-. -.- / -- . ... .- / .-. . ... . .- .-. -.-. .... / ..-. .- -.-. .. .-.. .. - -.-- / -. -- / - .-. .- .--. .--. . -.. --..-- / -. . . -.. / .-. . ... -.-. ..- . .-.-.- / -- .. .-.. .. - .- .-. -.-- / .... --- ... - .. .-.. . / .-.-. / -.-',

        img = new Image();

    img.src = './assets/Rm9yZ2V0IGFib3V0IEZyZWVtYW4u.png';

    gain.connect(context.destination);
    gain.gain.value = 0.25;
    fuzz.volume = 0;
    fuzz.loop = true;
    fuzz.play();

    (function step(i) {
        if (i === code.length) {
            requestAnimationFrame(function () {
                step(0);
            });

            return;
        }

        var oscillator = context.createOscillator(),
            c = code.charAt(i),
            isStarted = false,
            time = times[c];

        oscillator.frequency.value = 700;
        oscillator.connect(gain);

        setTimeout(function () {
            if (isOn && c !== ' ' && c !== '/') {
                oscillator.start();
                isStarted = true;
            }

            setTimeout(function () {
                if (isStarted && c !== ' ' && c !== '/') {
                    oscillator.stop();
                }

                step(i + 1);
            }, time);
        }, dot);
    }(0));

    function toggleRadio() {
        isOn = !isOn;
        fuzz.volume = isOn ? 0.4 : 0;
        $radio.attr('src', isOn ? './assets/Rm9yZ2V0IGFib3V0IEZyZWVtYW4u.png' : './assets/radio.jpg');
    }

    $radio.on('click', function (e) {
        if (e.offsetX >= 158 &&e.offsetX <= 168 && e.offsetY >=75 && e.offsetY <= 83) {
            toggleRadio();
        }
    });
}.call(this));
