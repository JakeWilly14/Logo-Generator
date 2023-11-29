const inquirer = require('inquirer');
const { writeFile } = require('fs/promises')
const { Circle, Square, Triangle } = require('./shapeParams')


class CLI {
  run() {
    return inquirer
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
      .then(({shape, shapeColor, text, textColor}) => {
        let userShape;

        switch(shape) {
          case 'Circle':
            userShape = new Circle(shapeColor, text, textColor)
          break;

          case 'Square':
            userShape = new Square(shapeColor, text, textColor)
          break;

          case 'Triangle':
            userShape = new Triangle(shapeColor, text, textColor)
          break;

          default: break;
        }

        console.log(userShape);

        writeFile(`./examples/${shape}.svg`, userShape.render(), (err) => {
          console.log(err);
        })
      })
  }
}

module.exports = CLI;