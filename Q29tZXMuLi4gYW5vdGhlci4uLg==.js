$.hit = function (e, coords) {
    var $target = $(e.target),
        x = e.offsetX,
        y = e.offsetY;

    if (x === void 0) {
        x = e.pageX - $target.offset().left;
        y = e.pageY - $target.offset().top;
    }

    if (x >= coords.left && x <= coords.right && y >= coords.top && y <= coords.bottom) {
        return true;
    }

    return false;
};

(function () {
    "use strict";

    var t = this,
        AudioContext = t['AudioContext'] || t['webkitAudioContext'];

    if (AudioContext === void 0) {
        return;
    }

    var isOn = false,
        $radio = $('img[src="./02/SWYgeW91IGludGVuZCB0byBnbyBvbiwgdGhlbiwgSSBiZWcgb2YgeW91LCBwcm9jZWVkIHdpdGggZXh0cmVtZSBjYXV0aW9uLg=="]'),

        context = new AudioContext(),
        gain = context.createGain(),
        fuzz = new Audio('./MP/RGllLi4ueW91IGFsbCBkaWUuLi55b3UgYWxsIGRpZS4uLg=='),
        dot = 52,
        chars = [[' ', '.'], ['/', '-']],
        times = { '.': dot, '-': dot * 3, ' ': dot * 3, '/': dot * 7 },

        code = '64ab95eca3a4c9d56841ec8f55c641f4a2a16924c08ca862584605736908c0aca8e296ac07f1e70ec28aecc05c882d537ecc085e624b096bc05af17d260ca42c51e96282ee60c0ad0c762767c2868a1acf82490585c0ce085e62c62505ab719e6624e295d2b4c29d50f72a3eb6624d2b4ac04a80ebc5e71508b60c926b9e0efbc0c0b44055e8593da2e2e07ca38942828ec0ba562ceb242af498d1a24a4f0cb0f65a39de809b70fa0a39e2bfd091c8e0a7288da08067adad39d26a0cf6e048072a92ab40bc773e44425b7248c0d2ec2c74c2e1e5af435eb131133131333333333333331313313',

        img = new Image();

    img.src = './02/SSBuZXZlciBzdXNwZWN0ZWQgc3VjaCB0aGluZ3MgY291bGQgYmUuLi4=';

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
            num = parseInt(code.charAt(i), 16),
            even = num % 2,
            one = +(num >= 4),
            c = chars[even][one],
            isStarted = false,
            time = times[c];

        oscillator.frequency.value = 700;
        oscillator.connect(gain);

        setTimeout(function () {
            if (isOn && c !== ' ' && c !== '/') {
                oscillator.start(0);
                isStarted = true;
            }

            setTimeout(function () {
                if (isStarted && c !== ' ' && c !== '/') {
                    oscillator.stop(0);
                }

                step(i + 1);
            }, time);
        }, dot);
    }(0));

    function toggleRadio() {
        isOn = !isOn;
        fuzz.volume = isOn ? 0.05 : 0;
        $radio.attr('src', isOn ? './02/SSBuZXZlciBzdXNwZWN0ZWQgc3VjaCB0aGluZ3MgY291bGQgYmUuLi4=' : './02/SWYgeW91IGludGVuZCB0byBnbyBvbiwgdGhlbiwgSSBiZWcgb2YgeW91LCBwcm9jZWVkIHdpdGggZXh0cmVtZSBjYXV0aW9uLg==');
    }

    $radio.on('click', function (e) {
        if ($.hit(e, { left: 158, right: 168, top: 74, bottom: 83 })) {
            toggleRadio();
        }
    });
}.call(this));

(function () {
    "use strict";

    function hideError() {
        $('.alert').removeClass('alert-visible');
    }

    var debounced = $.debounce(3000, false, hideError);

    function showError(html) {
        $('.alert').addClass('alert-visible');
        $('.alert').html(html);
        debounced();
    }

    $('a:not(.allow)').on('click', function (e) {
        e.preventDefault();
        showError('Error while loading link: <strong>No internet connection.</strong>');
    });

    $('#footer img').on('click', function (e) {
        if ($.hit(e, { top: 126, bottom: 141, right: 124, left: 58 })) {
            window.open('http://steampowered.com');
        }
    });
}.call(this));

console.log('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████▒▒▒▒▒▒▒▒▒░░░░░░░░░▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▒▒▒▒▒▒▒▒░░░░░░``   \'░░▒▒█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▒▒▒▒▒░░░░░!:`        ░░▒█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███▒▒▒▒▒░░░░!.          :░▒█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▒▒▒▒░░░``:.     . .!^.░▒█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▒▒▒▒▒░░░ `,::,..... ,;░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████▒▒▒▒╗░░░░░║░░░░g▄████▄░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▄▒║▒▒███▓▓▓▓▓▓▒▒╣▒▓▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▀▓▓▓▓▌░▒▓▓▓▓▓▀▀▒█▓╝░▐█▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓██▓█▓▓▓▌ ▒▒▒▒████▒▒░  ▐▒█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒▒▒▒▒▒▒▓▓▓▌ ░░`░Ñ▒▒░░`   ▐▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒▒▒▒▒Ñ╢█▓▓▌ .░░.        .╢╣▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒░`  ▒▓▓▓▌ /░░░       /▒░▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒║y█▓▓▓▓▒░░░@░░   .ÿ▒▒▒▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒█▓▓▓▒▒▒▒▒░  ░  ░▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒██▒▒▒▒▒▒░`    ░,░▒░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒█▓▓█▒▒▒╢░.,..╓╔░░▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▓▓▓▓██▀▒▒Ñ▀▀▒▒▒▒░▒▒█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓███▌▒▌▒▒▒░░░▒░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒█▒▒▒▒▒Ñ²░░░░╙ `░▒█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒▒▒▒▒    : .,║▒▒█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒▒▒▒@@@@φ╣▒▒█▒▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒░░░░░░▒▒▀` ▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒▒░▀▓█▒▒▒▒▒▒▒▒▒▒Ñ╝    █▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒▒░░```╙ÑÑ╝``       )▓▓▓▓▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒░`.   g▄          █▓▓▓█▓▓███▓▓▓██▓▓▓█▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒░    █▓▓▌       x▒█▓▓▓▓██▓▓█▓▓█▓██▓▓▓███▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓█▒╣. ¿█▓▓▓██     ≤╜▐▓▓▓█▓███████▓▓▓█████████\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒█▒▒:╓▓▓▓▓▓▓▓█   ]Ñ ▐▓▓█████▓██████▓█████████\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒▒▒╣▒▒▓▓▓▓▓▓▀▌  ╙  ▐▓▓▓█████████████████████\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░▌▒▒▒▓▓▓▓▓█ ╩M░  .▐▓███████████████████████\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒░░╣▒▒▓▓▓▓▓▓      ,▒▓███████████████████████');
