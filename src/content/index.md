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
        <img class="music-artwork" src="https://placehold.co/96x96" />
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

- [ ] last.fm thingy on the right of above the divider at the top
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
