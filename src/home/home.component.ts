class HomeController implements ng.IController {
    welcome: string = 'hello ng';
    constructor() {
    }
}

export class HomeComponent implements ng.IComponentOptions {
    static NAME: string = 'homeView';
    controller: any;
    template: any;
    constructor() {
        this.controller = HomeController;
        this.template = require('./home.html');
    }
}

// import angular from 'angular';
// import angular_material from 'angular-material';
// import 'angular-material/angular-material.css';

// import HomeController from './home.controller';

// export default angular.module('air-note.home', [angular_material])
//     .controller('HomeController', HomeController)
//     .name;