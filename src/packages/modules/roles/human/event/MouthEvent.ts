import { Event } from '../../../../bus/Event'

export class EatEvent extends Event {
  public static NAME = 'eat-event'

  public constructor() {
    super(EatEvent.NAME)
  }
}

export class SpeakEvent extends Event {
  public static NAME = 'speak-event'
}
