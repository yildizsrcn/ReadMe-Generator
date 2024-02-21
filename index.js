const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
// const questions = [
    inquirer.prompt(
      {
        type: `input`,
        message: `What's the project title?`,
        name: `Title`,
        validate: (value)=>{ if(value){return true} else {return `I need a value to continue`}}
      },      

      {
        type: `input`,
        message: `What is your installation instructions ?`,
        name: `installation`,
        validate : (value)=>{ if(value){return true} else {return `I need a value to continue`}}
      },

      {
        type: `input`,
        message: `usage information`,
        name: `Usage`,
        validate: (value)=>{ if(value){return true} else {return `I need a value to continue`}}
      },

      {
        type: `list`,
        message: `Which license did you used?`,
        name: `license`,
        choices: [`Apache Licence 2.0`,`GNU General Public License v3.0`, `MIT license`, `Boost Software License`, `Eclipse Public License 2.0`],
        validate: (value)=>{ if(value){return true} else {return `I need a value to continue`}}
      },

      {
        type: `input`,
        message: `Who are the contributors?`,
        name: `contributing`,
        validate: (value)=>{ if(value){return true} else {return `I need a value to continue`}}
      }, 

      {
        type: `input`,
        message: `Test`,
        name: `tests`,
        validate: (value)=>{ if(value){return true} else {return `I need a value to continue`}}
      },

      {
        type: `input`,
        message: `Github username`,
        name: `git`,
        validate: (value)=>{ if(value){return true} else {return `I need a value to continue`}}
      },

      {
        type: `input`,
        message: `E-mail?`,
        name: `email`,
        validate: (value)=>{ if(value){return true} else {return `I need a value to continue`}}
      }
      );

then(({
    title,
    installation,
    usage,
    license,
    git,
    linkedin,
    email,
    contributing,
    tests,
    git,
    email
})=>{
    const template = `# ${title}


##installation
${installation}

##usage
${usage}

#Contribution
${contributing}


#Credits
${credit};

#License
${license};



#Contact
*Github: ${git};
*Linkedin: ${linkedin};
*E-mail: ${email} `;

createNewFile(title,template);

} );

function createNewFile(fileName,data){
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
      if(err){
        console.log(err)
      }
      console.log('Your README has been generated');
    }


)}



// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
