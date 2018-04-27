import './side-bar-navigation.component.css';

import angular from 'angular';
import SideBarNavigationController from './side-bar-navigation.controller.js';

export default angular.module('components.side-bar-navigation', [])
    .component('sideBarNavigation', {
        template: require('./side-bar-navigation.template.html'),
        controller: SideBarNavigationController,
        bindings: {
            'isOpen' : '<',
            'onClose' : '&'
        }
    })
    .name;