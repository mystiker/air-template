import 'angular-material/angular-material.css';
import 'material-design-icons/iconfont/material-icons.css';

import { module } from 'angular';
import angular_material from 'angular-material';
import uiRouter from 'angular-ui-router';

import home from './pages/home/home.module';

module('air-note', [angular_material, uiRouter, home])
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
        // $stateProvider.state({
        //     name: 'app',
        //     url: '/',
        //     controller: home
        // });

        $urlRouterProvider.otherwise('/app');
    }]);