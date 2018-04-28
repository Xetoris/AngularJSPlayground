import angular from 'angular';
import appControl from './app.controller';
import './app.template.css';

export default angular.module('components.app', [])
    .component('app', {
        template: require('./app.template.html'),
        controller: appControl
    })
    .name;