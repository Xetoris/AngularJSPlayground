import './dashboard-notifications.template.css';

import angular from 'angular';

export default angular.module('directives.dashboard-notifications')
    .directive('dashboardNotifications', function () {
        return {
            template: require('./dashboard-notifications.template.html')
        }
    })
    .name;