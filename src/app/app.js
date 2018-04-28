import 'ng-table/bundles/ng-table.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/app.css';

import 'bootstrap/dist/js/bootstrap.bundle.js';
import angular from 'angular';
import ngAnimate from 'angular-animate';

import 'angularjs-gauge/dist/angularjs-gauge.min.js';
import 'angular-chart.js/dist/angular-chart.min.js';
import '@uirouter/angularjs/release/angular-ui-router.js';
import ngTable from 'ng-table/bundles/ng-table';
import growlNotifications from 'angular-growl-notifications/dist/angular-growl-notifications.min.js';
import contentModal from './modules/common/content-modal/content-modal.directive';
import sideBarNavigation from './modules/common/side-bar-navigation/side-bar-navigation.component';
import deployGauge from './modules/canary/dashboard/deploy-gauge/deploy-gauge.component';
import deployModal from './modules/canary/dashboard/deploy-modal/deploy-modal.component';
import dashboardNotificationsController from './modules/common/dashboard-notifications/dashboard-notifications.controller';
import dashboardNotificationsDirective from './modules/common/dashboard-notifications/dashboard-notifications.directive';
import notificationService from './modules/common/notification-service/notification.service';
import {homeState, canaryState} from './app.states.js';
import appComponent from './app.component';
import homeComponent from './modules/home/home.component';
import canaryComponent from './modules/canary/canary.component';

const MODULE_NAME = 'my-playground';

angular.module(MODULE_NAME, [ "ngAnimate",
    "ngTable",
    "growlNotifications",
    "chart.js",
    "angularjs-gauge",
    "ui.router",
    deployGauge,
    deployModal,
    contentModal,
    sideBarNavigation,
    dashboardNotificationsController,
    dashboardNotificationsDirective,
    notificationService,
    appComponent,
    homeComponent,
    canaryComponent])
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/home');

        $stateProvider.state(homeState);
        $stateProvider.state(canaryState);
    });

export default MODULE_NAME;