# Cypress Test Automation
```
This guide outlines setting up your system, cloning, and running automated tests on both Windows and macOS environments.
```
# Prerequisites
```
Ensure your system specs meets minimum requriement to run a node server.
Node.js and npm (or yarn): Download and install the latest stable version of Node.js from the official website (https://nodejs.org/). This installation typically includes npm, the Node Package Manager. Alternatively, you can use a package manager like yarn for dependency management.
install any desired IDE of your choice; VSCode, Sublime, etc.
```

## Project Setup
```
Clone project from GIT to your desired local directory "git clone https://github.com/nuelnike/quidax.git"
Run your CMD/CLI
Navigate into directory on cli "cd c:/users/path to cloned project"
Install node dependencies "npm install"
Install Cypress globally "npm install cypress --save-dev"
Start the Cypress test runner "npx cypress open"

```

### Cypress Test Cases Execusion
```
After you start Cypress test runner, complete cypress ontime configuration.
Select E2E Configuration
Select your choiced browser
Wait for Cypress test runner to load up all test scripts "bootstrap_alert", "bootstrap_modal", etc.
Select any test suite to execute its test cases. 
```