# ETHZ - Lausanne Cathedral Slideshow

## The Project

This project is a slideshow application for ETHZ, showcasing various aspects of cathedral architecture, material and related topics.

The specific technologies used in this project are:

- [TypeScript](https://www.typescriptlang.org/): A popular programming language that compiles to plain JavaScript which can be understood by browsers.
- [React.js](https://react.dev/): A JavaScript library for building user interfaces.
- [Next.js](https://nextjs.org/): A React.js framework that implements common necessities like routing, image-optimisation and compiling the application into static files.

## How to's

### Getting set up for development with Github codespaces

The easiest way to get started without having to install anything is to use [Github Codespaces](https://docs.github.com/en/codespaces), which will set up a development environment online and give you a professional code-editor right in the browser.

To start, create a new [branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) to work on. This lets you test and validate your changes before merging them into the `main` branch from where they are compiled and deployed. This is good practice to avoid breaking `main` with unfinished code.

Click on the branch selector in the top left corner and type the name of your new branch. If that branch doesn't exist yet, it will give you the option to create it:

![creating a branch](docs/creating-a-branch.png)

Once you have the desired branch created and selected, expand the green "<> Code" button and click "Create codespace on <your branch's name>" (if you have a codespace already, it will be available in a list):

![creating a codespace](docs/creating-a-codespace.png)

You will then be redirected to the codespace editor, a fully functional IDE (integrated development environment) running in the browser:

![the editor](docs/the-codespace-ide.png)

The highlighted area is the `Terminal` panel where you can run commands. After the startup stuff is done, enter

`yarn`

which will install all the dependencies needed to run the application, and then

`yarn dev`

which will start the development server:

![running the development server](docs/yarn-dev.png)

Finally, hold down the `cmd` or `ctrl` key and click on the line reading

`http://localhost:3000`

which will open a new tab with the application running in it.

#### Making changes and publishing them

You can now edit code in the `src` directory. The application will automatically reload as you save your changes.

To [`commit`](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/about-commits) your changes, open the `Source Control` panel on the left:

![the source control tab](docs/the-source-control-tab.png)

Here you find all the changes you made to the code. _Stage_ the changes you want to commit by clicking the `+` icon next to the file name:

<img style="vertical-align: center; float: left;" src="docs/listing-changes.png" alt="listing changes" width="260">

<img style="margin-left: 1rem;" src="docs/staging-changes.png" alt="staging changes" width="260">

Finally, write a quick message describing the changes you made and click "Commit" to save them to your branch.

‼️ Watch out for the "Discard Changes" button. This will delete all uncommited the changes and cannot be undone ‼️

<img style="text-align: center;" src="docs/the-discard-button.png" alt="the Discard Button" style="width: 50%; left: 25%; position: relative;">

Once you're happy with your branch, click "Publish Branch" to make it available in the Github repository (so far they only exist in the _WorkSpace_):

<img src="docs/publish-branch.png" alt="publishing a branch" style="width: 50%; float: left; margin-right: 1rem;">

(If you've already published it, the button will say "Sync Changes")

‼️ Codespaces get deleted after a couple of weeks of inactivity, so make sure to commit and push/sync changes regularly ‼️

---

Now you can create a [Pull Request](https://docs.github.com/en/pull-requests) to merge your changes into the `main` branch so they get published.

Back in Github, click on the "Pull Requests" tab. There you should see your recently changed branch with an option to "Compare & pull request". You can also click on "New Pull Request", which will take you to a page where you can select the branch you want to merge.

![creating a pull request](docs/creating-a-pr.png)

Follow the instructions to create a pull request. You can add a title and description to explain what changes you made and why.

Once you're done, click "Create pull request". This will run some automated checks, (for example that the translation files have matching structures and are referenced correctly), and give collaborators the chance to review and discuss your changes through comments.

Finally, click "Merge pull request":

![merging a pull request](docs/pr-passed.png)

Merging a branch into `main`, or pushing changes directly to `main` will trigger a new build of the application, signified by an orange dot on the repositories main page:

![Building on the main branch](docs/building-main.png)

Once the dot turns into a green tick, the build is finished and the changes are live and available at

https://humancatfood.github.io/ethz-cathedral-slideshow/

![Building complete](docs/building-complete.png)

---

### Adding a new page

Create a new directory inside `src/app/[locale]` and add a file named `page.tsx` (The easiest way to get started is to copy an existing `page.tsx` file and modify it to your liking).

The file's location will determine the `URL`, or address of the page. For example, if you create the page as `src/app/[locale]/new-page/page.tsx`, the page will be accessible at `/en/new-page`. You need this later to link to it from another page or the navigation menu.

ℹ️ The `[locale]` part of the url is a placeholer (a so-called _dynamic segment_)which will be replaced by the actual locale (e.g. `en`, `fr`, etc.) when the app is running. This allows you to create pages that are available in multiple languages without having to duplicate the code for each language. ℹ️

Here is an example `page.tsx` file with a breakdown of what the code does:

![Example Page](docs/example-page.png)

The `layouts` are reusable components that define the structure and style of the page. Demos of the available layouts and their capabilities can be found here:

https://nbbosco.github.io/app-cathedral-750/components

---

### Adding a page to the navigation menu

To add your new page it to the navigation menu, open the file `src/navigation.ts` and place a new entry to the list returned by the `getNavMenu` function:

```tsx
export function getNavMenu({ pages }: Dictionary): NavMenuItem[] {
  return [
    ...other entries,
    {
      label: pages.myNewPage.title,
      path: '/new-page',
    }
  ]
}
```

You can also nest pages under other pages by adding them to the `subItems` field:

```tsx
export function getNavMenu({ pages }: Dictionary): NavMenuItem[] {
  return [
    {
      label: pages.somePage.title,
      path: '/some-page',
      subItems: [
        {
          label: pages.someOtherPage.title,
          path: '/some-other-page',
          subItems: [
            {
              label: pages.myNewPage.title,
              path: '/new-page',
            },
          ],
        },
      ],
    },
  ]
}
```

---

### How to change or add text

The text content of the application can be found in the `*.json` files under `./src/i18n` (e.g. `en.json` for English).

ℹ️ [JSON](https://www.json.org/json-en.html) is a popular file format for expressing structured data in key/value pairs. ℹ️

The nesting of the file determines the `path` at which the text is available in the `dictionary` that gets passed into the `makePage` and `getNavMenu` functions. Consider for example this `en.json` file:

```json
{
  "pages": {
    "start": {
      "title": ["The Cathedral", "of Lausanne"],
      "subtitle": "Center for Digital Information",
      "actions": {
        "website": "Cathedral Web Site",
        "birthday": "750th Birthday",
        "immersive": "The Immersive Cathedral"
      }
    }
  }
}
```

The label "Cathedral Web Site" can be accessed in the `page.tsx` file like so:

```tsx
export default makePage((dictionary) => {
  return (
    <TitlePageLayout
      title={dictionary.pages.start.title}
      subtitle={dictionary.pages.start.subtitle}
      links={[
        {
          label: dictionary.pages.start.actions.immersive,
          target: '/the-immersive-cathedral',
        },
      ]}
    />
  )
})
```

‼️ Make sure that all language files have the same key-structure. If a key is missing or spelled inconsistently, you will see an error in the code:

<img src="docs/language-file-inconsistency.png" alt="Inconsistent language file structure" width="auto" style="width: 50%;">

‼️

### Adding images

Keep images at most 1920 px wide (the width of the kiosk screen) and save photos as WebP or JPEG, not PNG. A full-screen photo should be well under 1 MB. The build stops with an error if the offline copy of the app gets bigger than 60 MB (`MAX_PRECACHE_MB` in `generate-precache.mjs`).

### How to change the app's metadata

The app's metadata is defined, and can be edited, in the `src/config.ts` file.

It decides what shows up in search-engine results, social media previews, and when installing the app on a device.

Here you can change the app's name, description, keywords, authors, creator, publisher, and the open graph image.

### How to change the app's icons

The app's icons are defined in the `public/icons` folder and the open graph image is defined in the `public/open-graph-image.png` file (The open graph image is used when sharing the app on social media, linkedin, twitter, etc.)

Override them as necessary, but ensure that the names stay the same.

A publicly available icon-generator like https://pwa-icon-generator.vercel.app/ can be used to generate the icons.

### Kiosk mode

The app is made for the touch screen in the cathedral. The settings are at the top of `src/config.ts`:

- **Start screen:** every visitor starts at `/`, a screen with big Français / Deutsch / English buttons (`START_SCREEN_LANGUAGES` sets their order).
- **Idle reset:** if nobody touches the screen for `KIOSK_IDLE_TIMEOUT_SECONDS` (90 s), an "Are you still there?" countdown appears. After `KIOSK_IDLE_WARNING_SECONDS` more (15 s), the app goes back to the start screen. A playing video counts as activity.
- **No way out:** with `KIOSK_MODE = true`, the long-press menu, text selection, image dragging and double-tap zoom are turned off.
- **Cathedral website:** opens inside the app on the `/website` page (`CATHEDRAL_WEBSITE_URL`). It needs an internet connection. The embedded site (and any YouTube player) is sandboxed with `KIOSK_IFRAME_SANDBOX`, so it can't open new windows or navigate away from the app. Touches inside it can't be seen by the app, so pages with an embedded site or player wait `KIOSK_IFRAME_IDLE_TIMEOUT_SECONDS` (5 min) before the idle reset.

- **Offline and updates:** the whole app is stored on the kiosk for offline use. After a new version is published, the kiosk downloads it quietly in the background (it checks every 30 minutes) and switches to it the next time it returns to the start screen, so visitors are never interrupted.

On the kiosk computer itself, run the browser in kiosk (full-screen) mode, e.g. `chromium --kiosk --noerrdialogs --disable-pinch --autoplay-policy=no-user-gesture-required https://…`, so visitors can't reach the address bar. The autoplay flag lets the Immersive Cathedral videos start with sound in every case; without it they start muted when the page is opened without a touch first (e.g. after a reload).

## TODOs:

- [✓] setup PWA caching
- [ ] make centered quiz layout and change Oldest Stone Game to use it
- [ ] make dynamic titles

### Missing pages

The buttons for these pages have been removed so visitors don't hit a dead end. Add the button back when the page exists.

- [ ] **Biological Attack**: fourth weathering mechanism. Button goes on `src/app/[locale]/weathering-mechanisms/page.tsx`; the label already exists in the translations (`pages.weatheringMechanisms.actions.biologicalAttack`)
- [ ] **Third Water Management topic**: was shown as a "..." placeholder on `src/app/[locale]/water-managment/page.tsx`
- [ ] **Video test quiz** (`/video-test`): button goes on `src/app/[locale]/degradation-types/page.tsx`; the label already exists in the translations (`pages.videoTest.subtitle`)
