#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/MeRichard123/React-Django-Structure ${repoName}`;
const installDepsCommand = `cd ${repoName} && cd frontend && npm i`;

console.log(`Cloning repository into ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit((code = -1));
console.log("Installing Dependencies....");
const installDeps = runCommand(installDepsCommand);
if (!installDeps) process.exit((code = -1));

console.log(
  "Congratulations! you are now up and running. Follow instructions below to start"
);

console.log("Start the Backend:");
console.log("cd backend");
console.log("virtualenv env");
console.log("env\\Scripts\\activate");
console.log("poetry install && python manage.py runserver");
console.log("Start the Frontend:");
console.log("cd frontend && npm start");
