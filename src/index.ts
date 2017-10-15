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
import { HomeComponent } from './home/home.component';
import { ButtonComponent } from './buttons/buttons.component';

// create the main module
module('air-note', [uiRouter, angularMaterial, angularMessages])
    // register AppComponent
    .component(AppComponent.NAME, new AppComponent())
    //register HomeComponent
    .component(HomeComponent.NAME, new HomeComponent())
    //register ButtonComponent
    .component(ButtonComponent.NAME, new ButtonComponent())
    //config stateProvider provided by uiRouter
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
        $stateProvider.state({
            name: 'app',
            url: '/',
            component: AppComponent.NAME
        })
        .state(
            {
                name: 'app.home',
                url: 'home',
                component: HomeComponent.NAME
            })
            .state(
                {
                    name: 'app.buttons',
                    url: 'buttons',
                    component: ButtonComponent.NAME
                });

        $urlRouterProvider.otherwise('/home');
    }]);