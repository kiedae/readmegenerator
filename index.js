const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        message: "What would you like this project to be called?",
        name: 'title',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'Title name is required, not optional';
            }
        },
    },
    {
        type: 'input',
        message: "What was the USER story that development was based around?",
        name: 'userStory',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'Please provide the user story used.';
            }
        },
    },
    {
        type: 'input',
        message: "Describe the functionality of your app.",
        name: 'functionality',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'Please provide input on the functionality of your app.';
            }
        },
    },
    {
        type: 'input',
        message: "Please provide a link to the application's repository",
        name: 'repository',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'Please provide a link to your repository';
            }
        },
    }
]).then(({ title, userStory, functionality, repository }) => {
    const renderReadme = `# ${title}

# USER STORY
${userStory}

# Functionality / About the project
${functionality}

# Where to find the Source Code

${repository}
`;

    fs.writeFile('./README.md', renderReadme, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Readme Created');
        }
    });
});