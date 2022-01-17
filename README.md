# CodersCamp2021 Freeverse App

This project was made due to the **[CodersCamp2021](https://www.coderscamp.edu.pl/)**

## Important Notices

### Precommit Hook

We are using a great tool called Husky. It runs before every commit automatically linting and formatting your code.
**Remember that you need to first run `yarn` to install it.**

### .env.example

There is a script that automatically copies `.env.example` to `.env` if `.env` does not already exist.
If you are a Windows user, please refer to the notice below.

### For Windows users

If you are a Windows user, please use Git Bash or any other linux-like shell.
Some commands MAY NOT work on default Windows Command Line.

## Available Scripts

In the project directory, you can run:

### `yarn`

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
