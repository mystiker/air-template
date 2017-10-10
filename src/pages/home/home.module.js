import angular from 'angular';
import angular_material from 'angular-material';
import 'angular-material/angular-material.css';

import HomeController from './home.controller';

export default angular.module('air-note.home', [angular_material])
    .controller('HomeController', HomeController)
    .name;