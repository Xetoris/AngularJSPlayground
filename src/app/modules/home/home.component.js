import './home.component.css';

import angular from 'angular';

export default angular.module('components.home', [])
    .component('home', {
        template: require('./home.template.html'),
        controller: function() { return {} }
    })
    .name;