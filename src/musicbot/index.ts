import { PluginBase } from '../api/PluginBase';

class Musicbot extends PluginBase {
  constructor() {
    super('Musicbot');
  }

  @this.Event.Emit('oof')
  public test(): string {
    return 'test';
  }

}
