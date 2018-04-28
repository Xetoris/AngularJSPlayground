import angular from 'angular';
import DeployGaugeController from './deploy-gauge.controller.js';

export default angular.module('components.deploy-gauge', ["angularjs-gauge"])
    .component('deployGauge', {
        template: require('./deploy-gauge.template.html'),
        controller: DeployGaugeController,
        bindings: {
            'gaugeValue' : '<',
            'foregroundColor' : '<',
            'backgroundColor' : '<'
        }
    })
    .name;