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
