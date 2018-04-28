import notificationService from './notification.service';

describe('Notification Service', () => {
    let model;

    beforeEach(angular.mock.module(notificationService));
    beforeEach(inject((notificationService) => {
        model = notificationService;
    }));

    it('starts empty', function () {
        expect(model).not.toBeNull();
        expect(model.notificationQueue).toBeTruthy();
        expect(model.notificationQueue.length).toEqual(0);
    });

    it('can queue a message', function () {
        expect(model.notificationQueue.length).toEqual(0);
        let message = 'test notification';
        let type = 'info';

        let messageId = model.addNotification(message, type);

        expect(messageId).not.toBeNull();
        expect(messageId.length).toBeGreaterThan(10);
        expect(model.notificationQueue.length).toEqual(1);

        let retrieved = model.notificationQueue[0];
        expect(retrieved.id).toEqual(messageId);
        expect(retrieved.notification).toEqual(message);
        expect(retrieved.notificationType).toEqual(type);
    });

    it('will not queue without a message', function(){
       let result = model.addNotification(null, 'info');

       expect(model.notificationQueue.length).toEqual(0);
       expect(result).toBeNull();
    });

    it('will queue an info message', function(){
        model.addNotification('Test', 'info');

        expect(model.notificationQueue.length).toEqual(1);

        let message = model.notificationQueue[0];

        expect(message.notificationType).toEqual('info');
    });

    it('will queue a warning message', function(){
        model.addNotification('Test', 'warning');

        expect(model.notificationQueue.length).toEqual(1);

        let message = model.notificationQueue[0];

        expect(message.notificationType).toEqual('warning');
    });

    it('will queue a danger message', function(){
        model.addNotification('Test', 'danger');

        expect(model.notificationQueue.length).toEqual(1);

        let message = model.notificationQueue[0];

        expect(message.notificationType).toEqual('danger');
    });

    it('will queue a success message', function(){
        model.addNotification('Test', 'success');

        expect(model.notificationQueue.length).toEqual(1);

        let message = model.notificationQueue[0];

        expect(message.notificationType).toEqual('success');
    });

    it('will queue unknown message types as info', function(){
        model.addNotification('Test', 'pizza');

        expect(model.notificationQueue.length).toEqual(1);

        let message = model.notificationQueue[0];

        expect(message.notificationType).toEqual('info');
    });

    it('will queue null message types as info', function(){
        model.addNotification('Test', null);

        expect(model.notificationQueue.length).toEqual(1);

        let message = model.notificationQueue[0];

        expect(message.notificationType).toEqual('info');
    });

    it('will queue WArNiNg as warning', function(){
        model.addNotification('Test', 'WArNiNg');

        expect(model.notificationQueue.length).toEqual(1);

        let message = model.notificationQueue[0];

        expect(message.notificationType).toEqual('warning');
    });

    it('will queue "  success " as success', function(){
        model.addNotification('Test', '  success ');

        expect(model.notificationQueue.length).toEqual(1);

        let message = model.notificationQueue[0];

        expect(message.notificationType).toEqual('success');
    });

    it('resets the queue after 10 messages', function () {
        let queued = [];

        for (let i = 0; i <= 10; i++) {
            queued.push(model.addNotification('Test' + i, 'info'));
        }

        expect(model.notificationQueue.length).toBeLessThanOrEqual(1);
        expect(queued.length).toEqual(11);

        let lastMessage = model.notificationQueue[0];
        let lastQueued = queued[10];

        expect(lastMessage.id).toEqual(lastQueued);
    });
});
