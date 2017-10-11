import { AppController } from "./app.controller";

export class AppComponent implements ng.IComponentOptions {
  static NAME: string = 'appView';
  controller: typeof AppController;
  controllerAs: any;
  template: any;
  bindings: any;

  constructor() {
    //this.bindings = { username: '@' };
    this.controller = AppController;
    this.template = require('./app.html');
    this.controllerAs = "vm";
  }
}