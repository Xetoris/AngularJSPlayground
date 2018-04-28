export default class AppCtrl {
    constructor(notificationService) {
        this.gaugeValue = 10;
        this.gaugeForeground = '#3498db';
        this.gaugeBackground = '#62cb31';
        this.url = 'https://github.com/preboot/angular-webpack';
        this.selectedHash = '';
        this.isOpen = false;
        this.notificationService = notificationService;
    }

    openNav() {
        this.isOpen = true;
        console.log("Navigation State: " + this.isOpen);
    }

    setNavState(newState) {
        console.log("Passed State: " + newState.isOpen);
        this.isOpen = newState.isOpen;
        console.log("Navigation State: " + this.isOpen);
    }

    incrementGauage() {
        this.gaugeValue += 10;

        console.log('New Gauge Value: ' + this.gaugeValue);
    }

    selectHash(hash) {
        console.log('Selected Hash: ' + hash);
        this.selectedHash = hash;
    }

    notify(message) {
        this.notificationService.addNotification(message, 'warning');
    }
}
