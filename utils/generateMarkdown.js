// function to generate markdown for README

const fs = require('fs');
const inquirer = require('inquirer');


function generateMarkdown(data) {
  return `# ${data.title}


`;}

module.exports = generateMarkdown;
