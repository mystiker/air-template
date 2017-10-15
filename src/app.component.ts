// import the controller
import { AppController } from "./app.controller";

// This is our AppComponent class.
export class AppComponent implements ng.IComponentOptions {
  
  // Public name of this component (used to register the component in angular)
  public static NAME: string = 'appView';

  // Implemented properties from ng.IComponentOptions
  public controller: typeof AppController;
  public controllerAs: any;
  public template: any;

  constructor() {
    this.controller = AppController; // Assign the controller
    this.template = require('./app.template.html'); // Require the template (gets loaded via webpack html-loader)
    this.controllerAs = "vm"; // Absolutely necessary. The default setting is $ctrl but it did not work
  }
}