import { Goods } from './Goods'

export abstract class Foods extends Goods {
  public constructor(name: string) {
    super(name)
  }
}

export abstract class Fruit extends Foods {
  public constructor(name: string) {
    super(name)
  }
}

export class Apple extends Fruit {
  public constructor(name: string) {
    super(name)
  }
}
