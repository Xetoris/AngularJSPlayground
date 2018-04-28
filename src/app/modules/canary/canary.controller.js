/**
 * Controller for the Canary parent component.
 */
export default class CanaryController {
    constructor() {
        this.environment = null;
        this.serviceName = null;
        this.activeStack = null;
        this.activeHosts = null;
        this.inactiveStack = null;
        this.inactiveHosts = null;
    }

    /**
     * Define the service you want the canary header to display.
     * @param {string} environment - Acronym of the environment.
     * @param {string} serviceName - Name of the service to fetch details about.
     */
    setFocusService(environment, serviceName) {
        this.environment = environment;
        this.serviceName = serviceName;
    }

    /**
     * Sets the information about a stack.
     * @param {string} stackName - Name of the active stack.
     * @param {int} hosts - Number of hosts in the group.
     * @param {boolean} isActive - Indicates which stack you are recording info about.
     */
    setStackInfo(stackName, hosts, isActive) {
        if (isActive) {
            this.activeStack = stackName;
            this.activeHosts = hosts;
        } else {
            this.inactiveStack = stackName;
            this.inactiveHosts = hosts;
        }
    }

    /**
     * Clears the focus of the header control.
     */
    clearFocus() {
        this.environment = null;
        this.serviceName = null;
    }
}