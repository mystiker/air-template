// import styles for material including font
import 'angular-material/angular-material.css';

// import material design icons
import 'material-design-icons/iconfont/material-icons.css';

// import angular
import { module } from 'angular';

// import all dependend modules
import * as angularAria from 'angular-aria';
import * as angularMessages from 'angular-messages';
import * as angularAnimate from 'angular-animate';
import * as angularMaterial from 'angular-material';

// import ui-router 
import uiRouter from '@uirouter/angularjs';

// import demo components
import { AppComponent } from './app.component';

// create the main module
module('air-note', [uiRouter, angularMaterial, angularMessages])

    // register AppComponent
    .component(AppComponent.NAME, new AppComponent())

    //config stateProvider provided by uiRouter
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
        
        // add one root state
        $stateProvider.state({
            name: 'app',
            url: '/',
            component: AppComponent.NAME
        });

        // default to / for all other inputs
        $urlRouterProvider.otherwise('/');
    }]);