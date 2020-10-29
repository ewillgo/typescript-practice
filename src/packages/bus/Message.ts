import { Event } from './Event'

export interface Sender {
  send: (event: Event) => void
}

export class MessageSender implements Sender {
  public send(event: Event) {
    console.log('Send event ', event)
  }
}
