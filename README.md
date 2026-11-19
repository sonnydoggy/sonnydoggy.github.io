# sonnydoggy.github.io

## setup

in case you need to get the site running locally again

### prerequisites

before starting, ensure you have these installed:

- [git](https://git-scm.com/install)
- [github cli](https://cli.github.com/)
- [node.js](https://nodejs.org/en/)

check each by running `git -v` and `node -v`. you should get something like:

```
$ git -v
git version 2.56.1

$ gh --version
gh version 2.105.0 (2026-11-18)
https://github.com/cli/cli/releases/tag/v2.105.0

$ node -v
v26.13.1
```

if you get something like "command not found" then you will need to install it

then ensure you are authenticated with github cli by running `gh auth status`.
if you aren't, run `gh auth login` and follow its instructions, then run
`gh auth setup-git`

### instructions

1. `cd` into the folder where you want the local copy to live
2. run `git clone https://github.com/sonnydoggy/sonnydoggy.github.io.git`
3. open a terminal in the new folder (`./sonnydoggy.github.io/`)
4. run `npm ci` to install the project dependencies (astro, etc.)
    - if this fails (there's no `package-lock.json` file) try `npm i` instead

you should then be able to run:

- `npm run dev` to start a local dev server. this will automatically refresh
  every time you make a change
- `npm run build` to build the site into HTML, then `npm run preview` to preview
  the build. this will behave much more like the published site will

## making changes

friendly reminder: **before** you start making any changes on your local copy,
make sure that you've pulled in any new changes that i might have made. this
will help to prevent any merge conflicts like that ballache we had.

in the git panel (bottom right, zed will say "git panel" on hover), fetch if you
need to, and if there are any changes to pull, you'll see a little "pull" button
in the git panel. click that and you'll have an up-to-date copy to work with.

### merge conflicts

a merge conflict happens when we've both made changes to a file in a way that
overlaps. as long as you pull regularly, they shouldn't happen often at all, but
if you ever run into one, you'll need to choose how to resolve it.

zed makes this fairly simple. when you click a conflicting file in the git
panel, it'll show you what's called a "diff view". for every conflict, you'll be
asked how you want to deal with it -- keep my changes, keep your changes, or
manually resolve the conflict somehow.

as a rule of thumb i suggest keeping the changes i've made, then editing from
there. i'm not super certain about merge conflicts myself but if you ever run
into one and get stuck i can try to help.

### files

the main files you'll probably want to change are

- `src/content/index.md` - the page's content
- `src/pages/index.astro` - the page itself
- `astro.config.mjs` - astro configuration (you'll be editing this rarely, but i
  suggest taking a look)

`index.md` is just markdown, much like you're used to in obsidian, albeit with
fewer features. for the most part, it follows a standard of markdown called
[commonmark](https://commonmark.org/help/)

### notes

- use local images (files in the project) instead of urls where you can
    - astro will automatically optimise local images inside `src/`
    - i recommend putting them in `src/assets/` (you can create the folder if it
      doesn't exist), but they can go anywhere.
    - link to them in markdown like so:
      `![image description](../assets/image.png)

- if you want to change the css styling of the general document (colour palette,
  fonts, etc.), you can edit the `<style>` in `index.astro`

- if you want to add any css to parts of the content, do it inside the markdown
  file with a `<style></style>` tag.
    - if you'd prefer to put the styles in a separate file, i can help you do
      that instead. i think it might be cleaner for general styles anyway
