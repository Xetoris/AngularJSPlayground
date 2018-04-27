import angular from 'angular';

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
            if (!type || this.notificationTypes.indexOf(type.toLowerCase()) < 0) {
                type = 'info';
            }

            id = Guid.newGuid();

            this.notificationQueue.push({
                id: id,
                notificationType: type,
                notification: notification
            });
        }

        return id;
    }
}

export default angular.module('services.notification-service', [])
    .service('notificationService', NotificationService)
    .name;