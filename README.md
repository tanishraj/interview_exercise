# Parcel + React

Welcome to Parcel React! This repository serves as a starter template for building React applications using Parcel bundler along with additional tooling for linting, formatting, testing, and development. It includes features such as ESLint, Prettier, Jest, React Testing Library, SCSS support, and more.

## Table of Contents

- [Introduction](#introduction)
- [Scripts](#scripts)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Parcel + React has been used for setting up React projects quickly with modern tooling. It includes:

- **React**: A JavaScript library for building user interfaces.
- **Parcel**: A fast, zero-config web application bundler.
- **ESLint**: A pluggable JavaScript linter to enforce coding standards.
- **Prettier**: An opinionated code formatter to maintain code style consistency.
- **Jest**: A delightful JavaScript testing framework.
- **React Testing Library**: A simple and complete testing library for React applications.
- **SCSS**: A CSS preprocessor adding features like variables, nesting, and mixins.
- **React Router**: Declarative routing for React applications.

## Scripts

This project comes with the following npm scripts defined in the `package.json` file:

- `start`: Starts the development server using Parcel, opening the default browser.
- `build`: Builds the production-ready optimized bundle using Parcel.
- `serve`: Serves the production build using Parcel, opening the default browser.
- `lint`: Lints the source code using ESLint.
- `lint:fix`: Fixes linting errors automatically using ESLint and formats code using Prettier.
- `test`: Runs tests using Jest.
- `test:watch`: Runs tests in watch mode using Jest.
- `format`: Formats code using Prettier.

You can run these scripts using the `npm run` command followed by the script name.

### Steps to run the project locally

To get started with this project, follow these steps:

1. Clone this repository to your local machine:
`git clone https://github.com/tanishraj/interview_exercise.git`

2. Navigate into the project directory:
`cd interview_exercise`

3. Install dependencies:
`yarn install`

4. Start the development server:
`yarn start`

5. Open your browser and navigate to `http://localhost:1234` to see the application running.

### Steps to generate the unit test coverage report

1. Run the below command to see the coverage report
`yarn test:coverage`

2. Open the file available on the below path to see the test coverage.
`coverage/lcov-report/index.html`


### Run the end-to-end tests
Run the below command to perform end-to-end testing
`yarn cypress`


### Steps to build the project

1. Run the below command to build the app
`yarn build`

2. once the build is complete, `dist` folder will be created. To run the production build app.
`yarn serve`

### Check for lint errors
Run the below command to check potential linting issues
`yarn lint`


### Fix the linting issues
Run the below command to fix potential linting issues
`yarn lint:fix`



##
For additional configuration or customization, refer to the respective documentation of the tools used in this project.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request. Before contributing, please make sure to read the Contributing Guidelines.

## License
This project is licensed under the ISC License - see the LICENSE file for details.

