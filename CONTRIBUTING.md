# Contributing to Fidely UI

Thanks for showing interest in contributing to **Fidely UI 💖** — you rock!

## Overview

Here are a few ways you can help improve Fidely UI:

- **Improve the documentation**: Add new demos, fix typos, or expand missing information.
- **Add new demos**: Contribute new component demos to the website and Storybook.
- **Fix bugs**: Report bugs, fix them, or suggest improvements.
- **Contribute to the code**: Propose new features by opening a GitHub Discussion, or pick up an existing issue to work on.
- **Enhance the codebase**: Improve performance, accessibility, or developer experience.

> We welcome all contributions — no matter how big or small.

## Architecture

Fidely UI is built with **flexibility and reusability** in mind.

### Filing Issues

- **component logic or accessibility:** create an issue in the Fidely UI repository..
- **Styling or design problems:** these usually belong in the packages/presets folder and can be fixed via PR.

### Feature Requests

If you want a new component or significant feature, please open a **GitHub Discussion** first so we can talk it through.

## About this repository

This repository is a monorepo.

- We use [pnpm](https://pnpm.io) and [`workspaces`](https://pnpm.io/workspaces) for development.
- We use [changesets](https://github.com/changesets/changesets) for managing releases.

## Development

### Fork this repo

You can fork this repo by clicking the fork button in the top right corner of this page.

### Clone on your local machine

```bash
git clone https://github.com/your-username/fidely-ui.git
```

### Navigate to the project directory

```bash
cd fidely-ui
```

### Create a new Branch

```bash
git checkout -b your-feature-branch
```

### Install dependencies

```bash
pnpm install
```

### Build all packages locally

```bash
pnpm build:packages
```

Start Storybook

```bash
pnpm dev:storybook
```

Start documentation website

```bash
pnpm dev:web
```

## Documentation

Documentation lives in the `apps/website` workspace and is written in **MDX**. You can find documentation files at: `apps/website/content/docs`

```bash
pnpm dev:web
```

Documentation is written in `MDX`. You can find the documentation files in the `apps/website/content/docs` directory.

## Components

Components are built on top of Ark UI (headless) and live in: `packages/fidely-ui`

## Styles

Fidely UI styles are created using Panda CSS recipes and slotRecipes.

Relevant folders:

- `packages/presets` source of style presets
- `packages/styled-system` generated styled-system artifacts

If you make changes to presets, be sure to:

```bash
pnpm build:packages

pnpm install
```

to refresh the styled-system output.

## Commit Convention

We follow Conventional Commits:

`category(scope): message`

Use one of these categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(components): add new prop to the button component`

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

## Recommended Extensions

We recommend using the following extensions in your editor:

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)
- [MDX](https://mdxjs.com/)
