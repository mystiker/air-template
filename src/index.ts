import 'angular-material/angular-material.css';
import 'material-design-icons/iconfont/material-icons.css';

import { module, bootstrap, element } from 'angular';
import angular_material from 'angular-material';
import uiRouter from '@uirouter/angularjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

module('air-note', [uiRouter])
    .component(AppComponent.NAME, new AppComponent())
    .component(HomeComponent.NAME, new HomeComponent())
    // element(document).ready( () => {
    //     bootstrap(document, ['air-note']);
    // });
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
            });

        $urlRouterProvider.otherwise('/');
    }]);

    //     
    // }])
    //.component(AppComponent.NAME, new AppComponent());
    //.component(HomeComponent.NAME, new HomeComponent());