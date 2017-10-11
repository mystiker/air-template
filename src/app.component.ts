export interface IAppScope extends ng.IScope {
  changeLocation: () => void;
}

class AppController implements ng.IController {
  static $inject = ['$state'];
  constructor(private $state: ng.ui.IStateService) {

  }

  changeLocation(): void {
    console.log("changeLocation called");

    this.$state.go('app.home');
  }
}

export class AppComponent implements ng.IComponentOptions {
  static NAME: string = 'appView';
  controller: any;
  template: any;
  constructor() {
    this.controller = AppController;
    this.template = require('./app.html');
  }
}