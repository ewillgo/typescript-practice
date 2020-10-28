import { Render } from '../graphic/Render'

interface Eat {
  eat: () => void
}

interface Speak {
  say: (message: string) => void
}

class Mouth implements Eat, Speak, Render {
  private tee = 32
  private color = 'red'

  public constructor(tee?: number, color?: string) {
    if (tee) {
      this.tee = tee
    }
    if (color) {
      this.color = color
    }
  }

  public eat() {
    console.log('Mouth eating something...')
  }

  public say(message: string) {
    console.log(`Mouth say: ${message}`)
  }

  public render() {
    console.log('Rendering mouth...')
  }
}

class Person implements Eat, Speak, Render {
  private mouth = new Mouth()

  public eat() {
    this.mouth.eat()
  }

  public say(message: string) {
    this.mouth.say(message)
  }

  public render() {
    this.mouth.render()
  }
}

const person: Person = new Person()
person.render()
person.eat()
person.say('Hello, World')
