// before we can use our site, astro needs to crunch the files down into normal HTML
// this is called "building" the site

// this file essentially just tells astro how we'd like to do that
// you likely won't have to edit this much but in case you're interested:
// https://docs.astro.build/en/guides/configuring-astro/

import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";

export default defineConfig({
    markdown: {
        // sätteri is a markdown processor
        // astro uses this to translate markdown files into HTML
        processor: satteri({
            features: {
                // this lets us add css classes and shit from inside the markdown
                // we don't *need* this, but i thought having the style interweaved with
                // the content might make things clearer
                attributes: true,

                // replace some characters with their "smart" counterparts
                // enabled by default, but i just thought i'd show you that this is
                // something you can configure
                // smartPunctuation: true/false works too
                smartPunctuation: {
                    quotes: true, // e.g. "" -> “” and  ' -> ’
                    dashes: true, // e.g. --  -> —
                    ellipsis: true, // ... -> …
                },
            },
        }),
    },
});
