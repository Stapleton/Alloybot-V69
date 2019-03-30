import { Event } from './Event';
import { PluginBase } from './PluginBase';

export class Register {

  static INSTANCE: Register = new Register();

  @Event.Emit('API#Register.Plugin')
  static Plugin(constructor: PluginBase) {
    
  }

  static Service(ServiceName: string) {

  }
}
