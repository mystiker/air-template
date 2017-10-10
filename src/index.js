import angular from 'angular';
import 'angular-material/angular-material.css';

import materialDesignIcons from 'material-design-icons/iconfont/material-icons.css';
import angular_material from 'angular-material';

import home from './pages/home/home.module';

angular.module('air-note', [angular_material, home]);