export default class SideBarNavigationController {
    constructor() {
    }

    closeSidebar() {
        this.onClose({newState: { isOpen: false }});
    }
}