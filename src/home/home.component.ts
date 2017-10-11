class HomeController implements ng.IController {
    welcome: string = 'hello ng';
    constructor() {
    }
}

export class HomeComponent implements ng.IComponentOptions {
    static NAME: string = 'homeView';
    controller: any;
    template: any;
    bindings: any;

    constructor() {
        this.controller = HomeController;
        this.template = require('./home.html');
        this.bindings = { welcome: '<' };
    }
}