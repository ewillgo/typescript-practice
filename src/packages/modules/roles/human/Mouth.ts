import { MessageSender } from '../../../bus/Message'
import { Render } from '../../../graphics/Render'
import { Goods } from '../../goods/Goods'

export interface Eat {
  eat: (goods: Goods) => void
}

export interface Speak {
  say: (message: string) => void
}

export abstract class Mouth implements Eat, Speak, Render {
  protected tee: number
  protected size: number
  protected color: string

  protected constructor(tee: number, size: number, color: string) {
    this.tee = tee
    this.size = size
    this.color = color
  }

  public abstract eat(goods: Goods): void

  public abstract say(message: string): void

  public abstract render(): void
}

export class NormalMouth extends Mouth {
  private messageSender: MessageSender = new MessageSender()

  public constructor(tee: number, size: number, color: string) {
    super(tee, size, color)
  }

  public eat(goods: Goods): void {
    console.log('Normal mouth eating goods...')
  }

  public say(message: string): void {
    throw new Error('Method not implemented.')
  }

  public render(): void {
    throw new Error('Method not implemented.')
  }
}

export class CherryMouth extends Mouth {
  public eat(goods: Goods): void {
    throw new Error('Method not implemented.')
  }
  public say(message: string): void {
    throw new Error('Method not implemented.')
  }
  public render(): void {
    throw new Error('Method not implemented.')
  }
}
