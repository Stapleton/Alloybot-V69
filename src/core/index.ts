import { Logger } from '../api/Logger';
import { PluginBase } from '../api/PluginBase';

class Core {
  private logger: Logger = new Logger('Core');
  private plugins: Map<string, PluginBase> = new Map();

  constructor() {

  }

  public register(plugin: PluginBase) {
    
  }
}
