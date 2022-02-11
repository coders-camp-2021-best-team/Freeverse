# CodersCamp2021 Freeverse App

This project was made due to the **[CodersCamp2021](https://www.coderscamp.edu.pl/)**

[Docs](https://gracious-neumann-544c01.netlify.app/)

[Deploy on Netlify](https://freeverse-network.netlify.app/)

## Important Notices

### VSCode Recommended Extensions

-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
-   [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
-   [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
-   [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
-   [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
-   [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

### VSCode Format On Save

Please enable `Editor: Format On Save` option from `VSCode Settings` to automatically format your source code.

### Precommit Hook

We are using a great tool called Husky. It runs before every commit automatically linting and formatting your code.
**Remember that you need to first run `yarn install` to install it.**

### .env.example

There is a script that automatically copies `.env.example` to `.env` if `.env` does not already exist.
If you are a Windows user, please refer to the notice below.

### For Windows users

If you are a Windows user, please use Git Bash or any other UNIX-like shell (e.g. Git Bash).
Some commands **MAY NOT** work on default Windows Command Line.

## Available Scripts

In the project directory, you can run:

### `yarn install`

Installs all required packages.
This is the first command that you should run after cloning this repo.
**Without this you will not be able to run the app.**

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn lint`

Checks every source code file using ESLint and rules described in `.eslintrc`.

### `yarn format`

Formats entire project using Prettier according to formatting rules described in `.prettierrc`.
