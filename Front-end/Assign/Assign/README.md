# NextJS ECOM STARTER

Welcome to our project! This project is built using React and TypeScript, featuring a clear structure that separates different parts of the codebase into dedicated folders such as components, contexts, hooks, libraries, pages, styles, types, and utilities.

This README will guide you through the steps needed to set up the project on your local machine for development and testing purposes.

## Prerequisites

Make sure you have Node.js and npm installed on your machine. If not, you can download and install them from [here](https://nodejs.org/en/download/).

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine.

1. **Clone the repository**  
   Open a terminal and run the following git command:
   git clone https://github.com/anuragCX/nextjs_ecom_starter.git

2. **Navigate to the project directory**  
   Change the current working directory to the project's directory.
   cd <project-directory>

3. **Install dependencies**  
   To install the necessary dependencies, run the following command in your terminal:
   npm i

4. **Ensure Husky pre-commit hook is executable**  
   We use Husky to ensure that all commits meet our project's standards. If the pre-commit hook is not already executable, make it so using the following command:
   chmod +x .husky/pre-commit

5. **Install VS Code extensions**  
   We recommend several VS Code extensions for an optimized development experience. Please install the following:

- Prettier: Code formatter.
- ESLint: Identifies and reports on patterns found in ECMAScript/JavaScript code.
- Rainbow Brackets: Provides rainbow colors for round brackets, square brackets, and curly brackets.
- Better Comments: Improve your code commenting by annotating with alert, informational, TODOs, and more.
- GitLens: Supercharge the Git capabilities built into Visual Studio Code.

## Running the App Locally

After completing the setup, you're ready to run the app. Here are the necessary steps:

1. **Start the development server**  
   You can start a local development server by running the following command:
   npm run dev

2. **Build and start the server**  
   You can create a build for the project and start the server using the following commands:
   npm run build
   npm start

## Project Structure

Our project structure is organized as follows:

- `src/components`: This directory contains all the React components.
- `src/contexts`: This directory contains all the React contexts.
- `src/hooks`: This directory contains all custom hooks.
- `src/lib`: This directory contains any libraries used throughout the project.
- `src/pages`: This directory includes all the pages of our app.
- `src/styles`: Here you will find all the style files.
- `src/types`: This directory contains TypeScript typings and interfaces.
- `src/utils`: Here you will find all utility functions and constants.

## Contributing

We encourage you to contribute and make this project even better! Before contributing, make sure you have set up the project correctly. For any questions or concerns, feel free to contact us.

Enjoy coding!
