import angular from 'angular';

export default angular.module('directives.dashboard-notifications', ["growlNotifications"])
    .controller('dashboardNotificationsCtrl', ['notificationService', function(notificationService){
        let self = this;

        self.notifications = notificationService.notificationQueue;
    }])
    .name;