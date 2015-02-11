/*
Do you think we should appeal to the alien authorities?
Have you been able to get the beverage machine to work yet?
Wouldn't you like to get one of these blood samples under a microscope?
Big day today, Freeman.
It's about to go critical.
It wasn't meant to do this in the first place.
Bit of a gamble, but we need the extra resolution.
They're waiting for you Gordon, in the Test Chamber.
Gordon, are you not hearing me? Climb up and start the rotors, please!
I'm seeing predictable phase arrays
Standard insertion for a non-standard specimen
Uh, it's probably not a problem... probably...
What is he doing in there?
Shutting down
Attempting shutdown
it's not... it's not shutting down, it's...
I'm not so sure I want to go to the surface
Open the Silo Door! They're coming for us, it's our only way out!
Gordon Freeman, you've finally found us!
If you're willing, my colleague is waiting for you at the main portal controls.
Don't linger, Mr. Freeman!
My colleagues are waiting at the tip of the Lambda Reactor. Waiting for you, of course.
Do you still say there is nothing to chaos theory?
No! I don't want to die!
Now where did I leave that shutdown procedure chart?
Oh no!
With my brains and your brawn, we'd make an excellent team.
Freeman? Who would have thought you'd still be alive!
I certainly hope you know what you're doing
Well... I seem to be seriously wounded.
I hope you know what you're doing
I don't suppose you'd reconsider?!
The military cleanup is just a paranoid rumor, isn't it?
This is as far as I go.
Why do we all have to wear these rediculus ties?
My God! What are you doing!
I sincerely hope you know what you're doing.
I never thought I'd see a Resonance Cascade, let alone create one.
We tried to warn them
*/
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
        times = {
            '.': dot,
            '-': dot * 3,
            ' ': dot * 3,
            '/': dot * 7
        },

        code = '...---.../...---.../...---.../-.. ./.- .. ..... -... --/.- .. ..... -... --/.- .. ..... -... --/-... .-.. .- -.-. -.-/-- . ... .-/.-. . ... . .- .-. -.-. ..../..-. .- -.-. .. .-.. .. - -.--/-... .. --- -.. --- -- ./.-.. .- -... ... .-.-.-/- .-. .- .--. .--. . -.. --..--/-. . . -../.-. . ... -.-. ..- . .-.-.-/. ...- .- -.-./--.. --- -. ./-. --- -/... .- ..-. . .-.-.-/-- .. .-.. .. - .- .-. -.--/.... --- ... - .. .-.. ./.-.-./-.-//////////////////////////////',

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
            c = code.charAt(i),
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
        if (e.offsetX >= 158 && e.offsetX <= 168 && e.offsetY >=74 && e.offsetY <= 83) {
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

    $('#desert-singles a').on('click', function (e) {
        e.preventDefault();
        showError('<strong>You really shouldn\'t click on strange ad links.</strong> Not even for rocket launchers.')
    });

    $('a:not(.allow)').on('click', function (e) {
        e.preventDefault();
        showError('Error while loading link: <strong>No internet connection.</strong>');
    });

    $('#footer img').on('click', function (e) {
        if (e.offsetX >= 58 && e.offsetX <= 124 && e.offsetY >= 126 && e.offsetY <= 141) {
            window.open('http://steampowered.com');
        }
    });
}.call(this));

console.log('▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████▒▒▒▒▒▒▒▒▒░░░░░░░░░▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▒▒▒▒▒▒▒▒░░░░░░``   \'░░▒▒█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▒▒▒▒▒░░░░░!:`        ░░▒█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███▒▒▒▒▒░░░░!.          :░▒█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▒▒▒▒░░░``:.     . .!^.░▒█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▒▒▒▒▒░░░ `,::,..... ,;░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓████▒▒▒▒╗░░░░░║░░░░g▄████▄░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▄▒║▒▒███▓▓▓▓▓▓▒▒╣▒▓▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▀▓▓▓▓▌░▒▓▓▓▓▓▀▀▒█▓╝░▐█▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓██▓█▓▓▓▌ ▒▒▒▒████▒▒░  ▐▒█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒▒▒▒▒▒▒▓▓▓▌ ░░`░Ñ▒▒░░`   ▐▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒▒▒▒▒Ñ╢█▓▓▌ .░░.        .╢╣▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒░`  ▒▓▓▓▌ /░░░       /▒░▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒║y█▓▓▓▓▒░░░@░░   .ÿ▒▒▒▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒█▓▓▓▒▒▒▒▒░  ░  ░▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒██▒▒▒▒▒▒░`    ░,░▒░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒█▓▓█▒▒▒╢░.,..╓╔░░▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▓▓▓▓██▀▒▒Ñ▀▀▒▒▒▒░▒▒█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓▓███▌▒▌▒▒▒░░░▒░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒█▒▒▒▒▒Ñ²░░░░╙ `░▒█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒▒▒▒▒    : .,║▒▒█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒▒▒▒@@@@φ╣▒▒█▒▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒░░░░░░▒▒▀` ▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒▒░▀▓█▒▒▒▒▒▒▒▒▒▒Ñ╝    █▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒▒░░```╙ÑÑ╝``       )▓▓▓▓▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒░`.   g▄          █▓▓▓█▓▓███▓▓▓██▓▓▓█▓▓▓▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒░    █▓▓▌       x▒█▓▓▓▓██▓▓█▓▓█▓██▓▓▓███▓▓\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓█▒╣. ¿█▓▓▓██     ≤╜▐▓▓▓█▓███████▓▓▓█████████\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒█▒▒:╓▓▓▓▓▓▓▓█   ]Ñ ▐▓▓█████▓██████▓█████████\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒▒▒╣▒▒▓▓▓▓▓▓▀▌  ╙  ▐▓▓▓█████████████████████\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒░▌▒▒▒▓▓▓▓▓█ ╩M░  .▐▓███████████████████████\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒░░╣▒▒▓▓▓▓▓▓      ,▒▓███████████████████████');
