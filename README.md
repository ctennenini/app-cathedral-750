# ETHZ - Lausanne Cathedral Slideshow

## The Project

This project is a slideshow application for ETHZ, showcasing various aspects of cathedral architecture and related topics.

The application is built using web-development technologies, which are mature and well documented and allow leveraging the web browser already available on virtually any platform as a base.

The specific technologies used in this project are:

- [TypeScript](https://www.typescriptlang.org/): A popular programming language that compiles to plain JavaScript which can be understood by browsers.
- [React.js](https://react.dev/): A JavaScript library for building user interfaces.
- [Next.js](https://nextjs.org/): A React.js framework that takes care of a lot of ground-work like routing, image-optimisation and compiling the application into static files.

## How To's:

### Development Setup

There are three ways to get set up to make changes and additions to the application:

#### Locally:

To run the application locally, you will need to have two programs installed on your machine:

- [Git](https://git-scm.com/), a version control system that keeps track of changes in the code so they can be shared and rolled back if necessary.
- [Node.js](https://nodejs.org/), a runtime that allows you to run JavaScript code outside of a web browser. This is necessary to run the development server and build the application.

After installing these requirements

1. Clone the repository (make a local copy) to your computer by copying and pasting this command to your terminal:
   `git clone git@github.com:humancatfood/ethz-cathedral-slideshow.git`

2. Inside the newly created folder ("ethz-cathedral-slideshow") run `npm install` to install the dependencies

3. Run `npm run dev` to start the development server

4. Open `http://localhost:3000` in your browser to view the locally running application

If you now make changes to the code and save the files, the application will automatically reload in the browser to reflect the changes.

To save the changes back to the repository you need to

1. Add the changed files to the staging area by running `git add -A` (A stands for "add ALL changes" - you can also add individual files by specifying their names, e.g. `git add src/app/[locale]/page.tsx src/i18n/en.json ...`)
2. Commit the changes to the repository by running `git commit -m "A short description of the changes"`
3. Push the changes to the remote repository by running `git push`

When pushing changes to the repository, it will automatically attempt to build and deploy of the application.

### Adding a page

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

## Contributing

When contributing to the project, please follow these guidelines:

1. Create a new branch for your feature or bug fix.
2. Make your changes and ensure that the code is properly formatted.
3. Run the tests to ensure that everything is working correctly.
4. Submit a pull request with a clear description of your changes.

Thank you for contributing to the ETHZ - Cathedral Slideshow project!
\*/

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
