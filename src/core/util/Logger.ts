import { Signale } from 'signale';

export class Logger extends Signale {
  constructor(scope: string, interactive?: boolean, types?: object) {
    super({ scope: scope, interactive: interactive, types: types });
    this.config({
      "displayScope": true,
      "displayBadge": false,
      "displayDate": false,
      "displayFilename": false,
      "displayLabel": true,
      "displayTimestamp": true,
      "underlineLabel": false,
      "underlineMessage": false,
      "underlinePrefix": false,
      "underlineSuffix": false,
      "uppercaseLabel": true
    });
  }
}
