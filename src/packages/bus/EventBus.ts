import { Event } from './Event'

export interface Bus {
  on: (eventName: string, callback: <T>(args: T) => void) => void
  off: (eventName: string, callback?: <T>(args: T) => void) => void
  emit: <T>(eventName: string, args: T) => void
}

export interface EventSource {
  addEventListener: (eventName: string, callback: <T>(args: T) => void) => void
}

export class EventBus implements Bus {
  private channel: { [key: string]: Function[] } = {}

  public on(eventName: string, callback: <T>(args: T) => void): void {
    if (!this.channel[eventName]) {
      this.channel[eventName] = []
    }
    this.channel[eventName].push(callback)
  }

  public off(eventName: string, callback?: <T>(args: T) => void): void {
    if (!callback) {
      this.channel[eventName] = []
    } else {
      const index: number = this.channel[eventName].indexOf(callback)
      ~index && this.channel[eventName].splice(index, 1)
    }
  }

  public emit<T>(eventName: string, args: T): void {
    if (this.channel[eventName]) {
      this.channel[eventName].forEach((item) => item(args))
    }
  }
}
