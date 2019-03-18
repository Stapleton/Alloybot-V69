import { Logger } from './Logger';
import { Event } from './Event';

export class PluginBase {
  public name: string;

  protected Event: Event = Event.INSTANCE;

  protected logger: Logger = new Logger(this.name);

  constructor(name: string) {
    this.name = name;
  }
}
