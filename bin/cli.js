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
const installBackend = `cd .. && cd backend && poetry install`;

console.log(`Cloning repository into ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit((code = -1));
console.log("Installing Dependencies....");
const installDeps = runCommand(installDepsCommand);
if (!installDeps) process.exit((code = -1));
const installBackendDeps = runCommand(installBackend);
if (!installBackendDeps) process.exit((code = 1));

console.log(
  "Congratulations! you are now up and running. Follow instructions below to start"
);
