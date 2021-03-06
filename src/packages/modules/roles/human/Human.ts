import { Render } from '../../../graphics/Render'
import { Foods } from '../../goods/Foods'
import { Eat, Mouth, Speak } from './Mouth'

export abstract class Human implements Eat, Speak, Render {
  protected mouth?: Mouth

  protected setMouth(mouth: Mouth): void {
    this.mouth = mouth
  }

  public abstract eat(goods: Foods): void
  public abstract say(message: string): void
  public abstract render(): void
}
