# Cinematography Portfolio Website statically generated using Next.js

A statically generated portfolio website built with Next.js, showcasing cinematography and photography through a custom expanding video gallery and a dynamic justified image gallery.

## Live Demo

Check the website's [live demo hosted on Vercel](https://theoribeiro.com/)

![Home Page](/screenshots/home.jpg 'Home Page')
![Expanded Video Element](/screenshots/expanded-gallery.jpg 'Expanded Video Element')
![Stills Lightbox](/screenshots/lightbox.jpg 'Stills Lightbox')
![Stills](/screenshots/stills.jpg 'Stills')

## Project Description

This a cinematography and stills photography portfolio website

- It has a custom made react expanding video gallery component that when clicked expands into a video details element with player and detailed information about the project. It was built from scratch in React inspired by the [Gridder Javascript plugin](https://github.com/orion3dgames/gridder-js)
- For the stills portfolio section, it has a justified image gallery that expands into a lightbox with image captions using the [React Photo Album](https://react-photo-album.com) library
- Fully optimized for performance scoring 100% in every Lighthouse metric on the home page / expanding video gallery
- The website is fully responsive, accessible, and fully optimized for SEO with meta tags, structured data, Opengraph images, sitemaps, etc

## Main Libraries and Features

This app uses the following libraries and features:

- Full type safety with [TypeScript](https://www.typescriptlang.org) and [Zod](https://zod.dev/)
- Static site generation using [Next.js 15](https://reactrouter.com/en/main) and [React 19](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Justified Image gallery using [React Photo Album](https://react-photo-album.com) and [Yet Another React Lightbox](https://yet-another-react-lightbox.com)
- Video player using [ReactPlayer](https://github.com/cookpete/react-player)
- Static Image optimization using [Next Export Optimize Images](https://next-export-optimize-images.vercel.app/) and [Sharp](https://sharp.pixelplumbing.com/)
- SEO sitemaps automatically generated with [next-sitemap](https://github.com/iamvishnusankar/next-sitemap#readme)
- Schema.org JSON-LD automatically generated with [react-schemaorg](https://github.com/google/react-schemaorg#readme) and [schema-dts](https://github.com/google/schema-dts)
- Icons using [lucide-react](https://lucide.dev/guide/packages/lucide-react)
- Testing using [React Testing Library](https://testing-library.com/) and [Vitest](https://vitest.dev/)
- Custom Keyboard shortcuts using [React Hotkeys Hook](https://react-hotkeys-hook.vercel.app/)
- Menu and buttons created with [shadcn/ui](https://ui.shadcn.com/)
- Better commits using [commitlint](https://commitlint.js.org/), [Commitizen](https://github.com/commitizen/cz-cli), [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/lint-staged/lint-staged#readme)
- Strict Content Security Policy (CSP)
- Fully accessible with [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) and [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/)

## Challenges

Next.js is not fully developed as a static site generator. As such there where quite a few challenges to overcome. There are feature shortcomings and bugs in Next.js implementation but they were all ironed out:

- Next/Image optimization does not work out of the box for static sites. This was solved using [Next Export Optimize Images](https://next-export-optimize-images.vercel.app/) and [Sharp](https://sharp.pixelplumbing.com/) libraries in conjunction to generate optimized images at build time
- Next.js has a great system to programmatically generate OpenGraph images but it doesn't work out of the box for static sites. This was solved by creating custom route files for every OpenGraph image in the project with [a hint I found while searching GitHub issues on the subject](https://github.com/vercel/next.js/issues/51147#issuecomment-1842197049)
- Creating the expanding video gallery from scratch was quite challenging and is still a work in progress. I wrote the code for the gallery to be quite extensible as I plan to release it as an NPM package in the future but as such, it took longer to figure out.
- I decided to create a more consistent Git Commit workflow and it took quite a lot of figuring out to get the settings right for using git hooks with [Husky](https://typicode.github.io/husky/) to trigger several actions before a commit such as linting, TypeScript checking, Prettier formatting with [lint-staged](https://github.com/lint-staged/lint-staged#readme) as well as formatting and linting the commit messages themselves using [commitlint](https://commitlint.js.org/) and [Commitizen](https://github.com/commitizen/cz-cli). I finally reached a great workflow and configuration for these that I am sure to use in other projects.
- Tests were written using [React Testing Library](https://testing-library.com/) and [Vitest](https://vitest.dev/) but it took a lot of figuring out in order to effectively mock Next.js Next/Image and Next/Font components. In the end I came up with some very powerful mocking functions for both instances that can be used for several other projects to come.

## Room for improvement

Here are a few basic features and considerations that this app:

- The website currently uses static data stored within the source code but it's fully ready to retrieve that data from a database or api with the change of only a few lines of code. In the future it could have a lightweight CMS such as Payload CMS to manage the content and make it easier to update the website.
- There is further room for performance optimization in the Stills photo gallery section and it needs to though and exploration of the underlying library to see if there are any performance improvements that can be made.

## Context

This is a React port of my own cinematography website that was initially created using Wordpress and had a similar look, feel and functionality.

Some features such as environment variable type checking, programmatic url patterns as well as custom server actions for content (which is static) are over-engineered and not necessary for such a simple website.

The reason for that is that I have used this project as a playground to test different development patterns, tooling and workflows and to learn more about React and Next.js.

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/theorib/theoribeiro.com-next
   ```
2. Navigate to the project directory:
   ```bash
   cd your-folder-name
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```

## Usage

To start the development server, run:

```bash
pnpm dev
```
