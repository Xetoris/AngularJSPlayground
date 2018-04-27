import 'ng-table/bundles/ng-table.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/app.css';

import 'bootstrap/dist/js/bootstrap.bundle.js';
import angular from 'angular';
import ngAnimate from 'angular-animate';

import 'angularjs-gauge/dist/angularjs-gauge.min.js';
import 'angular-chart.js/dist/angular-chart.min.js';
import ngTable from 'ng-table/bundles/ng-table';
import growlNotifications from 'angular-growl-notifications/dist/angular-growl-notifications.min.js';
import contentModal from './directives/content-modal/content-modal.directive';
import sideBarNavigation from './components/side-bar-navigation/side-bar-navigation.component';
import deployGauge from './components/deploy-gauge/deploy-gauge.component';
import deployModal from './components/deploy-modal/deploy-modal.component';
import dashboardNotificationsController from './directives/dashboard-notifications/dashboard-notifications.controller';
import dashboardNotificationsDirective from './directives/dashboard-notifications/dashboard-notifications.directive';
import notificationService from './services/notification-service/notification-service';

let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};

class AppCtrl {
    constructor(notificationService) {
        this.gaugeValue = 10;
        this.gaugeForeground = '#3498db';
        this.gaugeBackground = '#62cb31';
        this.url = 'https://github.com/preboot/angular-webpack';
        this.selectedHash = '';
        this.isOpen = false;
        this.notificationService = notificationService;
    }

    openNav() {
        this.isOpen = true;
        console.log("Navigation State: " + this.isOpen);
    }

    setNavState(newState) {
        console.log("Passed State: " + newState.isOpen);
        this.isOpen = newState.isOpen;
        console.log("Navigation State: " + this.isOpen);
    }

    incrementGauage() {
        this.gaugeValue += 10;

        console.log('New Gauge Value: ' + this.gaugeValue);
    }

    selectHash(hash) {
        console.log('Selected Hash: ' + hash);
        this.selectedHash = hash;
    }

    notify(message) {
        this.notificationService.addNotification(message, 'warning');
    }
}

const MODULE_NAME = 'my-playground';

angular.module(MODULE_NAME, [ "ngAnimate",
    "ngTable",
    "growlNotifications",
    "chart.js",
    "angularjs-gauge",
    deployGauge,
    deployModal,
    contentModal,
    sideBarNavigation,
    dashboardNotificationsController,
    dashboardNotificationsDirective,
    notificationService])
    .directive('app', app)
    .controller('AppCtrl', ['notificationService', AppCtrl]);

export default MODULE_NAME;