<div align="center">

<img src="./public/ahs.svg" width="100" height="100" />

A web application that enables users to remove the background of an image and craft attractive profile pictures for social media platforms.

---

[![](./public/demo-1.png)](https://attraktives-hs.vercel.app/start)
[![](./public/demo-2.png)](https://attraktives-hs.vercel.app/start)
[![](./public/demo-3.png)](https://attraktives-hs.vercel.app/start)

</div>

> [!TIP]
>
> Kindly read [this comprehensive tutorial](#) (TBA) to learn how to build this.

---

## Table of Contents

* [Apps](#apps)
* [Features](#features)
* [Important Files and Folders](#important-files-and-folders)
* [Getting Started](#getting-started)
* [Repo Stats Summary](#repo-stats-summary)
* [Contributors Guide](#contributors-guide)
* [License](#license)

---

## Apps

Generally, there are three apps in this project, namely:
1. Remove Image Background (`/bg-remove`) — can be accessed in the [live link](https://attraktives-hs.vercel.app/bg-remove) (it doesn't require a license).
2. Add Image Background Color (`bg-add`) — can tested in development using the demo license.
3. General Design Editor (`/editor`)  — can tested in development using the demo license.

## Features
 
* [x] Remove background from an image ([try it live](https://attraktives-hs.vercel.app/bg-remove)).
* [x] Add background options to a transparent image.
* [x] Create and edit designs with a Canva-like editor.
* [x] Authentication and protected pages.
* [ ] Show processing progress during background removal.

<div align="center">

![](./public/flow.svg)

</div>

## Important Files and Folders

| **Path**                           | **Description**                                 |
| ---------------------------------- | ----------------------------------------------- |
| `.env.example`                     | Example file with all the required environment variables.  | 
| `/app/auth`                        | `/auth/sign-in` and `auth/sign-up` authentication pages    |
| `/app/bg-add/page.tsx`             | Page for the background removal app.            |
| `/app/bg-remove/page.tsx`          | Page for the background color add app.          |
| `/app/editor/page.tsx`             | Page for the general design editor app.         |
| `/app/start/page.tsx`              | Page for the start page (select app).           |
| `/app/components/editorCanvas.tsx` | React component for the `/editor` page.         |
| `/app/components/headshotCanvas.tsx` | React component for the `/bg-add` page.       |
| `/app/layout.tsx`                  | Shared UI for fonts and metadata configuration. |
| `/app/page.tsx`                    | Home page (`/`).                                |
| `/utils/grid.ts`                   | Utility file for the grid layout options.       |
| `middleware.ts`                    | Run some logic before a request is processed.   |

## Getting Started

To run this application locally, kindly follow the steps below:

1. Rename the `.env.example` file to `.env.local` and fill in the required environment variables (leave the others as they are).
    * `NEXT_PUBLIC_CESDK_LICENSE` — IMG.LY CE.SDK license (sign up for one or get a demo [here](https://img.ly/docs/cesdk/engine/quickstart)).
    * `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` — Clerk publishable API key (sign up and copy this from the [dashboard](https://dashboard.clerk.com)).
    * `CLERK_SECRET_KEY` — Clerk secret API key (sign up and copy this from the [dashboard](https://dashboard.clerk.com)).

3. Install all required dependencies with the `npm install` command (or use `yarn` / `pnpm`).

4. Run the development server with the command `npm run dev`.

5. Open [`http://localhost:3000`](http://localhost:3000) with your browser to see the result.

6. All good! You can start modifying any page and the app will auto-update.

## Repo Stats Summary


## Contributors Guide

1. Fork [this repository](https://github.com/BolajiAyodeji/attraktives-headshot) (learn how to do this [here](https://help.github.com/articles/fork-a-repo)).

2. Clone the forked repository like so:

```bash
git clone https://github.com/<your username>/attraktives-headshot.git && cd attraktives-headshot
```

3. Make your changes and create a pull request ([learn how to do this](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)).

4. I'll attend to your pull request soon and provide some feedback.

## License

This repository is published under the [MIT](LICENSE) license.

---

<div align="center">
<a href="https://bolajiayodeji.com" target="_blank" rel="noopener noreferrer"><img src="https://bolajiayodeji.com/favicon.png" width="30" /></a>
</div>
