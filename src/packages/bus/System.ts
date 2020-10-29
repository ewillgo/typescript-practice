import { Event } from './Event'

export interface Consumer {
  on: (eventName: string, func: (event: Event) => void) => void
}

interface RegisterConsumer {
  addConsumer: (consumer: Consumer) => void
}

interface RegisterEvent {
  addEvent: (event: Event) => void
}

class ConsumerBucket implements RegisterConsumer {
  private consumers: Map<string, Consumer> = new Map()
  public addConsumer(consumer: Consumer) {

  }
}

class EventBucket implements RegisterEvent {
  protected bucket: Array<Event> = []

  public register(consumer: Consumer) {}

  public addEvent(event: Event) {}
}
