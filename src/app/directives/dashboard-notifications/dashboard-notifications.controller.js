import './dashboard-notifications.template.html';
import angular from 'angular';

export default angular.module('directives.dashboard-notifications', ["growlNotifications"])
    .controller('dashboardNotificationsCtrl', ['$rootScope', function($rootScope){
        let count = 0;
        const notificationTypes = ['warning', 'info', 'danger', 'success'];

        $rootScope.dashboardNotifications = {};

        /**
         * Provides notification to the user in the dashboard.
         *  Calls will present a growler message to the user with bootstrap formatting associated to the notification type.
         *
         *  Currently support 4 types: info, warning, danger, success.
         *  Default is info. All unknown types are set to info.
         *
         * @param {string} notification - The message to present to the user.
         * @param {string} type - The type of of the notification.
         * @returns {boolean} - Indicates if the notification was attempted.
         */
        $rootScope.dashboardNotify = function(notification, type) {
            let notified = true;

            if(!notification){
                notified =  false;
            }else{
                if(!type || notificationTypes.indexOf(type.toLowerCase()) < 0){
                    type = 'info';
                }

                $rootScope.dashboardNotifications[count++] = { notificationType: type,
                                                               notification: notification };
            }

            return notified;
        }
    }])
    .name;