const Shape = require('./components')


class Circle extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor)
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    <circle cx="150" cy="100" r="80" fill="${this.color}" /></svg>`
  };
}

class Square extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor)
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    <rect width="100" height="100" fill="${this.color}" /></svg>`
  };
}

class Triangle extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor)
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" /></svg>`
  };
}

module.exports = { Circle, Square, Triangle };
