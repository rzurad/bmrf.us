# Notes
- All of the social media links and buttons work (except the ones in the footer). The links at the bottom of the article should actually embed and share the page on facebook, twitter, and g+. The facebook and twitter icons in the author byline take you to the Black Mesa facebook and twitter pages.
- All images are either in the public domain or we have permission to use, with the exception of the ham radio image, which was jacked from an ebay (possibly craigslist LA) listing
- The morse code egg is disabled in Internet Explorer. It knows what it did.




# Easter Eggs
- Clicking on any of the Local Desert Singles ad links takes you to localdesertsingles.com, which has its own share of easter eggs:
  - "Don't click strange links" message in HTML source
  - F12 console logs an ANSI image of the Nihilanth, and the prints out "Alone...aren't you alone...", followed by "...aren't you alone..." repeated every 2 seconds.

- Clicking on the "Contact Us" link in the footer takes you to http://steampowered.com
- Hit F12 and open the console and you'll see an ANSI G-Man image
- Clicking most of the links gives you a "no internet connection" error message

- Click on the upper left button on the Ham Radio ad turns on the Ham Radio and you start hearing a morse code message
  - The message is always playing from the start of the page load, it's just muted. So when someone turns on the ham radio, they will most likely start hearing the morse code mid-message, and they'll have to wait the 10 seconds for the repeat to start
  - To draw attention to this, the HTML5 source has a comment above the ham radio div container that says <!-- Get away from there, Freeman! I'm expecting an important message --> Also the radio ad is the only add that is not a link, so its description text does not appear bold like the rest of the ads (and clicking on it does not trigger the "no internet connection" error.
  - Message reads: <SOS> <SOS> <SOS> DE AI5BM AI5BM AI5BM BLACK MESA RESEARCH FACILITY BIODOME LABS. TRAPPED, NEED RESCUE. EVAC ZONE NOT SAFE. MILITARY HOSTILE <AR> K
    - "DE" is shorthand for "from"
    - "AI5BM" is the imaginary Ham Radio callsign assigned to the scientist giving the message. It is a valid FCC callsign, however it is not currently assigned to anyone. The callsign structure says this about the scientist who has it: "AI" means they are Group A Amateur Extra Class (highest level of license class there is) and "5" means they are in District 5 (which includes the state of New Mexico). The "BM" are suffix letters and are either assigned based on availability or can be assigned as the "vanity" part of the callsign.
    - Specifies location os Biodome labs. I thought of one of the three scientists who are trapped behind the surgical machine could be sending this.
    - "<AR>" means "End of message"
    - "K" means "Reply, anyone"
  - Message repeats after 10 seconds of silence
  - Since our operator is Amateur Extra Class, the speed of the morse is a steady 22 words-per-minute, which is just slightly above the required 20 words-per-minute the Amateur Extra Class exam required.

- All of the asset names are base64 encoded strings of Scientist dialogue:
  - Fat lot of good that Ph.D does me now
  - I've been waiting here for ages, hoping someone would come along!
  - If you let us all die, Freeman, you'll never get out of here.
  - Get us out of here before those military drones find out where we're hiding
  - The alien species can't possibly all be hostile, can they?
  - It's not our fault.
  - I never thought I'd see a Resonance Cascade, let alone create one.
  - I suspected this would happen, but the administrator just would not listen.
  - If you intend to go on, then, I beg of you, proceed with extreme caution.
  - It can't get any worse than this.
  - Their idea of containment is to kill everyone associated with the project.
  - It's Hell out there! It's completely under military control.
  - Why didn't they listen?
  - We tried to warn them
  - I can see you already know a great deal more than any one man is supposed to.
  - I never suspected such things could be...
  - The dimensional breach is definitely transmitting organic matter.
  - It appears the containment system has completely failed.
  - The science team has been tracking your progress with the Black Mesa security system. Unfortunately, so is the military.


TODO: In order to make it as hard as possible to decipher the morse code message without actually listening to it, it is played programmatically--there is no audio file to download, so it won't show up in the network inspector. The JavaScript code the plays the morse message is heavily obfuscated with odd programming logic that would make my college profressors vomit, which is then run through three additional automatic obfuscators
