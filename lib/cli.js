const inquirer = require('inquirer');

class CLI {
  constructor() {
    this.text = '';
    this.textColor = '';
    this.shape = '';
    this.shapeColor = '';
  }
  run() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: "Please enter 3 characters for your logo's text.",
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Please enter your choice of font color.'
        },
        {
          type: 'list',
          name: 'shape',
          message: "Please enter from our list, your choice of shape for your logo's design.",
          choices: [
            'Circle',
            'Square',
            'Triangle',
          ]
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: "Please enter your choice of color for your logo's background.",
        }
      ])
  }
}

module.exports = CLI;