const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
// const questions = 
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
        message: `How do you test the project?`,
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
        validate: (value)=>{ if(value){return true} else {return `I need a value to continue`}},
      }

      ).then(({
      title,
      installation,
      instructions,
      credit,
      license,
      git,
      linkedin,
      email,
      usage,
      tests,
      contributing

      })=>{
        const template = `# ${title}

#Table of Content
##installation
${installation}

##usage
${usage}

##tests
${tests}

##Contribution
${contributing}


#Credits
${credit};

#License
${license};



#Contact
*Github: ${git};
*Linkedin: ${linkedin};
*E-mail: ${email} `;
        


createNewFile(template);

});



function createNewFile(data){
    fs.writeFile(`README.md`,data,(err)=>{
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
//   inquirer.prompt(questions)
//     .then(function (data) {
//       console.log(data);
//       const markdownContent = generateMarkdown(data)
//       writeToFile(markdownContent)
//     });
// }

// // function call to initialize program
// init();
