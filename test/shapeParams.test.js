const Circle = require('../lib/components');
const Square =  require('../lib/components');
const Triangle = require('../lib/components');

describe('circle', () => {
  test('properly generates circle', () => {
    const shape = new Circle();
    this.color = ("blue");
    this.text = ("SVG")
    this.textColor = ("white")
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text><circle cx="150" cy="100" r="80" fill="blue" /></svg>`);
  })
})

describe('square', () => {
  test('properly generates square', () => {
    const shape = new Square();
    this.color = ("blue");
    this.text = ("SVG")
    this.textColor = ("white")
    expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="blue" /></svg><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>');
  })
})

describe('triangle', () => {
  test('properly generates triangle', () => {
    const shape = new Triangle();
    this.color = ("blue");
    this.text = ("SVG")
    this.textColor = ("white")
    expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>');
  })
})