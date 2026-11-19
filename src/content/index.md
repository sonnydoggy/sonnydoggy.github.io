---
# the page title, i.e. the name of the tab
title: sonnydoggy
---

<header class="page-header">
    <div class="profile">
        <img
            class="avatar"
            src="https://avatars.githubusercontent.com/u/113544671"
        />
        <div class="bio">
            <h1 class="profile-name">sonnydoggy</h1>
            <p class="profile-bio">
                pro/nouns anti/verbs or whatever you want to put here
            </p>
            <nav class="badges">
                <a href="https://sonnydoggy.bandcamp.com/">
                    <img src="/88x31/sonny doggy music.gif" />
                </a>
                <a href="https://sonnydoggy.bandcamp.com/">
                    <img src="/88x31/bandcamp.png" />
                </a>
                <a href="https://www.youtube.com/@isthmuscollective/">
                    <img src="/88x31/isthmus collective.gif" />
                </a>
                <a href="https://bsky.app/profile/sonnydoggy.bsky.social/">
                    <img src="/88x31/bluesky.gif" />
                </a>
                <a href="https://www.youtube.com/@sonnydog/">
                    <img src="/88x31/youtube.png" />
                </a>
            </nav>
        </div>
    </div>
    <div class="music-status">
        <div class="music-info">
            <p class="music-title">shit (radio edit)</p>
            <p class="music-artist">ass</p>
        </div>
        <img class="music-artwork" loading="lazy" src="/img/sonnyminion.png" />
    </div>
</header>

## the fitnessgram pacer test

is a multistage aerobic capacity test that progressively gets more difficult as
it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the
start.

The running speed starts slowly, but gets faster each minute after you hear this
signal. [Beep] A single lap should be completed each time you hear the beep
sound. The test ends when you miss your beep. The time you hear from the start
is your recorded time in the test.

### why do they call it oven

when you of in the cold food of out hot eat the food?

# TODO FOR THE ~~BITCH~~ very nice person that helps me with programming <3

- [x] last.fm thingy on the right of above the divider at the top
- [ ] actually make the content above somewhat better
- [ ] add another thing under this for projects and such
    - i think it would be nice to have squares, although the ratio is something
      that has to be lookied at
    - i think it would be cool to have like 3 or 4 next to each other could be
      cool

---

hello i am supposed to be the projects but my unpaid worker hasn't gotten here
yet

<style>
    .page-header {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid var(--base02);
    }
    
    .profile {
        display: flex;
        gap: 1rem;
    }

    .bio {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .profile-name, .profile-bio {
        margin: 0;
    }

    .badges {
        margin-block: 0.5rem;
    }
                
    .avatar {
        aspect-ratio: 1 / 1;
        height: 8rem;
    }

    .music-status {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .music-artwork {
        aspect-ratio: 1 / 1;
        height: 6rem;
        animation: fadeIn 10s linear;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .music-title, .music-artist {
        margin: 0;
        text-align: right;
    }

    /* links appear blue/purple by default and that's yucky. here's something nicer */
    a {
        color: var(--base0D); /* text colour. var(--base0D) comes from the style in index.astro */
        text-decoration: none; /* remove underline */
    }

    /* 
        the horizontal rule "---" since you asked how to change it 
        hr defaults to using all four border sides for styling, but it's easier to just use one
        each property is applied in sequence: reset the border, then set border-top on its own
    */
    hr {
        border: none;
        
        /* width, style, colour */
        /* https://www.w3schools.com/css/css_border.asp (ctrl+click) */
        border-top: 1px solid var(--base02);
    }
</style>

<script>
    const POLLING_INTERVAL_SEC = 30;
    
    const LFM_URL = "https://libre.fm/2.0/";
    const MB_URL = "https://musicbrainz.org/ws/2/release/";
    const CAA_URL = "https://coverartarchive.org/release/";

    const musicEl = document.querySelector(".music-status");
    const lfmParams = new URLSearchParams({
        method: "user.getRecentTracks",
        user: "sonnydoggy",
        format: "json",
        limit: "1",
    });
    const lfmUrl = `${LFM_URL}?${lfmParams.toString()}`;

    let errCount = {
        lfm: 0,
        mb: 0,
        caa: 0,
    };

    const updateMusic = async () => {
        if (errCount.lfm > 3 || errCount.mb > 3 || errCount.caa > 3) {
            setTimeout(updateMusic, 20_000);
            return;
        }
        
        const lfmResp = await fetch(lfmUrl);

        if (!lfmResp.ok) {
            errCount.lfm++;
            setTimeout(updateMusic, 1_000);
            return;
        }

        const data = await lfmResp.json();
        const track = data.recenttracks.track[0] || data.recenttracks.track;

        const mbidLookupParams = new URLSearchParams({
            query: `artist:${track.artist["#text"]} AND release:${track.album["#text"]}`,
            fmt: "json",
        });
        const mbidResp = await fetch(`${MB_URL}?${mbidLookupParams.toString()}`);

        if (!mbidResp.ok) {
            errCount.mb++;
            setTimeout(updateMusic, 1_000);
            return;
        }

        const mbid = (await mbidResp.json()).releases[0].id;
        
        const artworkResp = await fetch(`${CAA_URL}${mbid}`);

        if (!artworkResp.ok) {
            errCount.caa++;
            setTimeout(updateMusic, 1_000);
            return;
        }

        const artworkUrl =  (await artworkResp.json()).images[0].thumbnails.small;

        const titleEl = document.querySelector(".music-title");
        const artistEl = document.querySelector(".music-artist");
        const artworkEl = document.querySelector(".music-artwork");

        titleEl.textContent = track.name;
        artistEl.textContent = track.artist["#text"];
        
        artworkEl.src = artworkUrl;
        artworkEl.style.animation = "none";

        errCount = { lfm: 0, mb: 0, caa: 0 };
        setTimeout(updateMusic, POLLING_INTERVAL_SEC * 1_000);
    };

    void updateMusic();
</script>
