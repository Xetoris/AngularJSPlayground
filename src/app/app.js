import 'ng-table/bundles/ng-table.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/app.css';

import 'bootstrap/dist/js/bootstrap.bundle.js';
import angular from 'angular';

import 'angularjs-gauge/dist/angularjs-gauge.min.js';
import 'angular-chart.js/dist/angular-chart.min.js';
import ngTable from 'ng-table/bundles/ng-table';
import growlNotifications from 'angular-growl-notifications/dist/angular-growl-notifications.min.js';
import contentModal from './directives/content-modal/content-modal.directive';
import sideBarNavigation from './components/side-bar-navigation/side-bar-navigation.component';
import deployGauge from './components/deploy-gauge/deploy-gauge.component';
import deployModal from './components/deploy-modal/deploy-modal.component';
import dashboardNotifications from './directives/dashboard-notifications/dashboard-notifications.controller';

let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};

class AppCtrl {
    constructor() {
        this.gaugeValue = 10;
        this.gaugeForeground = '#3498db';
        this.gaugeBackground = '#62cb31';
        this.url = 'https://github.com/preboot/angular-webpack';
        this.selectedHash = '';
        this.openNavigation = false;
    }

    openNav() {
        this.openNavigation = true;
        console.log("Open Navigation: " + this.openNavigation);
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
        $scope.dashboardNotify(message, 'danger');
    }
}

const MODULE_NAME = 'my-playground';

angular.module(MODULE_NAME, ["ngTable",
    "growlNotifications",
    "chart.js",
    "angularjs-gauge",
    deployGauge,
    deployModal,
    contentModal,
    sideBarNavigation,
    dashboardNotifications])
    .directive('app', app)
    .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;