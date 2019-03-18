import { EventEmitter } from 'events';

export enum EVENTS {
  CONSTRUCTING = 'CONSTRUCTING',
  PREINIT = 'PREINIT',
  INIT = 'INIT',
  POSTINIT = 'POSTINIT',
  AVAILABLE = 'AVAILABLE',
  ERRORED = 'ERRORED'
}

export class Event extends EventEmitter {

  static INSTANCE: Event = new Event();

  static Subscribe(EventName: string) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      Event.INSTANCE.on(EventName, (...args) => {
        descriptor.value(args);
      });
    }
  }

  static Emit(EventName: string) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      Event.INSTANCE.emit(EventName, descriptor.value());
    }
  }
}

class TEST {
  @Event.Subscribe('thing')
  public test(testarg: string) {
    console.log(testarg);
    //console.log(EventBus.eventNames());
  }

  @Event.Emit('thing')
  public tester(): string {
    return 'Emitted by Decorator';
  }
}

new TEST();

/**
 * EventBus: Container for events.
 * EventBus.emit('whatever event');
 * 
 * 'whatever event' is only able to be listened to on the EventBus object
 * const EventBus = require('whatever file').EventBus;
 * EventBus.on('whatever event');
 * 
 * because of whatever is calling the listeners needing to have access to the EventBus object
 * it creates overlap with all of the various modules
 * 
 * but if I want each plugin to have their own event bus, then we fall to the same issue
 * overlap between modules when events need to be listened to or emitted
 * 
 * 
 * Forge solves this in a way that instead of X class accessing Y event bus
 * X class subscribes itself to Y event bus
 * then when Y event bus emits an event
 * instead of X class having a listener, Y event bus calls the method subecribed to said event
 * 
 * In short, Y event bus calls X class rather than X class listening to Y event bus.
 * Even shorter, JS but backwards.
 */
/**
 * psuedo-code
 * 
 * class EventBus extends {
 *  public subscribe(event: string, handler: Function) {
 *    
 *  }
 * }
 */
