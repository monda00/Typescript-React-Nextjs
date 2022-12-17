let employeeName: string = 'John'
let age: number = 36
let isDone: boolean = false
let color: string = 'blue'

const array: string[] = []
array.push('Takuya')

const mixedArrayU: (string | number)[] = ['foo', 1]

const user: { name: string; age: number } = {
  name: 'Takuya',
  age: 36
}
console.log(user.name)
console.log(user.age)

function sayHello(name: string, greeting?: string): string {
  return `${greeting} ${name}`
}

sayHello('Takuya')
sayHello('Takuya', "Hello")

function printName(firstName: string, formatter: (name: string) => string) {
  console.log(formatter(firstName))
}

function formatName(name: string): string {
  return `${name} san`
}

printName('Takuya', formatName)

let sayHelloA = (name: string): string => `Hello ${name}`

const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement

interface Point {
  x: number
  y: number
}

function printPoint(point: Point) {
  console.log(`x axis is ${point.x}`)
  console.log(`y axis is ${point.y}`)
  console.log(`z axis is ${point.z}`)
}

interface Point {
  z: number
}

printPoint({ x: 100, y: 100, z: 200 })

class Point {
  x: number
  y: number

  constructor(x: number = 0, y: number = 0) {
    this.x = x
    this.y = y
  }

  moveX(n: number): void {
    this.x += n
  }

  moveY(n: number): void {
    this.y += n
  }
}

const point = new Point
point.moveX(10)
console.log(`${point.x}, ${point.y}`)

interface IUser {
  name: string
  age: number
  sayHello: () => string
}

class User implements IUser {
  name: string
  age: number

  constructor() {
    this.name = ''
    this.age = 0
  }

  sayHello(): string {
    return `Hello my name is ${this.name}, I'm {this.age} years old`
  }
}
