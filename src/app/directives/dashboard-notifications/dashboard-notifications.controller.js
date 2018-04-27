import './dashboard-notifications.template.css';

import angular from 'angular';

export default angular.module('directives.dashboard-notifications', ["growlNotifications"])
    .controller('dashboardNotificationsCtrl', ['notificationService', function(notificationService){
        let self = this;

        self.notifications = notificationService.notificationQueue;
    }]).directive('dashboardNotifications', function(){
        return {
            template: require('./dashboard-notifications.template.html')
        }
    })
    .name;