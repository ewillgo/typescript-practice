import { busChannel } from '../../../bus/Constant'
import { EventBus, EventSource } from '../../../bus/EventBus'
import { Render } from '../../../graphics/Render'
import { Goods } from '../../goods/Goods'

export interface Eat {
  eat: (goods: Goods) => void
}

export interface Speak {
  say: (message: string) => void
}

export abstract class Mouth implements Eat, Speak, Render, EventSource {
  /**
   * Mouth tee
   *
   * @protected
   * @type {number}
   * @memberof Mouth
   */
  protected tee?: number

  /**
   * Mouth size
   *
   * @protected
   * @type {number}
   * @memberof Mouth
   */
  protected size?: number

  /**
   * Mouth color
   *
   * @protected
   * @type {string}
   * @memberof Mouth
   */
  protected color?: string

  /**
   * Event bus channel
   *
   * @protected
   * @type {EventBus}
   * @memberof Mouth
   */
  protected busChannel: EventBus = busChannel

  public addEventListener (eventName: string, callback: <T>(args: T) => void): void {

  }

  public setTee(tee: number): void {
    this.tee = tee
  }

  public setSize(size: number): void {
    this.size = size
  }

  public abstract eat(goods: Goods): void

  public abstract say(message: string): void

  public abstract render(): void
}

export class NormalMouth extends Mouth {
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
