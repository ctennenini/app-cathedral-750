# ETHZ - Lausanne Cathedral Slideshow

## The Project

This project is a slideshow application for ETHZ, showcasing various aspects of cathedral architecture and related topics.

The specific technologies used in this project are:

- [TypeScript](https://www.typescriptlang.org/): A popular programming language that compiles to plain JavaScript which can be understood by browsers.
- [React.js](https://react.dev/): A JavaScript library for building user interfaces.
- [Next.js](https://nextjs.org/): A React.js framework that takes care of a lot of ground-work like routing, image-optimisation and compiling the application into static files.

## How to ..

### .. get set up for development

The easiest way to get started without having to install anything is to use github codespaces, which will set up a development environment in the cloud and give you a professional code-editor right in the browser.

To start, create a new branch to work on. This lets you test your changes and then commit them all at once to the main branch where they are compiled and deployed. This is good practice to avoid breaking the main branch with unfinished code.

Click on the branch selector in the top left corner and type the name of your new branch. If that branch doesn't exist yet, it will give you the option to create it:

![creating a branch](docs/creating-a-branch.png)

Once you have the desired branch created and selected, expand the green "<> Code" button and select "Create codespace on <your branch's name>":

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

You can now start editing the code in the `src` directory. The application will automatically reload as you save your changes.

To commit your changes, open the `Source Control` panel on the left:

![the source control tab](docs/the-source-control-tab.png)

Here are all the changes you made to the code. _Stage_ the changes you want to commit by clicking the `+` icon next to the file name:

<img style="vertical-align: center; float: left;" src="docs/listing-changes.png" alt="listing changes" width="260">

<img style="margin-left: 1rem;" src="docs/staging-changes.png" alt="staging changes" width="260">

Finally, write a quick message describing the changes you made and click "Commit" to save them to your branch.

---

‼️ Watch out for the "Discard Changes" button. This will delete all uncommited the changes and cannot be undone ‼️

<img style="text-align: center;" src="docs/the-discard-button.png" alt="the Discard Button" style="width: 50%; left: 25%; position: relative;">

---

Once you're happy with your branch, click "Publish Branch" to make it available in Github. This will create a new branch in the repository with the same name as your local branch:

<img src="docs/publish-branch.png" alt="publishing a branch" style="width: 50%; left: 25%; position: relative;">

(If you've already published it, the button will say "Sync Changes")

Now you can create a pull request to merge your changes into the main branch so they get published.

Back in Github, click on the "Pull Requests" tab. There you should see your recently changed branch with an option to "Compare & pull request". You can also click on "New Pull Request", which will take you to a page where you can select the branch you want to merge into the main branch.

![creating a pull request](docs/pull-requests.png)

Follow the instructions to create a pull request. You can add a title and description to explain what changes you made and why they should be merged into the main branch.

Once you're done, click "Create pull request". This will run some automated checks, for example that the translation files have matching structures and are referenced correctly, and give collaborators the chance to review and discuss your changes before merging them into the main branch.

Finally, you can click "Merge pull request" to merge your changes into the main branch. This will automatically deploy the changes to the live application.

![merging a pull request](docs/pr-passed.png)

---

### .. add a page

To add a new page to the application:

1. Create a new directory for the page inside the `src/app/[locale]` directory and add a file named `page.tsx`
2. Choose a layout for the page and import it into the new file from the `@/layouts` directory
3. Fetch the necessary text content using the `getDictionary` function
4. Use the fetched text content to populate the layout component

For example, to create a new page using the `TitlePageLayout`, you would write the following code in the `page.tsx` file:

```tsx
import { TitlePageLayout } from '@/layouts/TitlePageLayout'
import { GlobalStaticPageProps } from '@/globals'
import bgImg from '@/assets/bg-images/dusk-wide-angel-blur-vignette.png'

export default async function MyNewPage({ params: { locale } }: GlobalStaticPageProps) {
  const { pages } = await getDictionary(locale)

  return <TitlePageLayout title={pages.newPage.title} subtitle={pages.newPage.subtitle} bgImg={bgImg} />
}
```

The file's path inside `src/app/[locale]` determines the new page's _address_, which you need to add the page to the navigation menu or linking to it from other pages.

For example, if you create a new page under `src/app/[locale]/new-page/page.tsx`, you would link to it from a different page like so:

```tsx
<TitlePageLayout
  {...other parameters}
  links={[
    {
      target: '/new-page',
      label: dictionary.pages.newPage.title,
    }
  ]}
/>
```

To add it to the navigation menu, open the file `src/navigation.ts` and place a new entry to the list returned by the `getNavMenu` function:

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

### How to change or add text

The text content of the application can be found in the `*.json` files under `./src/i18n`, with the name reflecting the language (e.g. `en.json` for English).

1. Locate the dictionary files in the `src/i18n` directory.
2. Open the file corresponding to the language you want to edit.
3. Make the necessary changes to the text within the JSON file.
4. Save the file and restart the application to see the changes.

## TODOs:

- [x] close nav-menu on navigation
- [x] prevent size twitching on load
- [x] change storybook to just be a test page to measure the text

  - [x] title page layout - title and subtitle
  - [x] text page layout - title, subtitle, text(s)

- [ ] finalise documentation
- [ ] setup PWA caching
- [ ] make centered quiz layout and change Oldest Stone Game to use it
- [ ] make dynamic titles
