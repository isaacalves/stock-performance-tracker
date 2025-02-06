# Stock Chart Visualization

A React-based stock chart visualization tool using TwelveData API.
Just experimenting with stock market APIs and data visualisation.

## 🔑 Prerequisites

1. Get a free API key from [TwelveData](https://twelvedata.com/)
2. Create a `.env` file in the root directory:
```env
PUBLIC_TWELVEDATA_API_KEY=your_api_key_here
PUBLIC_USE_MOCK_DATA=false  # Set to true to use mock data
```

## 🚀 Tech Stack

- [Astro](https://astro.build) - Web framework
- [React](https://react.dev) - UI library
- [TanStack Query](https://tanstack.com/query) - Data fetching & caching
- [Chart.js](https://www.chartjs.org) with [react-chartjs-2](https://react-chartjs-2.js.org) - Chart visualization
- [TwelveData API](https://twelvedata.com) - Stock market data
- [Tailwind CSS](https://tailwindcss.com) - Styling

## 📦 Features

- Real-time stock data visualization
- Local storage caching to handle API rate limits
- Multiple stock comparison
- Percentage-based comparison view
- Mock data support for development

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 📝 Notes

- Free tier API has rate limits - the app uses caching to minimize API calls
- Mock data is available for development - set `PUBLIC_USE_MOCK_DATA=true`
- Cache can be cleared via the debug button (in development mode)

Original Astro project created with:

---
# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
