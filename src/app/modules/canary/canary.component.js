import './canary.template.css';

import angular from 'angular';
import canaryController from './canary.controller';

export default angular.module('component.canary', [])
    .component('canary', {
        template: require('./canary.template.html'),
        controller: canaryController
    })
    .name;