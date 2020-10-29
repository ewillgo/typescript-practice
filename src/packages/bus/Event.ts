export abstract class Event {
  protected name: string

  public constructor(name: string) {
    this.name = name
  }
}
