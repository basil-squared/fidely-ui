# Contributing to Fidely UI

Thanks for showing interest in contributing to **Fidely UI 💖**, we’re excited to have you here!

## Overview

There are many ways you can help improve Fidely UI:

- **Improve documentation**  
  Fix typos, clarify explanations, expand missing sections, or add new guides.

- **Add new demos**  
  Contribute component demos for the website and Storybook.  
  Open a PR to:
  - `apps/patterns/src/examples`
  - `apps/storybook/src/stories`

- **Fix bugs**  
  Report bugs, fix existing issues, or improve edge cases.

- **Contribute new features**  
  Propose new ideas via GitHub Discussions or work on an existing issue.

- **Enhance the codebase**  
  Refactor, optimize, or improve existing implementations.

> We welcome all contributions, no contribution is too small.

### Filing Issues

To help us resolve issues faster in **Fidely UI**, please file them in the correct area:

- **Component logic or accessibility issues**  
  These belong in **`packages/fidely-ui`**

- **Styling, tokens, or design issues**  
  These belong in **`packages/presets`** and are usually resolved via PRs

### Feature Requests

For new components or large feature ideas, please **open a GitHub Discussion first**.  
This helps us align on scope, API design, and implementation before work begins.

## About this repository

Fidely UI is a **monorepo**.

- We use [pnpm](https://pnpm.io) with [workspaces](https://pnpm.io/workspaces)
- We use [Changesets](https://github.com/changesets/changesets) for versioning and releases

## Development Setup

### 1. Fork the repository

Click the **Fork** button at the top right of the repository page.

---

### 2. Clone your fork locally

```bash
git clone https://github.com/your-username/fidely-ui.git
```

---

### 3. Navigate into the project

```bash
cd fidely-ui
```

---

### 4. Create a new branch

```bash
git checkout -b your-feature-branch
```

---

### 5. Install dependencies

```bash
pnpm install
```

---

### 6. Build all packages locally

```bash
pnpm build:packages
```

---

### 7. Start Storybook

```bash
pnpm dev:storybook
```

---

### 8. Start the documentation website

```bash
pnpm dev:web
```

---

> Running **`pnpm dev:web`** starts the **Next.js** server and builds the **Velite powered** documentation.

## Documentation

Documentation lives in the **`apps/website`** workspace and is written in **MDX**.

Docs are located at:

```bash
apps/website/content/docs
```

---

## Project Structure

Fidely UI is built in two layers:

### Panda Preset

- Design tokens

- Recipes and slot recipes

- Utilities powered by Panda CSS

### React Components

- Accessible, headless first components

- Built on Ark UI

- Styled using the Panda preset

## Components

All React components live in:

```bash
packages/fidely-ui
```

These wrap **Ark UI** primitives and expose a clean, composable API.

---

## Styles

Styling is handled via **Panda CSS recipes** and **slot recipes**.

lives in the folders below:

```bash
packages/presets
```

If you make changes to presets, or react components be sure to:

```bash
pnpm build:packages

```

> **Note**
> After running **`pnpm build:packages`**, if you are running the documentation site and encounter errors, navigate to:

```bash
apps/website/app/global.css
```

> Temporarily comment out the CSS layers, reload the dev server, then uncomment them.

## Commit Convention

We follow Conventional Commits:

```bash
category(scope): message
```

Allowed categories

- **feat / feature**: new features

- **fix**: bug fixes (reference issues when possible)

- **refactor**: code changes without behavior changes

- **docs**: documentation updates

- **build**: build system or dependency changes

- **test**: adding or updating tests

- **ci**: CI or GitHub Actions changes

- **chore**: all changes to the repository that do not fit into any of the above categories

Example

```bash
feat(components): add size prop to button
```

## Recommended Extensions

We recommend using the following extensions in your editor:

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)
