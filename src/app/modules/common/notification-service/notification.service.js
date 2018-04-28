import angular from 'angular';
import Guid from '../../../utility/guid.js'

class NotificationService {
    constructor() {
        this.notificationQueue = [];
        this.notificationTypes = ['info', 'warning', 'danger', 'success'];
    }

    /**
     * Provides notification to the user in the dashboard.
     *  Calls will present a growler message to the user with bootstrap formatting associated to the notification type.
     *
     *  Currently support 4 types: info, warning, danger, success.
     *  Default is info. All unknown types are set to info.
     *
     * @param {string} notification - The message to present to the user.
     * @param {string} type - The type of of the notification.
     * @returns {string,null} - Identifier for the message.
     */
    addNotification(notification, type) {
        let id = null;

        if (notification) {
            console.log("Queue Length: " + this.notificationQueue.length);
            if(this.notificationQueue.length >= 10)
            {
                this.notificationQueue.length = 0;
            }

            let notificationType = (type ? type.toLowerCase().trim() : 'info');

            if (this.notificationTypes.indexOf(notificationType) < 0) {
                notificationType = 'info';
            }

            id = Guid.newGuid();

            this.notificationQueue.push({
                id: id,
                notificationType: notificationType,
                notification: notification
            });
        }

        return id;
    }
}

export default angular.module('services.notification-service', [])
    .service('notificationService', NotificationService)
    .name;